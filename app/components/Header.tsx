"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type DropdownItem = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
};

const navItems: NavItem[] = [
  {
    label: "Tjenester",
    dropdown: [
      {
        label: "Totaloppussing av bad",
        href: "/tjenester/totaloppussing-av-bad",
      },
      { label: "Flislegging", href: "/tjenester/flislegging" },
      { label: "Rørleggerarbeid", href: "/tjenester/rorleggerarbeid" },
      { label: "Innvendig oppussing", href: "/tjenester/innvendig-oppussing" },
    ],
  },
  { label: "Referanser", href: "/referanser" },
  {
    label: "Blogg",
    dropdown: [
      { label: "Aktuelt", href: "/blogg" },
      { label: "Bli kjent med", href: "/blogg/bli-kjent-med" },
      { label: "Bolig", href: "/blogg/bolig" },
      { label: "Fargevalg og materialer", href: "/blogg/farger-og-materialer" },
      { label: "Nytt bad", href: "/blogg/nytt-bad" },
      { label: "Nytt kjøkken", href: "/blogg/nytt-kjokken" },
      { label: "Tips", href: "/blogg/tips" },
    ],
  },
  {
    label: "Områder",
    dropdown: [
      { label: "Oslo", href: "/omrader/oslo" },
      { label: "Akershus", href: "/omrader/akershus" },
      { label: "Oslo og omegn", href: "/omrader/oslo-og-omegn" },
    ],
  },
  { label: "Kontakt oss", href: "/kontakt" },
  { label: "Om oss", href: "/om-oss" },
];

export default function Header() {
  const pathname = usePathname();

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null
  );

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isDropdownActive = (item: NavItem) => {
    return item.dropdown?.some((subItem) => pathname.startsWith(subItem.href));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E7E2DD] bg-white/95 backdrop-blur">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="flex min-h-[80px] items-center gap-4 sm:min-h-[88px] lg:min-h-[96px]">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <div className="flex flex-col leading-none">
              <span className="text-[22px] font-light uppercase tracking-[0.12em] text-[#2D201C] sm:text-[28px] lg:text-[34px] xl:text-[40px]">
                Varigebad
              </span>
              <span className="mt-1 text-[8px] uppercase tracking-[0.28em] text-[#7A6A63] sm:text-[9px] lg:text-[10px] xl:text-[11px]">
                Bad & flislegging
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="ml-auto hidden items-center gap-4 xl:flex 2xl:gap-6">
            <nav className="flex items-center gap-4 2xl:gap-6">
              {navItems.map((item) => {
                const hasDropdown = !!item.dropdown;
                const active = isActive(item.href) || isDropdownActive(item);
                const isOpen = openDropdown === item.label;

                if (hasDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        type="button"
                        className={`flex items-center gap-2 rounded-full px-4 py-3 text-[15px] font-medium transition 2xl:px-5 2xl:text-[17px] ${
                          isOpen
                            ? "border-2 border-blue-600 bg-white text-[#2D201C]"
                            : active
                            ? "bg-[#E7E2DD] text-[#2D201C]"
                            : "bg-[#E7E2DD] text-[#2D201C] hover:bg-[#DED8D2]"
                        }`}
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`h-4 w-4 transition ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5 7.5L10 12.5L15 7.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {isOpen && (
                        <div className="absolute left-0 top-full mt-3 min-w-[260px] rounded-[28px] bg-[#E7E2DD] p-4 shadow-[0_8px_24px_rgba(0,0,0,0.10)] 2xl:min-w-[290px] 2xl:p-5">
                          <div className="flex flex-col">
                            {item.dropdown?.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={`rounded-2xl px-4 py-3 text-[15px] text-[#2D201C] transition hover:bg-white/60 2xl:text-[17px] ${
                                  pathname.startsWith(subItem.href)
                                    ? "bg-white/60"
                                    : ""
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
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
                    className={`text-[15px] font-medium transition 2xl:text-[17px] ${
                      active
                        ? "text-[#2D201C]"
                        : "text-[#2D201C] hover:text-[#5A4338]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/kontakt"
              className="rounded-full bg-[#4A2E21] px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-[#3b2419] 2xl:px-8 2xl:py-4 2xl:text-[17px]"
            >
              Book gratis befaring
            </Link>
          </div>

          {/* Mobile / Tablet button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Lukk meny" : "Åpne meny"}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D8D2CC] text-[#2D201C] transition hover:bg-[#F5F1ED] sm:h-12 sm:w-12 xl:hidden"
          >
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile / Tablet menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#E7E2DD] bg-white xl:hidden">
          <div className="px-4 py-4 sm:px-6">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const hasDropdown = !!item.dropdown;
                const active = isActive(item.href) || isDropdownActive(item);
                const isOpen = mobileDropdownOpen === item.label;

                if (hasDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-[#E7E2DD] bg-[#F7F3EF]"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setMobileDropdownOpen((prev) =>
                            prev === item.label ? null : item.label
                          )
                        }
                        className={`flex w-full items-center justify-between px-4 py-4 text-left text-[16px] font-medium text-[#2D201C] ${
                          active ? "font-semibold" : ""
                        }`}
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`h-4 w-4 transition ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5 7.5L10 12.5L15 7.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {isOpen && (
                        <div className="px-2 pb-3">
                          {item.dropdown?.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block rounded-xl px-3 py-3 text-[15px] text-[#2D201C] transition hover:bg-white ${
                                pathname.startsWith(subItem.href)
                                  ? "bg-white"
                                  : ""
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className={`rounded-2xl px-4 py-4 text-[16px] font-medium transition ${
                      active
                        ? "bg-[#F7F3EF] text-[#2D201C]"
                        : "text-[#2D201C] hover:bg-[#F7F3EF]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/kontakt"
                className="mt-2 rounded-full bg-[#4A2E21] px-6 py-4 text-center text-[16px] font-semibold text-white transition hover:bg-[#3b2419]"
              >
                Book gratis befaring
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
