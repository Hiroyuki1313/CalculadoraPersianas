import { IBlind } from "../../domain/blind/Blind";
import { FABRICS } from "../../domain/blind/Fabric";
import { StandardPriceCalculator } from "../../domain/calculator/StandardPriceCalculator";

export class CalculateQuoteUseCase {
  private calculator = new StandardPriceCalculator();

  execute(blinds: IBlind[]) {
    return this.calculator.calculateTotal(blinds, FABRICS);
  }

  executeForOne(blind: IBlind) {
      const fabric = FABRICS.find(f => f.id === blind.fabricId);
      if (!fabric) return 0;
      return this.calculator.calculateSubtotal(blind, fabric);
  }
}
