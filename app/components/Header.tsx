"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

type DropdownItem = {
  label: string;
  href: string;
  description: string;
  icon: ReactNode;
};

type NavItem = {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
};

const PHONE_DISPLAY = "958 98 458";
const PHONE_HREF = "tel:+4795898458";

// Ikoner tegnet i samme stil som lucide (24×24, stroke).
const icons = {
  bath: (
    <>
      <path d="M10 4 8 6" />
      <path d="M17 19v2" />
      <path d="M2 12h20" />
      <path d="M7 19v2" />
      <path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  roller: (
    <>
      <rect x="2" y="2" width="16" height="6" rx="2" />
      <path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="8" y="16" width="4" height="6" rx="1" />
    </>
  ),
  tag: (
    <>
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
};

function Icon({
  children,
  className = "h-[18px] w-[18px]",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-3.5 w-3.5 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function DropdownLink({
  item,
  active,
}: {
  item: DropdownItem;
  active: boolean;
}) {
  return (
    <Link
      href={item.href}
      className={`group flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-[#4DAEC8]/10 ${
        active ? "bg-[#4DAEC8]/10" : ""
      }`}
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors group-hover:bg-[#4DAEC8] group-hover:text-white ${
          active ? "bg-[#4DAEC8] text-white" : "bg-[#4DAEC8]/15 text-[#1A3A4A]"
        }`}
      >
        <Icon>{item.icon}</Icon>
      </span>
      <span className="min-w-0">
        <span className="block text-[14px] font-medium text-[#1A3A4A]">
          {item.label}
        </span>
        <span className="block text-[12.5px] text-gray-500">
          {item.description}
        </span>
      </span>
    </Link>
  );
}

const navItems: NavItem[] = [
  {
    label: "Tjenester",
    dropdown: [
      {
        label: "Totaloppussing av bad",
        href: "/tjenester/totaloppussing-av-bad",
        description: "Komplett bad fra riving til ferdig",
        icon: icons.bath,
      },
      {
        label: "Flislegging",
        href: "/tjenester/flislegging",
        description: "Gulv og vegger med presisjon",
        icon: icons.grid,
      },
      {
        label: "Rørleggerarbeid",
        href: "/tjenester/rorleggerarbeid",
        description: "Rør-i-rør, sluk og sanitær",
        icon: icons.wrench,
      },
      {
        label: "Innvendig oppussing",
        href: "/tjenester/innvendig-oppussing",
        description: "Oppgradering av hele boligen",
        icon: icons.roller,
      },
      {
        label: "Fastprispakken",
        href: "/tjenester/fastprispakken",
        description: "Nytt bad til fastpris – 299 000 kr",
        icon: icons.tag,
      },
    ],
  },
  { label: "Referanser", href: "/referanser" },
  { label: "Blogg", href: "/blogg" },
  {
    label: "Områder",
    dropdown: [
      {
        label: "Oslo",
        href: "/omrader/oslo",
        description: "Baderenovering i hele Oslo",
        icon: icons.pin,
      },
      {
        label: "Akershus",
        href: "/omrader/akershus",
        description: "Vi dekker hele Akershus",
        icon: icons.pin,
      },
      {
        label: "Oslo og omegn",
        href: "/omrader/oslo-og-omegn",
        description: "Nabokommunene rundt Oslo",
        icon: icons.pin,
      },
    ],
  },
  { label: "Om oss", href: "/om-oss" },
];

export default function Header() {
  const pathname = usePathname();

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileMenuOpen(false);
      setMobileDropdownOpen(null);
      setOpenDropdown(null);
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isDropdownActive = (item: NavItem) => {
    return item.dropdown?.some((subItem) => pathname.startsWith(subItem.href));
  };

  return (
    <header className="sticky top-0 z-50 bg-[#4DAEC8] px-3 py-2.5 sm:px-4">
      <div
        className="relative mx-auto flex h-[72px] max-w-[1400px] items-center justify-between gap-3 rounded-full bg-white pl-4 pr-2.5 shadow-[0_10px_40px_-12px_rgba(16,24,40,0.18)] ring-1 ring-black/5 sm:pl-6 lg:grid lg:h-[80px] lg:grid-cols-[1fr_auto_1fr]"
      >
        {/* Venstre: logo */}
        <div className="flex min-w-0 items-center">
          <Link
            href="/"
            className="shrink-0"
            aria-label="Varige Bad – til forsiden"
          >
            <Image
              src="/varigebad-logo.png"
              alt="Varige Bad logo"
              width={296}
              height={285}
              priority
              className="h-[60px] w-auto lg:h-[68px]"
            />
          </Link>
        </div>

        {/* Midten: hovedmeny */}
        <nav
          aria-label="Hovedmeny"
          className="hidden h-full items-center justify-center gap-6 lg:flex xl:gap-9"
        >
          {navItems.map((item) => {
            const active = isActive(item.href) || isDropdownActive(item);

            if (item.dropdown) {
              const isOpen = openDropdown === item.label;
              return (
                <div
                  key={item.label}
                  className="relative flex h-full items-center"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenDropdown((prev) =>
                        prev === item.label ? null : item.label,
                      )
                    }
                    className="group relative flex items-center gap-1 text-[15px] font-medium text-[#1A3A4A] transition-colors hover:text-[#4DAEC8]"
                  >
                    {item.label}
                    <Chevron open={isOpen} />
                    <span
                      className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-[#4DAEC8] transition-all duration-300 ${
                        active || isOpen ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="absolute left-1/2 top-full z-50 w-[340px] -translate-x-1/2 pt-3">
                      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white p-3 shadow-2xl shadow-black/10 ring-1 ring-black/5">
                        <ul className="space-y-0.5">
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.href}>
                              <DropdownLink
                                item={subItem}
                                active={pathname.startsWith(subItem.href)}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href!}
                className="group relative whitespace-nowrap text-[15px] font-medium text-[#1A3A4A] transition-colors hover:text-[#4DAEC8]"
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-[#4DAEC8] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Høyre: knapper */}
        <div className="flex items-center justify-end gap-2">
          <Link
            href="/kontakt"
            className="hidden whitespace-nowrap rounded-full border border-[#1A3A4A] px-5 py-2.5 text-sm font-medium text-[#1A3A4A] transition-colors hover:bg-[#1A3A4A] hover:text-white xl:inline-flex"
          >
            Kontakt oss
          </Link>
          <Link
            href="/kontakt"
            className="hidden whitespace-nowrap rounded-full bg-[#4DAEC8] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#4DAEC8]/30 transition-colors hover:bg-[#3A9AB5] lg:inline-flex"
          >
            Book gratis befaring
          </Link>

          {/* Mobil: ring + meny */}
          <a
            href={PHONE_HREF}
            aria-label={`Ring oss på ${PHONE_DISPLAY}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#4DAEC8] text-white shadow-md shadow-[#4DAEC8]/30 transition-colors hover:bg-[#3A9AB5] lg:hidden"
          >
            <Icon>{icons.phone}</Icon>
          </a>
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobilmeny"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-10 items-center rounded-full border border-[#1A3A4A] px-4 text-sm font-medium text-[#1A3A4A] transition-colors hover:bg-[#1A3A4A] hover:text-white lg:hidden"
          >
            {mobileMenuOpen ? "Lukk" : "Meny"}
          </button>
        </div>
      </div>

      {/* Mobilmeny — kort under pillen */}
      {mobileMenuOpen && (
        <div
          id="mobilmeny"
          className="mx-auto mt-2 max-h-[calc(100dvh-100px)] max-w-[1400px] overflow-y-auto rounded-3xl bg-white p-3 shadow-2xl shadow-black/10 ring-1 ring-black/5 lg:hidden"
        >
          <nav aria-label="Mobilmeny" className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href) || isDropdownActive(item);

              if (item.dropdown) {
                const isOpen = mobileDropdownOpen === item.label;
                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setMobileDropdownOpen((prev) =>
                          prev === item.label ? null : item.label,
                        )
                      }
                      className={`flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left text-[15px] font-medium text-[#1A3A4A] transition-colors hover:bg-[#4DAEC8]/10 ${
                        active ? "bg-[#4DAEC8]/10" : ""
                      }`}
                    >
                      {item.label}
                      <Chevron open={isOpen} />
                    </button>

                    {isOpen && (
                      <ul className="space-y-0.5 px-1 pb-2">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.href}>
                            <DropdownLink
                              item={subItem}
                              active={pathname.startsWith(subItem.href)}
                            />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`rounded-2xl px-4 py-3.5 text-[15px] font-medium text-[#1A3A4A] transition-colors hover:bg-[#4DAEC8]/10 ${
                    active ? "bg-[#4DAEC8]/10" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-gray-100 pt-3">
              <Link
                href="/kontakt"
                className="rounded-full border border-[#1A3A4A] px-4 py-3 text-center text-sm font-medium text-[#1A3A4A]"
              >
                Kontakt oss
              </Link>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 rounded-full border border-[#1A3A4A] px-4 py-3 text-sm font-medium text-[#1A3A4A]"
              >
                <Icon className="h-4 w-4">{icons.phone}</Icon>
                {PHONE_DISPLAY}
              </a>
              <Link
                href="/kontakt"
                className="col-span-2 rounded-full bg-[#4DAEC8] px-6 py-3.5 text-center text-[15px] font-semibold text-white shadow-md shadow-[#4DAEC8]/30 transition-colors hover:bg-[#3A9AB5]"
              >
                Book gratis befaring
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
