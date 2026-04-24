# Julián Andrés Prego — Personal Portfolio

> Data Scientist & Data Engineer · Salerno, Italy

🌐 **Live:** [julianandresprego.github.io/portfolio](https://julianandresprego.github.io/portfolio)

---

## 📁 Project Structure

```
portfolio/
├── index.html                 ← Main HTML (structure only)
├── assets/
│   ├── css/
│   │   └── style.css          ← All styles & responsive breakpoints
│   ├── js/
│   │   └── main.js            ← Interactions (menu, reveal, tabs)
│   └── img/
│       └── profile.jpg        ← Profile photo
├── .github/
│   └── workflows/
│       └── deploy.yml         ← Auto-deploy to GitHub Pages on push
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### View locally
Just open `index.html` in any browser — no server needed.

### Deploy to GitHub Pages

**Option A — GitHub Actions (recommended, already configured):**
1. Push to `main` branch
2. Go to **Settings → Pages → Source → GitHub Actions**
3. Done — deploys automatically on every push

**Option B — Manual:**
1. Go to **Settings → Pages → Source → Deploy from branch**
2. Select `main` / `root`
3. Save

---

## ➕ Adding a New Project

Open `assets/css/style.css` or `index.html` and search for:
```
ROW 5: ADD NEW PROJECT CARDS HERE
```

### Card classes (6-column grid)
| Class | Width | Use for |
|-------|-------|---------|
| `featured` | 3/6 cols | Main showcase project |
| `half` | 3/6 cols | Standard project |
| `third` | 2/6 cols | Compact (3 per row) |

### Row combinations
| Layout | Classes |
|--------|---------|
| 2 cards | `half` + `half` |
| 3 cards | `third` + `third` + `third` |
| 1 big + 1 | `featured` + `half` |

### Steps
1. Find the `ROW 5` comment in `index.html`
2. Copy any existing `<a class="proj-card ...">` block
3. Update `href`, `proj-num`, `proj-tags`, `proj-title`, `proj-desc`
4. Replace the `<svg>` inside `.proj-img` with your thumbnail
5. Update the hero `10+` counter if needed
6. Commit → push → auto-deploys via GitHub Actions

---

## 🎨 Design System

### Color Palette (Argentina-inspired)
| Token | Value | Role |
|-------|-------|------|
| `--acc` | `#75b2dd` | Celeste argentino · primary accent |
| `--acc2` | `#c8a43a` | Sol de Mayo · gold |
| `--acc3` | `#a8cce8` | Light celeste |
| `--txt` | `#eef3f8` | Primary text |
| `--txt2` | `#7a98b8` | Secondary text |
| `--txt3` | `#3d5570` | Muted text |
| `--bg` | `#060a10` | Background |
| `--bg2` | `#0a1018` | Surface |
| `--border` | `#172030` | Border |

### Typography
| Role | Font |
|------|------|
| Headings | Space Grotesk |
| Body | DM Serif Display |
| Mono / labels | JetBrains Mono |

### Responsive Breakpoints
| Breakpoint | Layout |
|-----------|--------|
| `> 1100px` | Desktop — hero flex-row, 6-col project grid |
| `≤ 1100px` | Tablet — 4-col grid, smaller photo |
| `≤ 767px` | Mobile — hamburger, stacked hero, 1-col grid |
| `≤ 380px` | Small phones — reduced font & photo sizes |

---

## 🛠 Tech Stack

- **HTML5** · **CSS3** · **Vanilla JS** — zero dependencies, no build step
- **Google Fonts** — Space Grotesk, DM Serif Display, JetBrains Mono
- **GitHub Actions** — automated deployment on push to `main`

---

## 📬 Contact

- **Email:** pregojulian@gmail.com
- **LinkedIn:** [julián-andrés-prego](https://www.linkedin.com/in/julián-andrés-prego-a09540146)
- **GitHub:** [@JulianAndresPrego](https://github.com/JulianAndresPrego)

---

*Built with ♥ · 2025*
