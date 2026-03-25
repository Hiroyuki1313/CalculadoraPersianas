import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, Eclipse, Sun, CircleDot, Info } from "lucide-react";
import { FABRICS, IFabric } from "@/domain/blind/Fabric";
import { cn } from "@/lib/utils";

const IconMap: Record<string, React.ReactNode> = {
  'eclipse': <Eclipse className="size-4" />,
  'sun': <Sun className="size-4" />,
  'circle-dot': <CircleDot className="size-4" />,
  'info': <Info className="size-3" />
};

const CategoryLabels: Record<string, string> = {
  'traslucida': 'Traslúcidas',
  'blackout': 'Blackout',
  'sheer': 'Sheer Elegance'
};

interface FabricSelectorProps {
  selectedFabricId: string;
  onChange: (fabricId: string) => void;
}

export const FabricSelector: React.FC<FabricSelectorProps> = ({ selectedFabricId, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedFabric = FABRICS.find(f => f.id === selectedFabricId) || FABRICS[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const groupedFabrics = FABRICS.reduce((acc, fabric) => {
    if (!acc[fabric.category]) acc[fabric.category] = [];
    acc[fabric.category].push(fabric);
    return acc;
  }, {} as Record<string, IFabric[]>);

  return (
    <div className="flex flex-col gap-2 relative w-full" ref={containerRef}>
      <label className="font-medium uppercase text-[var(--text-muted)] text-xs leading-4 tracking-wider">
        Tela / Modelo
      </label>
      <div className="relative flex flex-col gap-0 w-full z-10">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "cursor-pointer bg-[var(--color-surface-elevated)] flex px-4 py-3 justify-between items-center transition-all border",
            isOpen ? "rounded-t-xl border-[var(--color-border-focus)] border-b-0" : "rounded-xl border-[var(--color-border-subtle)]"
          )}
        >
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2 text-[var(--text-main)]">
              {IconMap[selectedFabric.iconName]}
              <span className="font-semibold text-sm leading-5">
                {selectedFabric.name}
              </span>
            </div>
            <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider pl-6 font-medium">
              {CategoryLabels[selectedFabric.category]} • {selectedFabric.widthMts.toFixed(2)}m ancho
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-[var(--text-main)] text-sm leading-5">
              ${selectedFabric.pricePerSquareMeter}
            </span>
            {isOpen ? (
              <ChevronUp className="size-4 text-[var(--text-muted)]" />
            ) : (
              <ChevronDown className="size-4 text-[var(--text-muted)]" />
            )}
          </div>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 rounded-b-xl bg-[var(--bg-surface-elevated)] border-[var(--color-border-focus)] border border-t-0 flex flex-col overflow-y-auto max-h-[400px] shadow-2xl z-20 custom-scrollbar">
            {Object.entries(groupedFabrics).map(([category, fabrics], catIdx) => (
              <div key={category} className="flex flex-col">
                <div className="bg-[var(--bg-base)] px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold text-[var(--text-muted)] border-y border-[var(--color-border-subtle)]/30">
                  {CategoryLabels[category]}
                </div>
                {fabrics.map((fabric) => (
                  <div
                    key={fabric.id}
                    onClick={() => {
                      onChange(fabric.id);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "cursor-pointer flex px-4 py-3 justify-between items-center hover:bg-[var(--color-primary)]/5 transition-colors border-b border-[var(--color-border-subtle)]/20 last:border-0",
                      fabric.id === selectedFabric.id ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]" : "text-[var(--text-muted)]"
                    )}
                  >
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        {IconMap[fabric.iconName]}
                        <span className={cn("text-sm leading-5", fabric.id === selectedFabric.id ? "font-bold text-[var(--text-main)]" : "font-medium")}>
                          {fabric.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 pl-6 text-[10px] text-[var(--text-muted)]/70">
                        <span>Ancho: {fabric.widthMts.toFixed(2)}m</span>
                      </div>
                    </div>
                    <span className="font-semibold text-[var(--text-main)] text-sm leading-5">
                      ${fabric.pricePerSquareMeter}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--color-border-subtle);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};
