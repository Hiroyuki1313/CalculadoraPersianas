import { IBlind } from "../blind/Blind";
import { IFabric } from "../blind/Fabric";

export interface IPriceCalculator {
  calculateSubtotal(blind: IBlind, fabric: IFabric): number;
  calculateTotal(blinds: IBlind[], fabrics: IFabric[]): number;
}
