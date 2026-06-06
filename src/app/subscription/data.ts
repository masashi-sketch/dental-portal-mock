export type SubProduct = {
  id: number;
  name: string;
  shortDesc: string;
  longDesc: string;
  priceMonthly: number;
  imageType: 'capsule' | 'tablet' | 'chewable' | 'multi';
  badge: string;
  badgeColor: string;
  features: string[];
  volume: string;
  howToUse: string;
};

export const subProducts: SubProduct[] = [
  {
    id: 1,
    name: '定期購入商品 A',
    shortDesc: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    longDesc: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    priceMonthly: 3980,
    imageType: 'capsule',
    badge: '歯科医推奨 No.1',
    badgeColor: 'bg-blue-100 text-blue-700',
    features: ['◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯', '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯', '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯'],
    volume: '◯◯◯',
    howToUse: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
  },
  {
    id: 2,
    name: '定期購入商品 B',
    shortDesc: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    longDesc: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    priceMonthly: 2480,
    imageType: 'tablet',
    badge: '定番人気',
    badgeColor: 'bg-amber-100 text-amber-700',
    features: ['◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯', '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯', '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯'],
    volume: '◯◯◯',
    howToUse: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
  },
  {
    id: 3,
    name: '定期購入商品 C',
    shortDesc: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    longDesc: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    priceMonthly: 1980,
    imageType: 'chewable',
    badge: '飲みやすい',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    features: ['◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯', '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯', '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯'],
    volume: '◯◯◯',
    howToUse: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
  },
  {
    id: 4,
    name: '定期購入商品 D',
    shortDesc: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    longDesc: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    priceMonthly: 2980,
    imageType: 'multi',
    badge: '新登場',
    badgeColor: 'bg-violet-100 text-violet-700',
    features: ['◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯', '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯', '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯'],
    volume: '◯◯◯',
    howToUse: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
  },
];
