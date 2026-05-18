export interface QueryFields {
  titlesIn: string;
  titlesOut: string;
  companiesIn: string;
  companiesOut: string;
  keywordsIn: string;
  keywordsOut: string;
}

function parseTerms(raw: string): string[] {
  return raw
    .split(',')
    .map((t) => t.trim())
    .filter((t) => t.length > 0);
}

function quoteTerms(terms: string[]): string[] {
  return terms.map((t) => `"${t}"`);
}

function includeGroup(terms: string[]): string {
  if (terms.length === 0) return '';
  const quoted = quoteTerms(terms);
  return quoted.length === 1 ? quoted[0] : `(${quoted.join(' OR ')})`;
}

export function buildQuery(fields: QueryFields): string {
  const includeParts: string[] = [
    includeGroup(parseTerms(fields.titlesIn)),
    includeGroup(parseTerms(fields.companiesIn)),
    includeGroup(parseTerms(fields.keywordsIn)),
  ].filter((p) => p.length > 0);

  const excludeParts: string[] = [
    ...quoteTerms(parseTerms(fields.titlesOut)),
    ...quoteTerms(parseTerms(fields.companiesOut)),
    ...quoteTerms(parseTerms(fields.keywordsOut)),
  ].map((q) => `NOT ${q}`);

  const parts = [includeParts.join(' AND '), ...excludeParts].filter(
    (p) => p.length > 0
  );

  return parts.join(' ');
}
