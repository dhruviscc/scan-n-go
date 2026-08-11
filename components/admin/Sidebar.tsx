"use client";

import { supabase } from "@/lib/client";
import {
  BarChart3,
  Users,
  LogOut,
  Package,
  Inbox,
  ChevronLeft,
  List,
  Droplet,
  BookOpen,
  MessageCircle,
  Star,
  Menu,
} from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import { supabase } from "";

type UserProfile = {
  name?: string;
  role?: string;
};

export default function Sidebar({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
  onLogoutRequest,
}: {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
  mobileOpen?: boolean;
  setMobileOpen?: (val: boolean) => void;
  onLogoutRequest?: () => void;
}) {
  const pathname = usePathname();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    if (setMobileOpen) setMobileOpen(false);
  }, [pathname, setMobileOpen]);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }: { data: any }) => {
      if (data.user) {
        const meta = data.user.user_metadata;
        setUserProfile({
          name: meta?.name || meta?.full_name || data.user.email?.split("@")[0] || "Admin",
          role: meta?.role || "Admin",
        });
      }
    });
  }, []);

  const navItems = [
    { id: "dashboard", label: "Dashboard", Icon: BarChart3, href: "/admin/dashboard" },
    { id: "blog", label: "Blog", Icon: BookOpen, href: "/admin/dashboard/blog" },
    { id: "contact", label: "Contact", Icon: Inbox, href: "/admin/dashboard/contact" },
    { id: "users", label: "Users", Icon: Users, href: "/admin/dashboard/users" },
  ].filter(item => {
    if (item.id === 'users' && userProfile?.role?.toLowerCase() === 'staff') return false;
    return true;
  });

  return (
    <>
      {/* Backdrop for mobile */}
      <div
        className={`fixed inset-0 z-[100] bg-slate-950/50 lg:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileOpen?.(false)}
      />

      <aside
        className={`fixed lg:sticky top-0 left-0 z-[110] rounded-r-4xl text-slate-800 flex h-screen flex-col border-r border-slate-200 shadow-xl transition-all duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } ${collapsed ? "w-20 overflow-visible" : "w-72 overflow-y-auto"}`}
        style={{ background: "linear-gradient(150deg, #f8f7ff 0%, #f0ebff 30%, #e4dcff 65%, #c8b6ff 100%)" }}
      >
        {/* ===== HEADER ===== */}
        <div
          className={`h-16 border-b border-violet-100 flex items-center ${collapsed ? "justify-center px-2" : "justify-between px-4"
            }`}
        >
          {!collapsed && (
            <div className="flex items-center gap-3 overflow-hidden">

              <div className="transition-all duration-300">
                <div className="shrink-0 flex items-center">

                  <Image
                    src="/images/logo/logo_with_text.png"
                    alt="Scan n Go Logo"
                    width={140}
                    height={40}
                    className="cursor-pointer"
                  />

                </div>

              </div>
            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex h-9 w-9 items-center justify-center transition-all duration-200 hover:bg-violet-100 hover:text-slate-700"
          >
            {collapsed ? <Image
              src="/images/favicon.webp"
              alt="Scan n Go Logo"
              width={140}
              height={40}
              className="cursor-pointer"
            />
              : <ChevronLeft size={18} />}
          </button>
        </div>

        {/* ===== NAVIGATION ===== */}
        <nav
          className={`flex-1 space-y-2 px-3 py-6 no-scrollbar ${collapsed ? "overflow-visible" : ""
            }`}
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/admin/dashboard"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <div key={item.id} className="group relative">
                <Link
                  href={item.href}
                  className={`relative flex items-center gap-3 rounded-xl border-b-3 px-4 py-4 transition-all duration-200 ${isActive
                    ? "border-violet-500 bg-violet-500/10 text-violet-700"
                    : "border-transparent text-slate-600 hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-700"
                    }`}
                >
                  <div className="relative z-10 flex items-center gap-3">
                    <item.Icon
                      size={20}
                      className={`shrink-0 transition-colors duration-300 ${isActive
                        ? "text-violet-600"
                        : "text-slate-400 group-hover:text-violet-600"
                        }`}
                    />
                    {!collapsed && (
                      <span className="truncate text-sm font-semibold tracking-wide">
                        {item.label}
                      </span>
                    )}
                  </div>
                </Link>

                {/* ===== TOOLTIP ===== */}
                {collapsed && (
                  <div className="pointer-events-none absolute left-full top-1/2 z-[999] ml-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-violet-600 px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    {item.label}
                    <div className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-violet-600" />
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* ===== USER SECTION ===== */}
        <div className="border-t border-violet-100 p-3">
          {/* ===== LOGOUT BUTTON ===== */}
          <div
            className={`overflow-hidden transition-all pb-4 duration-300 ease-in-out ${showLogout ? "max-h-24 opacity-100 mt-3" : "max-h-0 opacity-0"
              }`}
          >
            <button
              onClick={() => (onLogoutRequest ? onLogoutRequest() : undefined)}
              className={`flex w-full items-center gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition-all duration-300 hover:border-red-200 hover:bg-red-100 hover:text-red-700 ${collapsed ? "justify-center" : ""
                }`}
            >
              <LogOut size={18} className="shrink-0" />
              {!collapsed && <span>Logout</span>}
            </button>
          </div>

          {/* PROFILE */}
          <div
            onClick={() => setShowLogout(!showLogout)}
            className={`group relative flex cursor-pointer items-center gap-3 rounded-xl border border-violet-100 bg-white/50 p-2 transition-all duration-300 hover:bg-violet-100 ${collapsed ? "justify-center" : ""
              }`}
          >
            {/* Avatar */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-sm font-bold text-white shadow-lg shadow-violet-500/40">
              {userProfile?.name ? userProfile.name.charAt(0).toUpperCase() : "U"}
            </div>

            {!collapsed && (
              <div className="min-w-0">
                <h4 className="truncate text-sm font-bold text-slate-800">
                  {userProfile?.name || "Loading..."}
                </h4>
                <p className="truncate text-xs font-medium text-slate-500">
                  {userProfile?.role || "Admin"}
                </p>
              </div>
            )}

            {/* Tooltip when collapsed */}
            {collapsed && (
              <div className="pointer-events-none absolute left-full top-1/2 z-[999] ml-4 -translate-y-1/2 whitespace-nowrap rounded-xl border border-violet-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 opacity-0 shadow-2xl transition-all duration-200 group-hover:opacity-100">
                {userProfile?.name || "Profile"}
                <div className="absolute -left-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b border-l border-violet-200 bg-white" />
              </div>
            )}
          </div>


        </div>
      </aside>
    </>
  );
}
