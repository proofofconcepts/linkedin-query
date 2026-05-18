# LinkedIn Boolean Query Builder

## What this project is

A client-side tool that translates structured form inputs (job titles, companies, keywords — each with include/exclude variants) into a valid **LinkedIn boolean search string**. The generated string can be pasted directly into LinkedIn's search box or opened via the "Open in LinkedIn" button.

No backend, no authentication, no external API calls — entirely client-side React + TypeScript.

## Why it exists

LinkedIn's search box supports powerful boolean syntax (`AND`, `OR`, `NOT`, quoted phrases, parenthetical groups), but writing it correctly by hand is error-prone. This tool generates the query string following LinkedIn's official rules every time.

References:
- [LinkedIn Boolean Search Help](https://www.linkedin.com/help/linkedin/answer/a524335)
- [LinkedProspect Boolean Search Tool](https://linkedprospect.com/linkedin-boolean-search-tool/#tool) (UX inspiration)

## Key LinkedIn Boolean Rules

- Operators `AND`, `OR`, `NOT` must be **UPPERCASE**
- Multi-word phrases must be wrapped in double quotes: `"Software Engineer"`
- Groups use parentheses: `("Dev" OR "Engineer")`
- Unsupported characters: `*`, `+`, `-`, `{}`, `[]`, `<>`

## Project Structure

```
src/
  utils/queryBuilder.ts       — pure function that builds the boolean string
  components/FieldGroup.tsx   — reusable include/exclude textarea pair
  components/QueryOutput.tsx  — generated query preview + copy/open buttons
  App.tsx                     — state management, layout
  App.css                     — styles
  index.css                   — global resets
```

## Install & Run

```bash
npm install
npm run dev        # start dev server (http://localhost:5173)
npm run build      # production build → dist/
npm run preview    # serve the production build locally
npm run lint       # ESLint
```
