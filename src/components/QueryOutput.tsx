import { useState } from 'react';

interface QueryOutputProps {
  query: string;
}

export default function QueryOutput({ query }: QueryOutputProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!query) return;
    await navigator.clipboard.writeText(query);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const linkedInUrl = query
    ? `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(query)}`
    : undefined;

  return (
    <div className="query-output">
      <h2 className="query-output__title">Generated Query</h2>
      <pre className="query-output__preview">
        {query || <span className="query-output__empty">Fill in the fields above to generate a query.</span>}
      </pre>
      <div className="query-output__actions">
        <button
          className="btn btn--primary"
          onClick={handleCopy}
          disabled={!query}
        >
          {copied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
        {linkedInUrl && (
          <a
            className="btn btn--secondary"
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}
