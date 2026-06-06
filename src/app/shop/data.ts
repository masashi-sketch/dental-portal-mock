export type Product = {
  id: number;
  category: string;
  imageType: string;
  badge?: string;
  badgeColor?: string;
  name: string;
  desc: string;
  price: number;
  unit: string;
  rating: number;
  reviews: number;
  tag?: string;
  volume: string;
  ingredients: string;
  howToUse: string;
  caution: string;
};

export const products: Product[] = [
  {
    id: 1, category: 'サプリメント', imageType: 'supplement',
    badge: '歯科医推奨', badgeColor: 'bg-indigo-100 text-indigo-600',
    name: 'サプリメント商品 A',
    desc: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    price: 3980, unit: '本', rating: 4.8, reviews: 128, tag: '定期購入対応',
    volume: '◯◯◯',
    ingredients: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    howToUse: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    caution: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
  },
  {
    id: 2, category: 'サプリメント', imageType: 'supplement',
    badge: '新着', badgeColor: 'bg-rose-100 text-rose-600',
    name: 'サプリメント商品 B',
    desc: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    price: 2480, unit: '本', rating: 4.5, reviews: 64, tag: '',
    volume: '◯◯◯',
    ingredients: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    howToUse: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    caution: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
  },
  {
    id: 3, category: 'サプリメント', imageType: 'supplement',
    badge: '定番人気', badgeColor: 'bg-amber-100 text-amber-600',
    name: 'サプリメント商品 C',
    desc: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    price: 1980, unit: '本', rating: 4.7, reviews: 213, tag: '定期購入対応',
    volume: '◯◯◯',
    ingredients: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    howToUse: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    caution: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
  },
  {
    id: 4, category: 'ヨーグルト', imageType: 'yogurt',
    badge: '歯科医推奨', badgeColor: 'bg-indigo-100 text-indigo-600',
    name: 'ヨーグルト商品 A',
    desc: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    price: 980, unit: '個', rating: 4.6, reviews: 97, tag: '',
    volume: '◯◯◯',
    ingredients: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    howToUse: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    caution: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
  },
  {
    id: 5, category: 'ヨーグルト', imageType: 'yogurt',
    badge: 'セット割', badgeColor: 'bg-emerald-100 text-emerald-600',
    name: 'ヨーグルト商品 B',
    desc: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    price: 4980, unit: 'セット', rating: 4.7, reviews: 152, tag: '定期購入対応',
    volume: '◯◯◯',
    ingredients: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    howToUse: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    caution: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
  },
  {
    id: 6, category: 'ヨーグルト', imageType: 'yogurt',
    badge: '新着', badgeColor: 'bg-rose-100 text-rose-600',
    name: 'ヨーグルト商品 C',
    desc: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    price: 480, unit: '本', rating: 4.3, reviews: 41, tag: '',
    volume: '◯◯◯',
    ingredients: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    howToUse: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    caution: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
  },
  {
    id: 7, category: '歯ブラシ', imageType: 'toothbrush',
    badge: '定番人気', badgeColor: 'bg-amber-100 text-amber-600',
    name: '歯ブラシ商品 A',
    desc: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    price: 880, unit: '本', rating: 4.9, reviews: 312, tag: '定期購入対応',
    volume: '◯◯◯',
    ingredients: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    howToUse: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    caution: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
  },
  {
    id: 8, category: '歯ブラシ', imageType: 'toothbrush',
    badge: '歯科医推奨', badgeColor: 'bg-indigo-100 text-indigo-600',
    name: '歯ブラシ商品 B',
    desc: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    price: 680, unit: '本', rating: 4.8, reviews: 189, tag: '',
    volume: '◯◯◯',
    ingredients: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    howToUse: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    caution: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
  },
  {
    id: 9, category: '歯ブラシ', imageType: 'toothbrush',
    badge: 'セット割', badgeColor: 'bg-emerald-100 text-emerald-600',
    name: '歯ブラシ商品 C',
    desc: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    price: 2980, unit: 'セット', rating: 4.6, reviews: 78, tag: '定期購入対応',
    volume: '◯◯◯',
    ingredients: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    howToUse: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    caution: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
  },
  {
    id: 10, category: 'オーラルケア', imageType: 'oral',
    badge: '定番人気', badgeColor: 'bg-amber-100 text-amber-600',
    name: 'オーラルケア商品 A',
    desc: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    price: 580, unit: '個', rating: 4.7, reviews: 267, tag: '定期購入対応',
    volume: '◯◯◯',
    ingredients: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    howToUse: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    caution: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
  },
  {
    id: 11, category: 'オーラルケア', imageType: 'oral',
    badge: '歯科医推奨', badgeColor: 'bg-indigo-100 text-indigo-600',
    name: 'オーラルケア商品 B',
    desc: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    price: 1280, unit: '個', rating: 4.8, reviews: 445, tag: '定期購入対応',
    volume: '◯◯◯',
    ingredients: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    howToUse: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    caution: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
  },
  {
    id: 12, category: 'オーラルケア', imageType: 'oral',
    badge: '新着', badgeColor: 'bg-rose-100 text-rose-600',
    name: 'オーラルケア商品 C',
    desc: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    price: 1580, unit: '本', rating: 4.5, reviews: 93, tag: '',
    volume: '◯◯◯',
    ingredients: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    howToUse: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
    caution: '◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
  },
];
