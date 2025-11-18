'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from './Button'
import { Crown, Menu, X, User, LogOut, Settings, Shield } from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const navLinks = [
    { href: '/markets', label: 'Markets' },
    { href: '/trade', label: 'Trade' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/earn', label: 'Earn' },
  ]

  return (
    <nav className="sticky top-0 z-50 glass-dark border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              {/* Hexagonal logo placeholder - replace with actual SVG */}
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center rotate-45 transform transition-transform group-hover:rotate-[50deg]">
                <Crown className="w-5 h-5 text-white -rotate-45" />
              </div>
            </div>
            <span className="text-2xl font-heading font-bold gradient-text">
              ISTOS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors font-heading"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side - Auth buttons or User menu */}
          <div className="hidden md:flex items-center gap-3">
            {!isAuthenticated ? (
              <>
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button variant="gradient" size="sm">
                  Get Started
                </Button>
              </>
            ) : (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium">Account</span>
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className="min-w-[220px] glass-dark rounded-lg p-2 shadow-xl shadow-black/50 border border-white/10"
                    sideOffset={5}
                  >
                    <DropdownMenu.Item className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer outline-none">
                      <User className="w-4 h-4" />
                      <span>Profile</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer outline-none">
                      <Shield className="w-4 h-4" />
                      <span>Verification</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer outline-none">
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator className="h-px bg-white/10 my-2" />
                    <DropdownMenu.Item className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer outline-none text-error">
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-dark border-t border-white/5">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10 space-y-2">
              {!isAuthenticated ? (
                <>
                  <Button variant="ghost" size="sm" className="w-full">
                    Sign In
                  </Button>
                  <Button variant="gradient" size="sm" className="w-full">
                    Get Started
                  </Button>
                </>
              ) : (
                <>
                  <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-white/5">
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </button>
                  <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-white/5">
                    <Shield className="w-4 h-4" />
                    <span>Verification</span>
                  </button>
                  <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-white/5">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </button>
                  <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-white/5 text-error">
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
