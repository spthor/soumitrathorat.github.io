# soumitrathorat.github.io

Personal portfolio website for **Soumitra Thorat** — Sociologist | Researcher.

## Live Site

[https://soumitrathorat.github.io](https://soumitrathorat.github.io)

## Structure

```
├── index.html                  # Homepage (hero + intro)
├── portfolio.html              # Portfolio listing page
├── contact.html                # Contact form page
├── css/style.css               # All styles
├── js/main.js                  # Nav interactions
├── projects/
│   ├── phd-research.html       # PhD case study (KCL)
│   ├── gw-research.html        # GWU virtual mourning research
│   ├── civic-engagement.html   # Civic engagement (placeholder)
│   └── brightline.html         # Brightline project (placeholder)
├── assets/                     # Images go here
├── .gitignore
├── LICENSE
└── README.md
```

## Deploy to GitHub Pages

1. Create a repo named `soumitrathorat.github.io`
2. Push all files to `main`
3. Go to Settings → Pages → Source: Deploy from branch (`main` / `root`)
4. Site goes live at `https://soumitrathorat.github.io`

## Contact Form Setup

The contact form uses [Formspree](https://formspree.io). To activate it:
1. Create a free Formspree account
2. Create a new form and copy your form ID
3. Replace `YOUR_FORM_ID` in `contact.html` with your actual ID

## Customization

- **Add images**: Place in `assets/` and reference with `<img>` tags in case study pages
- **Edit content**: All text is in the HTML files — no build step needed
- **Placeholder pages**: `civic-engagement.html` and `brightline.html` need your content added

## Fonts

- Libre Baskerville (serif headings) + Source Sans 3 (body) via Google Fonts

## License

Content © 2026 Soumitra Thorat. Code is MIT licensed.
