import * as React from "react";

interface DimensionInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  unit?: string;
}

export const DimensionInput: React.FC<DimensionInputProps> = ({ label, value, onChange, unit = "cm" }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="font-medium uppercase text-[var(--text-muted)] text-xs leading-4 tracking-wider">
        {label}
      </label>
      <div className="rounded-xl bg-[var(--color-surface-elevated)] border-[var(--color-border-subtle)] border relative flex items-center overflow-hidden focus-within:border-[var(--color-border-focus)] transition-colors">
        <input
          type="number"
          min={1}
          value={value || ''}
          onChange={(e) => onChange(parseInt(e.target.value) || 0)}
          className="w-full bg-transparent border-0 px-4 py-3 font-semibold text-[var(--text-main)] text-base focus:outline-none appearance-none"
        />
        <span className="text-[var(--text-muted)] text-xs bg-[var(--color-surface-elevated)] pr-4 pointer-events-none">
          {unit}
        </span>
      </div>
    </div>
  );
};
