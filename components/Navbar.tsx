import { Show, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

import { checkUser } from "@/lib/checkUser";

export default async function Navbar() {
  const user = await checkUser();

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-slate-800 tracking-tight">
                SleepTracker
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-1">
            <Link
              href="/"
              className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors hidden sm:block"
            >
              Home
            </Link>

            <Show when="signed-in">
              <Link
                href="/history"
                className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                History
              </Link>
            </Show>

            <Link
              href="/about"
              className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              About
            </Link>

            <Show when="signed-out">
              <SignInButton>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm hover:shadow">
                  Sign In
                </button>
              </SignInButton>
            </Show>

            <Show when="signed-in">
              <div className="pl-2">
                <UserButton />
              </div>
            </Show>
          </div>
        </div>
      </div>
    </nav>
  );
}
