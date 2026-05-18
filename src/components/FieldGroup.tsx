interface FieldGroupProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant: 'include' | 'exclude';
}

export default function FieldGroup({
  label,
  value,
  onChange,
  placeholder,
  variant,
}: FieldGroupProps) {
  return (
    <div className={`field-group field-group--${variant}`}>
      <label className="field-label">{label}</label>
      <textarea
        className="field-textarea"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? 'Separate multiple values with commas'}
        rows={3}
      />
    </div>
  );
}
