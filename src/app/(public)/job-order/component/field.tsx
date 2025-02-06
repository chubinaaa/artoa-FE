interface FieldProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export default function FormField({
  label,
  children,
  className = "",
}: FieldProps) {
  return (
    <div className={className}>
      <label className="block">{label}</label>
      {children}
    </div>
  );
}
