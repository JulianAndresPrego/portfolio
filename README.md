# Julián Andrés Prego — Personal Portfolio

Personal portfolio website built as a single self-contained HTML file.
No frameworks, no dependencies, no build step required.

🌐 **Live site:** [https://julianandresprego.github.io/portfolio](https://julianandresprego.github.io/portfolio)

---

## 📁 Project Structure

```
julian-prego-portfolio/
├── index.html       ← Full portfolio (HTML + CSS + JS, all in one file)
└── README.md        ← This file
```

---

## 🚀 How to Deploy on GitHub Pages

1. **Create the repository** on GitHub (e.g. `portfolio`)
2. **Push this folder:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/JulianAndresPrego/portfolio.git
   git push -u origin main
   ```
3. Go to **Settings → Pages → Source → Deploy from branch → `main` / `root`**
4. Your site will be live at `https://julianandresprego.github.io/portfolio`

---

## ➕ How to Add a New Project

Open `index.html` and search for the comment:

```
➕ ADD NEW PROJECTS HERE
```

You'll find a complete template ready to copy. The steps are:

1. **Choose a row layout:**
   | Class | Columns | Use for |
   |-------|---------|---------|
   | `featured` | 3/6 (half) | Main showcase project |
   | `half` | 3/6 | Standard project |
   | `third` | 2/6 | Compact project (use 3 per row) |

2. **Copy a card block** and update:
   - `href` → link to GitHub repo or live project
   - `proj-num` → next sequential number
   - `proj-tags` → tech stack (classes: `.py` `.r` `.bi` `.html`)
   - `proj-title` → project name
   - `proj-desc` → short description
   - `proj-img` SVG → thumbnail visual

3. **Update the hero counter** — search for `9+` and increment if needed

4. Commit and push → GitHub Pages redeploys automatically

---

## 🎨 Color Palette (Argentina-inspired)

| Variable | Hex | Role |
|----------|-----|------|
| `--acc` | `#75b2dd` | Celeste argentino (primary) |
| `--acc2` | `#c8a43a` | Sol de Mayo / gold (secondary) |
| `--acc3` | `#a8cce8` | Light celeste |
| `--txt` | `#eef3f8` | Main text |
| `--txt2` | `#7a98b8` | Secondary text |
| `--bg` | `#060a10` | Background |

---

## 🖥️ Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, grid, flexbox, animations
- **Vanilla JS** — scroll reveal, hamburger menu, experience tabs
- **Fonts** — Space Grotesk · DM Serif Display · JetBrains Mono (Google Fonts)
- **Zero dependencies** — no npm, no build, no framework

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|-----------|--------|
| `> 1100px` | Full desktop — hero flex-row, 6-col project grid |
| `≤ 1100px` | Tablet — 4-col project grid, smaller photo |
| `≤ 767px` | Mobile — hamburger menu, stacked hero, 1-col grid |
| `≤ 380px` | Small phones — reduced font sizes |

---

*Built with Claude · 2025*
