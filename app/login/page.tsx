"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { loginAction } from "./actions";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.set("email", email);
      formData.set("password", password);

      const result = await loginAction(formData);

      // loginAction redirects on success, so we only get here on error
      if (result?.error) {
        setError(result.error);
      }
    } catch {
      // redirect() throws an internal Next.js error – that means it worked!
      router.replace("/admin/dashboard");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center ">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">
          <div className="p-4 sm:p-8">
            {/* Header Section */}
            <div className="flex flex-col items-center mb-10">
              <Link href="/" className="shrink-0 flex items-center">
                <Image
                  src="/images/logo/logo_with_text.png"
                  alt="Scan n Go Logo"
                  width={220}
                  height={65}
                  className="w-[200px] h-auto"
                  priority
                />
              </Link>

              <p className="text-slate-500 mt-3 font-medium">
                Sign in to your account
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#3da9d4] transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3da9d4]/20 focus:border-[#3da9d4] focus:bg-white transition-all sm:text-sm"
                    placeholder="admin@sdenterprise.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <label className="text-sm font-semibold text-slate-700">
                    Password
                  </label>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#3da9d4] transition-colors">
                    <Lock className="h-5 w-5" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-12 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3da9d4]/20 focus:border-[#3da9d4] focus:bg-white transition-all sm:text-sm"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-[#3da9d4] transition-colors focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-2xl border border-red-100 animate-in fade-in slide-in-from-top-1">
                  {error}
                </div>
              )}

             <button
  type="submit"
  disabled={loading}
  className="
    flex w-full justify-center items-center
    rounded-2xl
    bg-gradient-to-r
    from-[#F3EFFD]
    via-[#D9D2FA]
    to-[#C7B8F5]
    py-3.5 px-4
    text-sm font-semibold text-[#4A3F75]
    shadow-lg shadow-violet-200/40
    hover:from-[#EEE8FC]
    hover:via-[#D2C9F8]
    hover:to-[#BFAEF2]
    transition-all duration-300
    active:scale-[0.98]
    focus:outline-none
    focus:ring-2
    focus:ring-violet-300
    focus:ring-offset-2
    disabled:opacity-70
    disabled:cursor-not-allowed
  "
>
  {loading ? (
    <Loader2 className="w-6 h-6 animate-spin" />
  ) : (
    "Sign In"
  )}
</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
