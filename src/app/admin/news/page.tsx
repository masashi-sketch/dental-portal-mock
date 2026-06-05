'use client';

import { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';

type NewsItem = {
  id: number;
  date: string;
  tag: '重要' | 'お知らせ' | 'キャンペーン';
  text: string;
  status: '公開' | '下書き';
};

const initialNews: NewsItem[] = [
  { id: 1, date: '2026-06-01', tag: '重要',    text: '夏季休診のご案内（8/13〜8/15）',              status: '公開' },
  { id: 2, date: '2026-05-20', tag: 'お知らせ', text: '定期購入サービスがリニューアルしました',        status: '公開' },
  { id: 3, date: '2026-05-10', tag: 'お知らせ', text: '新商品「薬用洗口液 500ml」を追加しました',     status: '公開' },
];

const tagColors: Record<string, string> = {
  '重要':       'text-red-400 bg-red-500/10 border-red-500/20',
  'お知らせ':   'text-blue-400 bg-blue-500/10 border-blue-500/20',
  'キャンペーン': 'text-amber-400 bg-amber-500/10 border-amber-500/20',
};

export default function AdminNewsPage() {
  const [news, setNews] = useState<NewsItem[]>(initialNews);
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState<NewsItem | null>(null);
  const [form, setForm] = useState({ date: '', tag: 'お知らせ' as NewsItem['tag'], text: '', status: '公開' as NewsItem['status'] });
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [toast, setToast] = useState('');

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 2500);
  };

  const openNew = () => {
    setEditItem(null);
    setForm({ date: new Date().toISOString().slice(0, 10), tag: 'お知らせ', text: '', status: '公開' });
    setShowForm(true);
  };

  const openEdit = (item: NewsItem) => {
    setEditItem(item);
    setForm({ date: item.date, tag: item.tag, text: item.text, status: item.status });
    setShowForm(true);
  };

  const handleSave = () => {
    if (!form.text.trim()) return;
    if (editItem) {
      setNews(news.map((n) => n.id === editItem.id ? { ...editItem, ...form } : n));
      showToast('お知らせを更新しました');
    } else {
      setNews([{ id: Date.now(), ...form }, ...news]);
      showToast('お知らせを追加しました');
    }
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    setNews(news.filter((n) => n.id !== id));
    setDeleteId(null);
    showToast('お知らせを削除しました');
  };

  return (
    <div className="min-h-screen flex bg-gray-900">
      <AdminSidebar active="news" />

      <div className="flex-1 flex flex-col min-w-0">
        {/* トップバー */}
        <header className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-white font-bold text-lg">お知らせ管理</h1>
            <p className="text-gray-400 text-xs mt-0.5">患者ポータルに表示するお知らせを管理します</p>
          </div>
          <button
            onClick={openNew}
            className="bg-teal-500 hover:bg-teal-400 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
          >
            ＋ 追加
          </button>
        </header>

        <main className="flex-1 p-5 sm:p-6 bg-gray-900">

          {/* トースト */}
          {toast && (
            <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-teal-600 text-white text-sm px-5 py-3 rounded-2xl shadow-xl">
              {toast}
            </div>
          )}

          {/* テーブル */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left text-gray-400 font-medium px-5 py-3.5 whitespace-nowrap">日付</th>
                    <th className="text-left text-gray-400 font-medium px-5 py-3.5 whitespace-nowrap">タグ</th>
                    <th className="text-left text-gray-400 font-medium px-5 py-3.5">内容</th>
                    <th className="text-left text-gray-400 font-medium px-5 py-3.5 whitespace-nowrap">ステータス</th>
                    <th className="text-left text-gray-400 font-medium px-5 py-3.5 whitespace-nowrap">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {news.map((item) => (
                    <tr key={item.id} className="border-b border-gray-700/50 last:border-0 hover:bg-gray-700/30 transition-colors">
                      <td className="px-5 py-4 text-gray-400 whitespace-nowrap">{item.date}</td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${tagColors[item.tag]}`}>
                          {item.tag}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-gray-200 max-w-xs truncate">{item.text}</td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          item.status === '公開' ? 'text-teal-400 bg-teal-500/10' : 'text-gray-400 bg-gray-700'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => openEdit(item)}
                            className="text-xs text-blue-400 hover:text-blue-300 bg-blue-500/10 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                          >
                            編集
                          </button>
                          <button
                            onClick={() => setDeleteId(item.id)}
                            className="text-xs text-red-400 hover:text-red-300 bg-red-500/10 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                          >
                            削除
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {news.length === 0 && (
                    <tr><td colSpan={5} className="text-center text-gray-500 py-10">お知らせがありません</td></tr>
                  )}
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
            <h2 className="text-white font-bold text-lg mb-5">{editItem ? 'お知らせを編集' : 'お知らせを追加'}</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-gray-300 text-sm mb-1.5 block">日付</label>
                <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40" />
              </div>
              <div>
                <label className="text-gray-300 text-sm mb-1.5 block">タグ</label>
                <select value={form.tag} onChange={(e) => setForm({ ...form, tag: e.target.value as NewsItem['tag'] })}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40">
                  <option>重要</option>
                  <option>お知らせ</option>
                  <option>キャンペーン</option>
                </select>
              </div>
              <div>
                <label className="text-gray-300 text-sm mb-1.5 block">内容</label>
                <textarea value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} rows={3}
                  placeholder="お知らせの内容を入力"
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40 resize-none placeholder-gray-500" />
              </div>
              <div>
                <label className="text-gray-300 text-sm mb-1.5 block">ステータス</label>
                <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as NewsItem['status'] })}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40">
                  <option>公開</option>
                  <option>下書き</option>
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

      {/* 削除確認モーダル */}
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
