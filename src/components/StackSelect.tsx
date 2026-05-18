const STACKS = [
  'JavaScript', 'TypeScript', 'React', 'Vue', 'Angular', 'Next.js', 'Nuxt.js',
  'Node.js', 'Python', 'Java', 'Go', 'Rust', 'Ruby', 'PHP', 'C#', 'C++',
  'React Native', 'Flutter', 'iOS', 'Android',
  'AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes',
  'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
];

interface StackSelectProps {
  value1: string;
  value2: string;
  onChange1: (value: string) => void;
  onChange2: (value: string) => void;
}

export default function StackSelect({ value1, value2, onChange1, onChange2 }: StackSelectProps) {
  return (
    <div className="stack-select">
      <span className="filter-label">Tech Stack (up to 2)</span>
      <div className="select-row">
        <select
          className="field-select"
          value={value1}
          onChange={(e) => onChange1(e.target.value)}
        >
          <option value="">— primary stack —</option>
          {STACKS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select
          className="field-select"
          value={value2}
          onChange={(e) => onChange2(e.target.value)}
        >
          <option value="">— secondary stack —</option>
          {STACKS.filter((s) => s !== value1).map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
