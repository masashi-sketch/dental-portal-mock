'use client';

import { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';

type OrderStatus = '確認中' | '配送中' | '完了' | 'キャンセル';

type Order = {
  id: number;
  orderedAt: string;
  patient: string;
  product: string;
  course: '6ヶ月' | '3ヶ月';
  delivery: '自宅' | '医院';
  monthlyPrice: number;
  status: OrderStatus;
  nextDelivery: string;
};

const initialOrders: Order[] = [
  { id: 1, orderedAt: '2026-05-01', patient: '山田 太郎', product: 'オーラルプロバイオティクス', course: '6ヶ月', delivery: '自宅', monthlyPrice: 3582, status: '配送中', nextDelivery: '2026-07-01' },
  { id: 2, orderedAt: '2026-05-10', patient: '佐藤 花子', product: 'カルシウム＋ビタミンD',      course: '3ヶ月', delivery: '医院', monthlyPrice: 2356, status: '確認中', nextDelivery: '2026-07-05' },
  { id: 3, orderedAt: '2026-05-15', patient: '鈴木 一郎', product: '歯科専用 乳酸菌タブレット', course: '6ヶ月', delivery: '自宅', monthlyPrice: 1782, status: '配送中', nextDelivery: '2026-07-10' },
  { id: 4, orderedAt: '2026-05-20', patient: '山田 太郎', product: 'マルチビタミン＆ミネラル',   course: '3ヶ月', delivery: '自宅', monthlyPrice: 2831, status: '完了',   nextDelivery: '—' },
  { id: 5, orderedAt: '2026-06-01', patient: '伊藤 健一', product: 'オーラルプロバイオティクス', course: '6ヶ月', delivery: '医院', monthlyPrice: 3582, status: '配送中', nextDelivery: '2026-07-20' },
];

const statusColors: Record<OrderStatus, string> = {
  '確認中':   'text-amber-400 bg-amber-500/10 border-amber-500/20',
  '配送中':   'text-teal-400  bg-teal-500/10  border-teal-500/20',
  '完了':     'text-gray-400  bg-gray-700     border-gray-600',
  'キャンセル': 'text-red-400   bg-red-500/10   border-red-500/20',
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [filter, setFilter] = useState<OrderStatus | 'すべて'>('すべて');
  const [toast, setToast] = useState('');

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(''), 2500); };

  const updateStatus = (id: number, status: OrderStatus) => {
    setOrders(orders.map((o) => o.id === id ? { ...o, status, nextDelivery: status === '完了' || status === 'キャンセル' ? '—' : o.nextDelivery } : o));
    showToast('ステータスを更新しました');
  };

  const filtered = filter === 'すべて' ? orders : orders.filter((o) => o.status === filter);
  const counts = {
    すべて: orders.length,
    確認中: orders.filter((o) => o.status === '確認中').length,
    配送中: orders.filter((o) => o.status === '配送中').length,
    完了:   orders.filter((o) => o.status === '完了').length,
    キャンセル: orders.filter((o) => o.status === 'キャンセル').length,
  };

  return (
    <div className="min-h-screen flex bg-gray-900">
      <AdminSidebar active="orders" />

      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
          <h1 className="text-white font-bold text-lg">定期購入管理</h1>
          <p className="text-gray-400 text-xs mt-0.5">定期購入の注文一覧とステータスを管理します</p>
        </header>

        <main className="flex-1 p-5 sm:p-6 bg-gray-900 flex flex-col gap-5">
          {toast && (
            <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-teal-600 text-white text-sm px-5 py-3 rounded-2xl shadow-xl">{toast}</div>
          )}

          {/* フィルタータブ */}
          <div className="flex gap-2 flex-wrap">
            {(['すべて', '確認中', '配送中', '完了', 'キャンセル'] as const).map((s) => (
              <button key={s} onClick={() => setFilter(s)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                  filter === s ? 'bg-teal-500 text-white' : 'bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-500'
                }`}>
                {s} <span className="ml-1 text-xs opacity-70">({counts[s]})</span>
              </button>
            ))}
          </div>

          {/* テーブル */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    {['注文日', '患者名', '商品', 'コース', 'お届け先', '月額', 'ステータス', '次回配送', '変更'].map((h) => (
                      <th key={h} className="text-left text-gray-400 font-medium px-4 py-3.5 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((o) => (
                    <tr key={o.id} className="border-b border-gray-700/50 last:border-0 hover:bg-gray-700/30 transition-colors">
                      <td className="px-4 py-4 text-gray-400 whitespace-nowrap text-xs">{o.orderedAt}</td>
                      <td className="px-4 py-4 text-white font-semibold whitespace-nowrap">{o.patient}</td>
                      <td className="px-4 py-4 text-gray-300 max-w-[160px] truncate">{o.product}</td>
                      <td className="px-4 py-4 text-gray-300 whitespace-nowrap">{o.course}</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${o.delivery === '医院' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-gray-700 text-gray-400'}`}>
                          {o.delivery}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-gray-300 whitespace-nowrap font-mono">¥{o.monthlyPrice.toLocaleString()}</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${statusColors[o.status]}`}>
                          {o.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-gray-400 whitespace-nowrap text-xs">{o.nextDelivery}</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <select
                          value={o.status}
                          onChange={(e) => updateStatus(o.id, e.target.value as OrderStatus)}
                          className="bg-gray-700 border border-gray-600 text-gray-300 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-teal-500/40 cursor-pointer"
                        >
                          <option>確認中</option>
                          <option>配送中</option>
                          <option>完了</option>
                          <option>キャンセル</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr><td colSpan={9} className="text-center text-gray-500 py-10">該当する注文がありません</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
