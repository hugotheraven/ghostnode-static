// Fetch latest articles from GhostNode Substack RSS feed
// Uses rss2json.com free API to parse RSS (no CORS issues)
(function() {
  const RSS_URL = 'https://ghostnodesec.substack.com/feed';
  const CONTAINER = document.getElementById('latest-articles');
  const ARTICLE_COUNT = 4;
  
  if (!CONTAINER) return;
  
  // rss2json free API (works for small volumes without key)
  const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}&count=${ARTICLE_COUNT}`;
  
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      if (data.status !== 'ok' || !data.items || data.items.length === 0) {
        CONTAINER.innerHTML = '<p style="color: var(--color-text-muted); text-align: center;">Unable to load articles. <a href="https://ghostnodesec.substack.com" target="_blank">View on Substack →</a></p>';
        return;
      }
      
      const articles = data.items.slice(0, ARTICLE_COUNT).map(item => {
        const date = new Date(item.pubDate).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
        
        // Remove HTML from description, truncate to 150 chars
        const excerpt = item.description
          .replace(/<[^>]*>/g, '')
          .replace(/\s+/g, ' ')
          .trim()
          .substring(0, 150) + '...';
        
        return `
          <article class="article-card">
            <div class="article-meta">${date}</div>
            <h3>${item.title}</h3>
            <p class="article-excerpt">${excerpt}</p>
            <a href="${item.link}" class="read-more" target="_blank">Read Article →</a>
          </article>
        `;
      }).join('');
      
      CONTAINER.innerHTML = articles;
    })
    .catch(err => {
      console.error('RSS fetch error:', err);
      CONTAINER.innerHTML = '<p style="color: var(--color-text-muted); text-align: center;">Unable to load articles. <a href="https://ghostnodesec.substack.com" target="_blank">View on Substack →</a></p>';
    });
})();