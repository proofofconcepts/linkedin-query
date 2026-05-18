import { useState } from 'react';
import { buildQuery } from './utils/queryBuilder';
import FieldGroup from './components/FieldGroup';
import QueryOutput from './components/QueryOutput';
import './App.css';

function App() {
  const [titlesIn, setTitlesIn] = useState('');
  const [titlesOut, setTitlesOut] = useState('');
  const [companiesIn, setCompaniesIn] = useState('');
  const [companiesOut, setCompaniesOut] = useState('');
  const [keywordsIn, setKeywordsIn] = useState('');
  const [keywordsOut, setKeywordsOut] = useState('');

  const query = buildQuery({
    titlesIn,
    titlesOut,
    companiesIn,
    companiesOut,
    keywordsIn,
    keywordsOut,
  });

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">LinkedIn Boolean Query Builder</h1>
        <p className="app-subtitle">
          Fill in the fields below to generate a boolean search string for
          LinkedIn's search box.
        </p>
      </header>

      <main className="app-main">
        <div className="sections">
          <section className="section">
            <h2 className="section-title">Job Titles</h2>
            <div className="section-fields">
              <FieldGroup
                label="Include"
                value={titlesIn}
                onChange={setTitlesIn}
                placeholder="e.g. Software Engineer, Developer, Tech Lead"
                variant="include"
              />
              <FieldGroup
                label="Exclude"
                value={titlesOut}
                onChange={setTitlesOut}
                placeholder="e.g. Manager, Director, Intern"
                variant="exclude"
              />
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Companies</h2>
            <div className="section-fields">
              <FieldGroup
                label="Include"
                value={companiesIn}
                onChange={setCompaniesIn}
                placeholder="e.g. Google, Meta, Stripe"
                variant="include"
              />
              <FieldGroup
                label="Exclude"
                value={companiesOut}
                onChange={setCompaniesOut}
                placeholder="e.g. Accenture, Wipro"
                variant="exclude"
              />
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Keywords</h2>
            <div className="section-fields">
              <FieldGroup
                label="Include"
                value={keywordsIn}
                onChange={setKeywordsIn}
                placeholder="e.g. React, TypeScript, remote"
                variant="include"
              />
              <FieldGroup
                label="Exclude"
                value={keywordsOut}
                onChange={setKeywordsOut}
                placeholder="e.g. sales, marketing"
                variant="exclude"
              />
            </div>
          </section>
        </div>

        <QueryOutput query={query} />
      </main>
    </div>
  );
}

export default App;
