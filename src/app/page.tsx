'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

function IconSearch() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function IconFile() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

function IconRefresh() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 12a9 9 0 0 1-9 9 9 9 0 0 1-6.36-2.64" />
      <path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 6.36 2.64" />
      <polyline points="21 3 21 9 15 9" /><polyline points="3 21 3 15 9 15" />
    </svg>
  );
}

function IconBag() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

export default function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/clinic');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EAF4FD]">

      {/* ヘッダー */}
      <header className="bg-[#1C6EA4] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-lg font-bold tracking-wide">田中デンタル歯科</div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#" className="hover:opacity-75 transition-opacity">診療案内</a>
            <a href="#" className="hover:opacity-75 transition-opacity">アクセス</a>
            <a href="#" className="hover:opacity-75 transition-opacity">よくある質問</a>
            <a href="#" className="hover:opacity-75 transition-opacity">お問い合わせ</a>
          </nav>
          <div className="flex items-center gap-5">
            <button className="hover:opacity-75 transition-opacity"><IconSearch /></button>
            <button className="hover:opacity-75 transition-opacity"><IconUser /></button>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-16">

          {/* 左：ヒーローエリア */}
          <div className="flex-1">
            <p className="text-[#1C6EA4] text-sm font-semibold mb-3 tracking-widest">Patient Portal</p>
            <h1 className="text-4xl font-bold text-gray-800 leading-snug mb-5">
              患者様専用<br />ポータルサイト
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              ご予約の確認・変更、診療情報の閲覧、歯科用品のご注文な<br />
              ど、各種サービスをいつでもご利用いただけます。
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-1.5 bg-white border border-[#B8D9F0] rounded-full px-4 py-2 text-sm text-[#1C6EA4]">
                <IconCalendar />予約管理
              </span>
              <span className="flex items-center gap-1.5 bg-white border border-[#B8D9F0] rounded-full px-4 py-2 text-sm text-[#1C6EA4]">
                <IconFile />診療情報
              </span>
              <span className="flex items-center gap-1.5 bg-white border border-[#B8D9F0] rounded-full px-4 py-2 text-sm text-[#1C6EA4]">
                <IconRefresh />定期購入
              </span>
              <span className="flex items-center gap-1.5 bg-white border border-[#B8D9F0] rounded-full px-4 py-2 text-sm text-[#1C6EA4]">
                <IconBag />単発注文
              </span>
            </div>
          </div>

          {/* 右：ログインカード */}
          <div className="w-full md:w-96 bg-white rounded-2xl shadow-sm border border-[#D6EAF8] p-8">
            <h2 className="text-2xl font-bold text-[#1C6EA4] mb-1">ログイン</h2>
            <p className="text-gray-500 text-sm mb-6">診療番号とパスワードを入力してください</p>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  ユーザーID（診療番号）
                </label>
                <input
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="例）T-00123"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1C6EA4] focus:border-transparent placeholder-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  パスワード
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1C6EA4] focus:border-transparent placeholder-gray-300"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1C6EA4] text-white py-3 rounded-lg font-medium hover:bg-[#155d8e] transition-colors cursor-pointer"
              >
                ログイン
              </button>
            </form>

            <div className="flex justify-between mt-4 text-sm text-[#1C6EA4]">
              <a href="#" className="hover:underline">パスワードをお忘れの方</a>
              <a href="#" className="hover:underline">ログインでお困りの方</a>
            </div>

            <div className="flex items-center gap-4 my-5">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-gray-400 text-sm">または</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm cursor-pointer">
              初めての方・新規登録はこちら
            </button>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-[#1C6EA4] text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <div className="font-bold">田中デンタル歯科</div>
          <div className="text-white/60 text-xs">© 2026 田中デンタル歯科. All Rights Reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:opacity-75 transition-opacity">プライバシーポリシー</a>
            <a href="#" className="hover:opacity-75 transition-opacity">特定商取引法</a>
            <a href="#" className="hover:opacity-75 transition-opacity">お問い合わせ</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
