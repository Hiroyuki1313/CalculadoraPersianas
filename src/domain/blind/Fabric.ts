export interface IFabric {
  id: string;
  name: string;
  pricePerSquareMeter: number;
  widthMts: number;
  category: 'traslucida' | 'blackout' | 'sheer';
  iconName: string;
}

export const FABRICS: IFabric[] = [
  // TRASLUCIDAS
  { id: 't1', name: 'Sevilla / Amatista', pricePerSquareMeter: 617, widthMts: 2.20, category: 'traslucida', iconName: 'circle-dot' },
  { id: 't2', name: 'Daytona Tras.', pricePerSquareMeter: 599, widthMts: 3.00, category: 'traslucida', iconName: 'circle-dot' },
  { id: 't3', name: 'Galicia Tras.', pricePerSquareMeter: 578, widthMts: 2.15, category: 'traslucida', iconName: 'circle-dot' },
  { id: 't4', name: 'Montreal Tras.', pricePerSquareMeter: 789, widthMts: 2.50, category: 'traslucida', iconName: 'circle-dot' },
  { id: 't5', name: 'Wood Look / Cornalia', pricePerSquareMeter: 972, widthMts: 2.80, category: 'traslucida', iconName: 'circle-dot' },
  { id: 't6', name: 'Sidney Tras.', pricePerSquareMeter: 694, widthMts: 3.00, category: 'traslucida', iconName: 'circle-dot' },
  { id: 't7', name: 'Bencomia', pricePerSquareMeter: 1084, widthMts: 2.40, category: 'traslucida', iconName: 'circle-dot' },
  { id: 't8', name: 'Screen 7000 / 8000', pricePerSquareMeter: 649, widthMts: 3.00, category: 'traslucida', iconName: 'circle-dot' },

  // BLACKOUT
  { id: 'b1', name: 'Durango', pricePerSquareMeter: 681, widthMts: 2.50, category: 'blackout', iconName: 'eclipse' },
  { id: 'b2', name: 'Daytona B.O.', pricePerSquareMeter: 666, widthMts: 3.00, category: 'blackout', iconName: 'eclipse' },
  { id: 'b3', name: 'Andalucia / Tan - Gris', pricePerSquareMeter: 681, widthMts: 2.50, category: 'blackout', iconName: 'eclipse' },
  { id: 'b4', name: 'Montreal B.O.', pricePerSquareMeter: 916, widthMts: 2.50, category: 'blackout', iconName: 'eclipse' },
  { id: 'b5', name: 'Sauco', pricePerSquareMeter: 764, widthMts: 2.50, category: 'blackout', iconName: 'eclipse' },
  { id: 'b6', name: 'Fitolaca', pricePerSquareMeter: 764, widthMts: 2.50, category: 'blackout', iconName: 'eclipse' },
  { id: 'b7', name: 'Brampton', pricePerSquareMeter: 774, widthMts: 3.00, category: 'blackout', iconName: 'eclipse' },
  { id: 'b8', name: 'Dynasty', pricePerSquareMeter: 917, widthMts: 3.00, category: 'blackout', iconName: 'eclipse' },
  { id: 'b9', name: 'Galicia B.O.', pricePerSquareMeter: 815, widthMts: 2.80, category: 'blackout', iconName: 'eclipse' },
  { id: 'b10', name: 'Nicolet', pricePerSquareMeter: 917, widthMts: 2.60, category: 'blackout', iconName: 'eclipse' },
  { id: 'b11', name: 'Platino', pricePerSquareMeter: 809, widthMts: 2.50, category: 'blackout', iconName: 'eclipse' },
  { id: 'b12', name: 'Sidney B.O.', pricePerSquareMeter: 802, widthMts: 2.50, category: 'blackout', iconName: 'eclipse' },
  { id: 'b13', name: 'Long Beach', pricePerSquareMeter: 681, widthMts: 2.50, category: 'blackout', iconName: 'eclipse' },

  // SHEER
  { id: 's1', name: 'Aromo / Aguamarina', pricePerSquareMeter: 420, widthMts: 2.80, category: 'sheer', iconName: 'sun' },
  { id: 's2', name: 'Gravi B.O.', pricePerSquareMeter: 1165, widthMts: 2.80, category: 'sheer', iconName: 'sun' },
  { id: 's3', name: 'Luxury / Alejandrina', pricePerSquareMeter: 520, widthMts: 3.00, category: 'sheer', iconName: 'sun' },
  { id: 's4', name: 'Nevaflex B.O.', pricePerSquareMeter: 846, widthMts: 2.80, category: 'sheer', iconName: 'sun' },
  { id: 's5', name: 'Albi B.O.', pricePerSquareMeter: 1059, widthMts: 3.00, category: 'sheer', iconName: 'sun' },
  { id: 's6', name: 'Furze', pricePerSquareMeter: 622, widthMts: 3.00, category: 'sheer', iconName: 'sun' },
  { id: 's7', name: 'Montreal', pricePerSquareMeter: 754, widthMts: 2.80, category: 'sheer', iconName: 'sun' },
  { id: 's8', name: 'Marsella', pricePerSquareMeter: 648, widthMts: 3.00, category: 'sheer', iconName: 'sun' },
  { id: 's9', name: 'Royal Dimout Semi B.O', pricePerSquareMeter: 890, widthMts: 2.80, category: 'sheer', iconName: 'sun' },
  { id: 's10', name: 'Lino Dimout Semi B.O', pricePerSquareMeter: 849, widthMts: 2.80, category: 'sheer', iconName: 'sun' },
  { id: 's11', name: 'Genius Dimout Semi B.O', pricePerSquareMeter: 880, widthMts: 2.80, category: 'sheer', iconName: 'sun' },
  { id: 's12', name: 'Valery', pricePerSquareMeter: 754, widthMts: 3.00, category: 'sheer', iconName: 'sun' },
  { id: 's13', name: 'Urban', pricePerSquareMeter: 1035, widthMts: 2.85, category: 'sheer', iconName: 'sun' },
  { id: 's14', name: 'Dimout Glam B.O', pricePerSquareMeter: 880, widthMts: 3.00, category: 'sheer', iconName: 'sun' },
  { id: 's15', name: 'Brave Semi B.O', pricePerSquareMeter: 849, widthMts: 2.80, category: 'sheer', iconName: 'sun' },
  { id: 's16', name: 'Avantage Screen', pricePerSquareMeter: 880, widthMts: 3.00, category: 'sheer', iconName: 'sun' },
];
