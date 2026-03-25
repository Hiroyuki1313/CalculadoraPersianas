import { IBlind } from "../blind/Blind";
import { IFabric } from "../blind/Fabric";
import { IPriceCalculator } from "./IPriceCalculator";

export class StandardPriceCalculator implements IPriceCalculator {
  calculateSubtotal(blind: IBlind, fabric: IFabric): number {
    if (!blind.widthCm || !blind.heightCm) return 0;
    const squareMeters = (blind.widthCm / 100) * (blind.heightCm / 100);
    const effectiveSquareMeters = Math.max(1, squareMeters); 
    return effectiveSquareMeters * fabric.pricePerSquareMeter;
  }

  calculateTotal(blinds: IBlind[], fabrics: IFabric[]): number {
    return blinds.reduce((total, blind) => {
      const fabric = fabrics.find(f => f.id === blind.fabricId);
      if (!fabric) return total;
      return total + this.calculateSubtotal(blind, fabric);
    }, 0);
  }
}
