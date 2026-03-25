import * as React from "react";
import { ShieldCheck } from "lucide-react";
import { useCalculatorStore } from "@/infrastructure/store/calculatorStore";

export const StickyFooter: React.FC = () => {
  const { blinds, getTotal } = useCalculatorStore();
  const total = getTotal();

  return (
    <div className="fixed backdrop-blur-md bg-[var(--bg-surface)]/95 border-[var(--color-border-subtle)] border-t inset-x-0 bottom-0 z-50 flex justify-center w-full">
      <div className="flex p-6 flex-col gap-2 w-full" style={{ maxWidth: 375 }}>
        <div className="flex justify-between items-center">
          <span className="text-[var(--text-muted)] text-xs leading-4">
            {blinds.length} {blinds.length === 1 ? 'persiana' : 'persianas'}
          </span>
          <div className="flex items-center gap-1">
            <span className="text-[var(--text-muted)] text-xs leading-4">
              Total
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-[var(--color-success)]" />
            <span className="font-medium text-[var(--color-success)] text-xs leading-4">
              Cotización segura
            </span>
          </div>
          <span className="font-bold text-[var(--text-main)] text-2xl leading-8 tracking-tight">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};
