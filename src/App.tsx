import { useState } from 'react';
import { buildQuery } from './utils/queryBuilder';
import FieldGroup from './components/FieldGroup';
import QueryOutput from './components/QueryOutput';
import StackSelect from './components/StackSelect';
import RadioGroup from './components/RadioGroup';
import './App.css';

const AREA_OPTIONS = [
  { value: '', label: 'Any' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'fullstack', label: 'Fullstack' },
];

const SENIORITY_OPTIONS = [
  { value: '', label: 'Any' },
  { value: 'junior', label: 'Junior' },
  { value: 'mid', label: 'Mid-level' },
  { value: 'senior', label: 'Senior' },
];

const JOB_TYPE_OPTIONS = [
  { value: '', label: 'Any' },
  { value: 'national', label: 'National (Brasil)' },
  { value: 'international', label: 'International / Remote' },
];

function App() {
  const [titlesIn, setTitlesIn] = useState('');
  const [titlesOut, setTitlesOut] = useState('');
  const [companiesIn, setCompaniesIn] = useState('');
  const [companiesOut, setCompaniesOut] = useState('');
  const [keywordsIn, setKeywordsIn] = useState('');
  const [keywordsOut, setKeywordsOut] = useState('');

  const [stack1, setStack1] = useState('');
  const [stack2, setStack2] = useState('');
  const [area, setArea] = useState('');
  const [seniority, setSeniority] = useState('');
  const [jobType, setJobType] = useState('');

  const query = buildQuery({
    titlesIn,
    titlesOut,
    companiesIn,
    companiesOut,
    keywordsIn,
    keywordsOut,
    stacks: [stack1, stack2],
    area,
    seniority,
    jobType,
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
            <h2 className="section-title">Quick Filters</h2>
            <div className="filters">
              <StackSelect
                value1={stack1}
                value2={stack2}
                onChange1={setStack1}
                onChange2={setStack2}
              />
              <RadioGroup
                label="Area"
                name="area"
                options={AREA_OPTIONS}
                value={area}
                onChange={setArea}
              />
              <RadioGroup
                label="Seniority"
                name="seniority"
                options={SENIORITY_OPTIONS}
                value={seniority}
                onChange={setSeniority}
              />
              <RadioGroup
                label="Job Type"
                name="jobType"
                options={JOB_TYPE_OPTIONS}
                value={jobType}
                onChange={setJobType}
              />
            </div>
          </section>

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
                placeholder="e.g. startup, open source"
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
