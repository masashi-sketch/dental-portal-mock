'use client';

import Link from 'next/link';

export type AdminPage = 'dashboard' | 'news' | 'patients' | 'orders' | 'products';

function IconDashboard() {
  return <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>;
}
function IconBell() {
  return <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>;
}
function IconUsers() {
  return <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
}
function IconRefresh() {
  return <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>;
}
function IconBag() {
  return <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>;
}
function IconLogout() {
  return <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>;
}

const navItems: { key: AdminPage; label: string; href: string; icon: React.ReactNode }[] = [
  { key: 'dashboard', label: 'ダッシュボード', href: '/admin/dashboard', icon: <IconDashboard /> },
  { key: 'news',      label: 'お知らせ管理',   href: '/admin/news',      icon: <IconBell /> },
  { key: 'patients',  label: '患者管理',       href: '/admin/patients',  icon: <IconUsers /> },
  { key: 'orders',    label: '定期購入管理',   href: '/admin/orders',    icon: <IconRefresh /> },
  { key: 'products',  label: '商品管理',       href: '/admin/products',  icon: <IconBag /> },
];

export default function AdminSidebar({ active }: { active: AdminPage }) {
  return (
    <aside className="hidden md:flex w-56 shrink-0 flex-col bg-gray-900 min-h-screen">
      {/* ロゴ */}
      <div className="px-5 py-5 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
            <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-tight">テストデンタル</p>
            <p className="text-gray-400 text-[10px]">管理ポータル</p>
          </div>
        </div>
      </div>

      {/* ナビゲーション */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-0.5">
        <p className="text-gray-500 text-[10px] font-semibold tracking-widest px-3 pb-2">MENU</p>
        {navItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              active === item.key
                ? 'bg-teal-500/20 text-teal-400'
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <span className={active === item.key ? 'text-teal-400' : 'text-gray-500'}>
              {item.icon}
            </span>
            {item.label}
            {active === item.key && (
              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-teal-400" />
            )}
          </Link>
        ))}
      </nav>

      {/* ログアウト */}
      <div className="px-3 py-4 border-t border-white/10">
        <div className="flex items-center gap-3 px-3 py-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold">
            A
          </div>
          <div>
            <p className="text-white text-xs font-semibold">管理者</p>
            <p className="text-gray-500 text-[10px]">clinic</p>
          </div>
        </div>
        <Link
          href="/admin"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
        >
          <IconLogout />ログアウト
        </Link>
      </div>
    </aside>
  );
}
