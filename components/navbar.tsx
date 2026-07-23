"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import { navMenu, type MenuItem } from "./navbar-data"
import { cn } from "@/lib/utils"
import Image from "next/image";
/* ---------- Logo placeholder (leave space for the real logo) ---------- */
function Logo() {
  return (
    <div className="flex items-center" aria-label="K Juris Law Firm logo">
      <div className="flex h-16 w-64 items-center justify-center  border-white/25 text-[10px] leading-tight text-white/40">
        <Image
           src="/assets/K-juris.png"
          alt="KjurisLaw Logo"
          width={64}
          height={56}
          priority
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}

/* ---------- Desktop flyout submenu (recursive) ---------- */
function DesktopSubmenu({ items }: { items: MenuItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <ul className="w-64 bg-navbar py-1 shadow-2xl ring-1 ring-white/10">
      {items.map((item, i) => {
        const hasChildren = !!item.children?.length
        const isOpen = openIndex === i
        return (
          <li
            key={item.label + i}
            className="relative"
            onMouseEnter={() => setOpenIndex(i)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <a
              href={item.href ?? "#"}
              className={cn(
                "flex items-center justify-between gap-3 border-b border-white/5 px-5 py-3 text-sm leading-snug transition-colors",
                isOpen ? "text-navbar-accent" : "text-navbar-foreground hover:text-navbar-accent",
              )}
            >
              <span className="text-pretty">{item.label}</span>
              {hasChildren && <ChevronRight className="size-4 shrink-0" aria-hidden="true" />}
            </a>

            {hasChildren && isOpen && (
              <div className="absolute left-full top-0">
                <DesktopSubmenu items={item.children!} />
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

/* ---------- Desktop top-level item ---------- */
function DesktopNavItem({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false)
  const hasChildren = !!item.children?.length

  if (!hasChildren) {
    return (
      <a
        href={item.href ?? "#"}
        className="px-1 py-2 text-[15px] font-medium text-navbar-foreground transition-colors hover:text-navbar-accent"
      >
        {item.label}
      </a>
    )
  }

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        className={cn(
          "flex items-center gap-1 px-1 py-2 text-[15px] font-medium transition-colors",
          open ? "text-navbar-accent" : "text-navbar-foreground hover:text-navbar-accent",
        )}
      >
        {item.label}
        <ChevronDown className="size-4" aria-hidden="true" />
      </button>

      {open && (
        <div className="absolute left-0 top-full pt-4">
          <DesktopSubmenu items={item.children!} />
        </div>
      )}
    </div>
  )
}

/* ---------- Mobile accordion (recursive) ---------- */
function MobileNavItem({ item, depth = 0 }: { item: MenuItem; depth?: number }) {
  const [open, setOpen] = useState(false)
  const hasChildren = !!item.children?.length

  if (!hasChildren) {
    return (
      <a
        href={item.href ?? "#"}
        className="block py-3 text-sm text-navbar-foreground hover:text-navbar-accent"
        style={{ paddingLeft: depth * 16 }}
      >
        {item.label}
      </a>
    )
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-3 text-left text-sm font-medium text-navbar-foreground hover:text-navbar-accent"
        style={{ paddingLeft: depth * 16 }}
      >
        <span className="text-pretty">{item.label}</span>
        <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} aria-hidden="true" />
      </button>
      {open && (
        <div className="border-l border-white/10">
          {item.children!.map((child, i) => (
            <MobileNavItem key={child.label + i} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-navbar text-navbar-foreground">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-4 py-4 lg:px-8">
        {/* Left: primary links (desktop) */}
        <div className="hidden items-center gap-7 xl:flex">
          {navMenu.map((item) => (
            <DesktopNavItem key={item.label} item={item} />
          ))}
        </div>

        {/* Mobile: menu toggle */}
        <button
          type="button"
          className="text-navbar-foreground xl:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>

        {/* Right: logo + CTA */}
        <div className="flex items-center gap-6">
          <Logo />
          <a
            href="#"
            className="hidden items-center gap-2 bg-navbar-accent px-6 py-4 text-[15px] font-semibold text-navbar-cta-foreground transition-opacity hover:opacity-90 md:inline-flex"
          >
            <span aria-hidden="true">—</span> Book A Consultation
          </a>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-navbar px-4 pb-6 xl:hidden">
          {navMenu.map((item) => (
            <div key={item.label} className="border-b border-white/10">
              <MobileNavItem item={item} />
            </div>
          ))}
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 bg-navbar-accent px-6 py-3 text-sm font-semibold text-navbar-cta-foreground"
          >
            <span aria-hidden="true">—</span> Book A Consultation
          </a>
        </div>
      )}
    </header>
  )
}
