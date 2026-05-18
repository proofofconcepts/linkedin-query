export interface QueryFields {
  titlesIn: string;
  titlesOut: string;
  companiesIn: string;
  companiesOut: string;
  keywordsIn: string;
  keywordsOut: string;
  stacks: string[];
  area: string;
  seniority: string;
  jobType: string;
}

const AREA_TERMS: Record<string, string[]> = {
  frontend: ['Frontend Developer', 'Frontend Engineer'],
  backend: ['Backend Developer', 'Backend Engineer'],
  fullstack: ['Full Stack Developer', 'Fullstack Developer'],
};

const SENIORITY_TERMS: Record<string, string[]> = {
  junior: ['Junior', 'Entry Level'],
  mid: ['Mid Level', 'Pleno'],
  senior: ['Senior', 'Sênior'],
};

const JOB_TYPE_TERMS: Record<string, string[]> = {
  national: ['Brasil'],
  international: ['remote', 'international'],
};

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
  const titleTerms = [
    ...parseTerms(fields.titlesIn),
    ...(AREA_TERMS[fields.area] ?? []),
  ];

  const keywordTerms = [
    ...parseTerms(fields.keywordsIn),
    ...fields.stacks.filter(Boolean),
    ...(JOB_TYPE_TERMS[fields.jobType] ?? []),
  ];

  const includeParts: string[] = [
    includeGroup(titleTerms),
    includeGroup(parseTerms(fields.companiesIn)),
    includeGroup(keywordTerms),
    includeGroup(SENIORITY_TERMS[fields.seniority] ?? []),
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
