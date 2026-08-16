import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type FieldShellProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
};

function FieldShell({ id, label, required, error, hint, children, className = "" }: FieldShellProps) {
  const helpId = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <div className={`form-field ${className}`.trim()}>
      <label htmlFor={id}>
        {label}{required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {children}
      {error ? <p className="form-field__error" id={helpId} role="alert">{error}</p> : null}
      {!error && hint ? <p className="form-field__hint" id={helpId}>{hint}</p> : null}
    </div>
  );
}

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
  id: string;
  label: string;
  error?: string;
  hint?: string;
};

export function TextField({ id, label, error, hint, required, className, ...props }: TextFieldProps) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  return (
    <FieldShell id={id} label={label} required={required} error={error} hint={hint} className={className}>
      <input id={id} required={required} aria-invalid={Boolean(error)} aria-describedby={describedBy} {...props} />
    </FieldShell>
  );
}

type SelectFieldProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "id"> & {
  id: string;
  label: string;
  children: ReactNode;
  error?: string;
  hint?: string;
};

export function SelectField({ id, label, error, hint, required, className, children, ...props }: SelectFieldProps) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  return (
    <FieldShell id={id} label={label} required={required} error={error} hint={hint} className={className}>
      <select id={id} required={required} aria-invalid={Boolean(error)} aria-describedby={describedBy} {...props}>
        {children}
      </select>
    </FieldShell>
  );
}

type TextareaFieldProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> & {
  id: string;
  label: string;
  error?: string;
  hint?: string;
};

export function TextareaField({ id, label, error, hint, required, className, ...props }: TextareaFieldProps) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  return (
    <FieldShell id={id} label={label} required={required} error={error} hint={hint} className={className}>
      <textarea id={id} required={required} aria-invalid={Boolean(error)} aria-describedby={describedBy} {...props} />
    </FieldShell>
  );
}
