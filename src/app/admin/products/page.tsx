'use client';

import { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';

type ProductCategory = '定期購入' | 'おすすめ商品';

type Product = {
  id: number;
  name: string;
  category: ProductCategory;
  subCategory: string;
  price: number;
  unit: string;
  status: '公開' | '非公開';
};

const initialProducts: Product[] = [
  { id: 1, name: 'オーラルプロバイオティクス',  category: '定期購入',   subCategory: 'サプリメント', price: 3980, unit: '月',  status: '公開' },
  { id: 2, name: 'カルシウム＋ビタミンD',         category: '定期購入',   subCategory: 'サプリメント', price: 2480, unit: '月',  status: '公開' },
  { id: 3, name: '歯科専用 乳酸菌タブレット',     category: '定期購入',   subCategory: 'サプリメント', price: 1980, unit: '月',  status: '公開' },
  { id: 4, name: 'マルチビタミン＆ミネラル',       category: '定期購入',   subCategory: 'サプリメント', price: 2980, unit: '月',  status: '公開' },
  { id: 5, name: 'L.ロイテリ プロバイオティクス', category: 'おすすめ商品', subCategory: 'サプリメント', price: 3980, unit: '本',  status: '公開' },
  { id: 6, name: 'L.ロイテリ ヨーグルト 4本セット', category: 'おすすめ商品', subCategory: 'ヨーグルト', price: 1580, unit: 'セット', status: '公開' },
  { id: 7, name: '電動歯ブラシ スタンダード',     category: 'おすすめ商品', subCategory: '歯ブラシ',   price: 4980, unit: 'セット', status: '公開' },
  { id: 8, name: '薬用洗口液 500ml',               category: 'おすすめ商品', subCategory: 'オーラルケア', price: 1280, unit: '個',  status: '非公開' },
];

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState<Product | null>(null);
  const [form, setForm] = useState({ name: '', category: '定期購入' as ProductCategory, subCategory: '', price: '', unit: '', status: '公開' as Product['status'] });
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [filterCat, setFilterCat] = useState<ProductCategory | 'すべて'>('すべて');
  const [toast, setToast] = useState('');

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(''), 2500); };

  const openNew = () => {
    setEditItem(null);
    setForm({ name: '', category: '定期購入', subCategory: '', price: '', unit: '月', status: '公開' });
    setShowForm(true);
  };

  const openEdit = (p: Product) => {
    setEditItem(p);
    setForm({ name: p.name, category: p.category, subCategory: p.subCategory, price: String(p.price), unit: p.unit, status: p.status });
    setShowForm(true);
  };

  const handleSave = () => {
    if (!form.name.trim() || !form.price) return;
    if (editItem) {
      setProducts(products.map((p) => p.id === editItem.id ? { ...p, ...form, price: Number(form.price) } : p));
      showToast('商品情報を更新しました');
    } else {
      setProducts([{ id: Date.now(), ...form, price: Number(form.price) }, ...products]);
      showToast('商品を追加しました');
    }
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
    setDeleteId(null);
    showToast('商品を削除しました');
  };

  const toggleStatus = (id: number) => {
    setProducts(products.map((p) => p.id === id ? { ...p, status: p.status === '公開' ? '非公開' : '公開' } : p));
  };

  const filtered = filterCat === 'すべて' ? products : products.filter((p) => p.category === filterCat);

  return (
    <div className="min-h-screen flex bg-gray-900">
      <AdminSidebar active="products" />

      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-white font-bold text-lg">商品管理</h1>
            <p className="text-gray-400 text-xs mt-0.5">定期購入・おすすめ商品を管理します</p>
          </div>
          <button onClick={openNew}
            className="bg-teal-500 hover:bg-teal-400 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer">
            ＋ 商品を追加
          </button>
        </header>

        <main className="flex-1 p-5 sm:p-6 bg-gray-900 flex flex-col gap-5">
          {toast && (
            <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-teal-600 text-white text-sm px-5 py-3 rounded-2xl shadow-xl">{toast}</div>
          )}

          {/* フィルタータブ */}
          <div className="flex gap-2">
            {(['すべて', '定期購入', 'おすすめ商品'] as const).map((c) => (
              <button key={c} onClick={() => setFilterCat(c)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                  filterCat === c ? 'bg-teal-500 text-white' : 'bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-500'
                }`}>
                {c} ({c === 'すべて' ? products.length : products.filter((p) => p.category === c).length})
              </button>
            ))}
          </div>

          {/* テーブル */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    {['商品名', 'カテゴリ', 'サブカテゴリ', '価格', 'ステータス', '操作'].map((h) => (
                      <th key={h} className="text-left text-gray-400 font-medium px-5 py-3.5 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((p) => (
                    <tr key={p.id} className="border-b border-gray-700/50 last:border-0 hover:bg-gray-700/30 transition-colors">
                      <td className="px-5 py-4 text-white font-semibold">{p.name}</td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          p.category === '定期購入' ? 'text-indigo-400 bg-indigo-500/10' : 'text-amber-400 bg-amber-500/10'
                        }`}>{p.category}</span>
                      </td>
                      <td className="px-5 py-4 text-gray-400 whitespace-nowrap">{p.subCategory}</td>
                      <td className="px-5 py-4 text-gray-300 whitespace-nowrap font-mono">
                        ¥{p.price.toLocaleString()}<span className="text-gray-500 text-xs ml-1">/{p.unit}</span>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <button onClick={() => toggleStatus(p.id)}
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full cursor-pointer transition-opacity hover:opacity-70 ${
                            p.status === '公開' ? 'text-teal-400 bg-teal-500/10' : 'text-gray-400 bg-gray-700'
                          }`}>
                          {p.status}
                        </button>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button onClick={() => openEdit(p)}
                            className="text-xs text-blue-400 hover:text-blue-300 bg-blue-500/10 px-3 py-1.5 rounded-lg transition-colors cursor-pointer">
                            編集
                          </button>
                          <button onClick={() => setDeleteId(p.id)}
                            className="text-xs text-red-400 hover:text-red-300 bg-red-500/10 px-3 py-1.5 rounded-lg transition-colors cursor-pointer">
                            削除
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* 追加・編集モーダル */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <h2 className="text-white font-bold text-lg mb-5">{editItem ? '商品を編集' : '商品を追加'}</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-gray-300 text-sm mb-1.5 block">商品名</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="例）オーラルプロバイオティクス"
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40 placeholder-gray-500" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-300 text-sm mb-1.5 block">カテゴリ</label>
                  <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value as ProductCategory })}
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40">
                    <option>定期購入</option>
                    <option>おすすめ商品</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-300 text-sm mb-1.5 block">サブカテゴリ</label>
                  <input type="text" value={form.subCategory} onChange={(e) => setForm({ ...form, subCategory: e.target.value })}
                    placeholder="例）サプリメント"
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40 placeholder-gray-500" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-300 text-sm mb-1.5 block">価格（税込）</label>
                  <input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })}
                    placeholder="3980"
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40 placeholder-gray-500" />
                </div>
                <div>
                  <label className="text-gray-300 text-sm mb-1.5 block">単位</label>
                  <input type="text" value={form.unit} onChange={(e) => setForm({ ...form, unit: e.target.value })}
                    placeholder="月 / 本 / 個"
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40 placeholder-gray-500" />
                </div>
              </div>
              <div>
                <label className="text-gray-300 text-sm mb-1.5 block">ステータス</label>
                <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as Product['status'] })}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40">
                  <option>公開</option>
                  <option>非公開</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowForm(false)}
                className="flex-1 py-2.5 rounded-xl border border-gray-600 text-gray-400 hover:bg-gray-700 text-sm transition-colors cursor-pointer">
                キャンセル
              </button>
              <button onClick={handleSave}
                className="flex-1 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-bold text-sm transition-colors cursor-pointer">
                {editItem ? '更新する' : '追加する'}
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteId !== null && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full max-w-sm text-center shadow-2xl">
            <p className="text-white font-bold text-base mb-2">削除しますか？</p>
            <p className="text-gray-400 text-sm mb-6">この操作は取り消せません。</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)}
                className="flex-1 py-2.5 rounded-xl border border-gray-600 text-gray-400 hover:bg-gray-700 text-sm transition-colors cursor-pointer">
                キャンセル
              </button>
              <button onClick={() => handleDelete(deleteId)}
                className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-400 text-white font-bold text-sm transition-colors cursor-pointer">
                削除する
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
