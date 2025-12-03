
export type PriceOption = 'labour' | 'materials' | 'both';
export type ServiceCategory = 
  'flooring' | 
  'painting' | 
  'kitchen' | 
  'bathroom' | 
  'exterior' | 
  'basement' | 
  'outdoor' | 
  'other' |
  'plumbing' |
  'hvac' |
  'electrical' |
  'doors-windows' |
  'stairs' |
  'curtains' |
  'columns' |
  'glass' |
  'demolition' |
  'framing' |
  'roofing' |
  'carpet';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  unit: string;
  priceLabour: [number, number];
  priceMaterials: [number, number];
  description: string;
  popularSizes?: Record<string, number>;
}

export interface CartItem extends ServiceItem {
  quantity: number;
  option: PriceOption;
  selectedPrice: number;
  notes?: string;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  budget: string;
  address: string;
  message: string;
}
