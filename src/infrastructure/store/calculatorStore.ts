import { create } from 'zustand';
import { IBlind } from '@/domain/blind/Blind';
import { CalculateQuoteUseCase } from '@/application/useCases/CalculateQuote';

interface CalculatorState {
  blinds: IBlind[];
  addBlind: () => void;
  removeBlind: (id: string) => void;
  updateBlind: (id: string, updates: Partial<IBlind>) => void;
  getTotal: () => number;
  getSubtotal: (blind: IBlind) => number;
}

const generateId = () => Math.random().toString(36).substring(2, 9);
const useCase = new CalculateQuoteUseCase();

export const useCalculatorStore = create<CalculatorState>((set, get) => ({
  blinds: [
    { id: generateId(), fabricId: 't1', widthCm: 0, heightCm: 0 }
  ],
  addBlind: () => set((state) => ({
    blinds: [...state.blinds, { id: generateId(), fabricId: 't1', widthCm: 0, heightCm: 0 }]
  })),
  removeBlind: (id) => set((state) => ({
    blinds: state.blinds.filter(b => b.id !== id)
  })),
  updateBlind: (id, updates) => set((state) => ({
    blinds: state.blinds.map(b => b.id === id ? { ...b, ...updates } : b)
  })),
  getTotal: () => useCase.execute(get().blinds),
  getSubtotal: (blind) => useCase.executeForOne(blind)
}));
