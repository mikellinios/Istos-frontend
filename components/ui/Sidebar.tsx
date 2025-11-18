'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useState } from 'react'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  TrendingUp,
  Wallet,
  History,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

interface NavItem {
  icon: ReactNode
  label: string
  href: string
  badge?: string
}

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      icon: <LayoutDashboard className="w-5 h-5" />,
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      label: 'Markets',
      href: '/markets',
    },
    {
      icon: <Wallet className="w-5 h-5" />,
      label: 'Portfolio',
      href: '/portfolio',
    },
    {
      icon: <History className="w-5 h-5" />,
      label: 'History',
      href: '/history',
    },
    {
      icon: <Settings className="w-5 h-5" />,
      label: 'Settings',
      href: '/settings',
    },
  ]

  return (
    <aside
      className={cn(
        'fixed left-0 top-[64px] h-[calc(100vh-64px)] glass-dark border-r border-white/5 transition-all duration-300 z-40',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-6 w-6 h-6 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
      >
        {collapsed ? (
          <ChevronRight className="w-3 h-3" />
        ) : (
          <ChevronLeft className="w-3 h-3" />
        )}
      </button>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group relative',
                isActive
                  ? 'bg-primary/10 text-primary border border-primary/20'
                  : 'hover:bg-white/5 text-gray-400 hover:text-white'
              )}
              title={collapsed ? item.label : undefined}
            >
              <span
                className={cn(
                  'transition-colors',
                  isActive ? 'text-primary' : 'text-gray-400 group-hover:text-white'
                )}
              >
                {item.icon}
              </span>
              {!collapsed && (
                <>
                  <span className="font-medium flex-1">{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-primary text-white">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
              {/* Active indicator */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
              )}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
