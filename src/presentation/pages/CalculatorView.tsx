"use client";

import * as React from "react";
import { Calculator, Plus } from "lucide-react";
import { Button } from "@/presentation/design-system/components/Button";
import { BlindCard } from "@/presentation/features/calculator/components/BlindCard";
import { StickyFooter } from "@/presentation/features/calculator/components/StickyFooter";
import { useCalculatorStore } from "@/infrastructure/store/calculatorStore";

export const CalculatorView = () => {
  const { blinds, addBlind } = useCalculatorStore();

  return (
    <div className="bg-[var(--bg-base)] text-[var(--text-main)] min-h-screen w-full flex flex-col items-center relative">
      <div className="flex flex-col w-full max-w-[375px] pb-[120px] relative">
        <div className="flex p-6 flex-col gap-6 w-full">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-[var(--text-main)] flex justify-center items-center w-8 h-8">
                <Calculator className="size-4 text-[var(--bg-base)]" />
              </div>
              <span className="font-semibold text-lg leading-7 tracking-tight">
                PersiCalc
              </span>
            </div>
            <span className="text-[var(--text-muted)] text-xs leading-4">
              v2.0
            </span>
          </div>

          {/* Body: Blinds List */}
          <div className="flex flex-col gap-4">
            {blinds.map((blind, idx) => (
              <BlindCard key={blind.id} blind={blind} index={idx} />
            ))}

            {/* Add Button */}
            <div className="flex justify-center mt-2">
              <Button variant="outline" size="icon" onClick={addBlind} title="Añadir otra persiana">
                <Plus className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <StickyFooter />
    </div>
  );
};
