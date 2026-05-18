# LinkedIn Boolean Query Builder

A free, client-side tool that generates valid [LinkedIn boolean search strings](https://www.linkedin.com/help/linkedin/answer/a524335) from a simple form — no account, no backend, no tracking.

Fill in job titles, companies, and keywords (with include/exclude for each), and get a ready-to-paste search string instantly.

---

## Why this exists

LinkedIn's search box supports powerful boolean syntax (`AND`, `OR`, `NOT`, quoted phrases, grouped expressions), but writing it correctly by hand is tedious and error-prone. This tool generates it for you, every time, following LinkedIn's official rules.

**Example output:**
```
("Software Engineer" OR "Developer") AND ("Google" OR "Stripe") AND "remote" NOT "Manager" NOT "Intern"
```

---

## Features

- **Job titles** — include and exclude
- **Companies** — include and exclude
- **Keywords** — include and exclude
- **Live preview** of the generated query
- **Copy to clipboard** in one click
- **Open in LinkedIn** — launches the search directly in your browser
- Fully client-side — nothing leaves your browser

---

## Getting started

```bash
git clone https://github.com/proofofconcepts/linkedin-query.git
cd linkedin-query
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## How to use

1. Fill in one or more fields — separate multiple values with commas
2. The boolean query updates live as you type
3. Click **Copy to Clipboard** and paste it into LinkedIn's search box, or click **Open in LinkedIn** to go directly

---

## LinkedIn boolean search rules

| Rule | Example |
|------|---------|
| `AND` — both terms must match | `"React" AND "TypeScript"` |
| `OR` — either term matches | `("React" OR "Vue")` |
| `NOT` — exclude a term | `NOT "Manager"` |
| Quotes — exact phrase match | `"Software Engineer"` |
| Parentheses — group expressions | `("Dev" OR "Engineer")` |
| **Operators must be UPPERCASE** | `AND` not `and` |
| Unsupported: `*` `+` `-` `{}` `[]` `<>` | — |

Full reference: [LinkedIn Boolean Search Help](https://www.linkedin.com/help/linkedin/answer/a524335)

---

## Tech stack

- [React 18](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)
- Zero runtime dependencies beyond React

---

## Contributing

Contributions are welcome! Here are some ideas if you want to help:

- [ ] **Save / load presets** — save a query configuration to localStorage and restore it later
- [ ] **Query history** — keep a list of recently generated queries
- [ ] **Tag-style input** — replace textareas with a tag/chip input (press Enter or comma to add a term)
- [ ] **Field-specific search** — generate queries targeting LinkedIn's `title:`, `company:` field filters
- [ ] **Share via URL** — encode the current form state in the URL so it can be shared
- [ ] **Dark / light theme toggle** — explicit toggle instead of relying on system preference
- [ ] **Character limit warning** — LinkedIn's search box has a query length limit
- [ ] **Unit tests** for `queryBuilder.ts`
- [ ] **Deploy to GitHub Pages / Vercel**

To contribute:

```bash
# 1. Fork the repo and clone your fork
git clone https://github.com/<your-username>/linkedin-query.git
cd linkedin-query
npm install

# 2. Create a branch
git checkout -b feature/your-feature-name

# 3. Make your changes, then open a pull request
```

Please keep pull requests focused — one feature or fix per PR. Open an issue first if you're planning something large.

---

## License

MIT — use it, fork it, ship it.
