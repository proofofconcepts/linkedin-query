interface Option {
  value: string;
  label: string;
}

interface RadioGroupProps {
  label: string;
  name: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

export default function RadioGroup({ label, name, options, value, onChange }: RadioGroupProps) {
  return (
    <div className="radio-group">
      <span className="filter-label">{label}</span>
      <div className="radio-options">
        {options.map((opt) => (
          <label
            key={opt.value}
            className={`radio-option${value === opt.value ? ' radio-option--active' : ''}`}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}
