import * as React from "react";
import { Trash2 } from "lucide-react";
import { IBlind } from "@/domain/blind/Blind";
import { Card, CardHeader, CardContent } from "@/presentation/design-system/components/Card";
import { FabricSelector } from "./FabricSelector";
import { DimensionInput } from "./DimensionInput";
import { useCalculatorStore } from "@/infrastructure/store/calculatorStore";

interface BlindCardProps {
  blind: IBlind;
  index: number;
}

export const BlindCard: React.FC<BlindCardProps> = ({ blind, index }) => {
  const { updateBlind, removeBlind, getSubtotal } = useCalculatorStore();

  const subtotal = getSubtotal(blind);

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-1 items-center gap-2">
            <div className="rounded-full bg-[var(--color-primary)]/20 flex justify-center items-center w-5 h-5 shrink-0">
              <span className="font-bold text-[var(--color-primary)] text-[10px]">
                {index + 1}
              </span>
            </div>
            <input 
              type="text"
              placeholder="Nombre (ej. Sala)"
              value={blind.name || ''}
              onChange={(e) => updateBlind(blind.id, { name: e.target.value })}
              className="font-medium text-[var(--text-main)] text-sm bg-transparent border-b border-transparent focus:outline-none focus:border-[var(--color-primary)] transition-colors w-full placeholder:text-[var(--text-muted)]/50 pb-0.5"
            />
          </div>
          <button 
            onClick={() => removeBlind(blind.id)}
            className="cursor-pointer bg-transparent border-0 opacity-40 hover:opacity-100 transition-opacity flex items-center justify-center p-1"
            title="Eliminar persiana"
          >
            <Trash2 className="size-4 text-[var(--text-muted)]" />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <FabricSelector 
          selectedFabricId={blind.fabricId}
          onChange={(fabricId) => updateBlind(blind.id, { fabricId })}
        />
        <div className="grid grid-cols-2 gap-4">
          <DimensionInput 
            label="Ancho (cm)" 
            value={blind.widthCm} 
            onChange={(val) => updateBlind(blind.id, { widthCm: val })} 
          />
          <DimensionInput 
            label="Alto (cm)" 
            value={blind.heightCm} 
            onChange={(val) => updateBlind(blind.id, { heightCm: val })} 
          />
        </div>
        <div className="flex pt-1 justify-between items-center">
          <span className="text-[var(--text-muted)] text-xs leading-4">
            Subtotal
          </span>
          <span className="font-semibold text-[var(--text-main)] text-sm leading-5">
            ${subtotal.toFixed(2)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
