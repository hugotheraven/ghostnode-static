# GhostNode Static Site

A clean, modern static website for GhostNodeSec privacy publication.

## Design Philosophy

- **Minimal & Fast:** No frameworks, no JavaScript dependencies, pure HTML/CSS
- **Dark Theme:** Professional, easy on the eyes, security/privacy aesthetic
- **Mobile-First:** Fully responsive design
- **Substack-Complementary:** Drives traffic to the main Substack publication

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#0a0a0f` | Main page background |
| Secondary | `#12121a` | Cards, sections |
| Tertiary | `#1a1a24` | Accents, hover states |
| Text | `#e4e4e7` | Primary text |
| Muted | `#a1a1aa` | Secondary text |
| Accent | `#10b981` | Emerald green (security vibe) |
| Accent Hover | `#34d399` | Hover states |

## Typography

- **Primary:** Inter (Google Fonts) - clean, modern, highly readable
- **Fallback:** System fonts (Apple System, BlinkMacSystemFont, Segoe UI)

## File Structure

```
ghostnode-static/
├── index.html          # Homepage
├── about.html          # About page
├── contact.html        # Contact page
├── css/
│   └── style.css       # All styles (7KB)
└── assets/             # Future images, icons
```

## Pages

### Homepage (`index.html`)
- Hero section with value proposition
- Featured articles (links to Substack)
- Topic cards (what we cover)
- Newsletter CTA

### About (`about.html`)
- Mission statement
- Approach/philosophy
- Topics covered
- Newsletter CTA

### Contact (`contact.html`)
- Email, Substack, social links
- What to contact about
- FAQ section
- Newsletter CTA

## Deployment Options

### Option 1: GitHub Pages (Recommended)
```bash
# Push to GitHub repo
git init
git add .
git commit -m "Initial GhostNode static site"
git branch -M main
git remote add origin git@github.com:ghostnodesec/ghostnodesec.github.io.git
git push -u origin main
```

Site will be live at: `https://ghostnodesec.github.io`

### Option 2: Netlify
1. Drag & drop `ghostnode-static/` folder to [netlify.com](https://netlify.com)
2. Or connect GitHub repo for auto-deploy

### Option 3: Cloudflare Pages
1. Connect GitHub repo
2. Deploy automatically on push

### Option 4: Simple Hosting
Upload contents to any static hosting (S3, DigitalOcean Spaces, etc.)

## Custom Domain

If using GitHub Pages with custom domain:
1. Add `CNAME` file with domain name
2. Configure DNS in domain registrar

## Future Enhancements

- [ ] Add blog archive page (static list of all Substack posts)
- [ ] RSS feed integration
- [ ] Search functionality (client-side)
- [ ] Dark/light mode toggle
- [ ] Newsletter signup form (Substack embed)
- [ ] Social sharing buttons
- [ ] Open Graph meta tags for better link previews

## Maintenance

To update articles:
1. Edit `index.html` featured articles section
2. Keep in sync with Substack publication

To add new pages:
1. Copy existing page structure
2. Update navigation in all pages
3. Add link to footer

## License

© 2026 GhostNodeSec. All rights reserved.
