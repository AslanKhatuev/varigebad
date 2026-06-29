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
  { label: "Blogg", href: "/blogg" },
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
    <header className="sticky top-0 z-50 border-b border-[#B8E4F0] bg-white">
      <div className="w-full px-3 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-12">
        {/*
          Header-høyde skalerer i fire steg (mobil → sm → md → lg+),
          slik at logoen kan vokse jevnt uten å gjøre headeren
          uforholdsmessig stor på små skjermer.
        */}
        <div className="relative flex min-h-[64px] items-center gap-3 overflow-visible sm:min-h-[80px] sm:gap-4 md:min-h-[88px] lg:min-h-[96px]">
          <Link href="/" className="z-10 shrink-0">
            <img
              src="/varigebad.jpg"
              alt="Varige Bad logo"
              className="h-[72px] w-[72px] rounded-full object-cover sm:h-[96px] sm:w-[96px] md:h-[112px] md:w-[112px] lg:h-[128px] lg:w-[128px]"
            />
          </Link>

          {/*
            Desktop-navigasjon fra lg: (1024px) i stedet for xl: (1280px) —
            gir korrekt visning på vanlige laptoper og liggende tablets,
            ikke bare på store skjermer.
          */}
          <div className="ml-auto hidden items-center gap-3 lg:flex lg:gap-4 2xl:gap-6">
            <nav className="flex items-center gap-2 lg:gap-3 2xl:gap-6">
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
                        className={`flex items-center gap-1.5 rounded-full px-3 py-2.5 text-[13px] font-medium transition lg:px-4 lg:py-3 lg:text-[14px] 2xl:px-5 2xl:text-[17px] ${
                          isOpen
                            ? "border-2 border-[#4DAEC8] bg-white text-[#1A3A4A]"
                            : active
                            ? "bg-[#DCF2F9] text-[#1A3A4A]"
                            : "bg-[#DCF2F9] text-[#1A3A4A] hover:bg-[#C8EAF5]"
                        }`}
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`h-3.5 w-3.5 shrink-0 transition lg:h-4 lg:w-4 ${
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
                        <div className="absolute left-0 top-full min-w-[240px] pt-3 2xl:min-w-[290px]">
                          <div className="rounded-[24px] bg-[#DCF2F9] p-3 shadow-[0_8px_24px_rgba(77,174,200,0.15)] lg:rounded-[28px] lg:p-4 2xl:p-5">
                            <div className="flex flex-col">
                              {item.dropdown?.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className={`rounded-2xl px-3.5 py-2.5 text-[14px] text-[#1A3A4A] transition hover:bg-white/60 lg:px-4 lg:py-3 lg:text-[15px] 2xl:text-[17px] ${
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
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className={`whitespace-nowrap text-[13px] font-medium transition lg:text-[14px] 2xl:text-[17px] ${
                      active
                        ? "text-[#1A3A4A]"
                        : "text-[#1A3A4A] hover:text-[#4DAEC8]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/kontakt"
              className="whitespace-nowrap rounded-full bg-[#4DAEC8] px-4 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#3A9AB5] lg:px-6 lg:py-3 lg:text-[14px] 2xl:px-8 2xl:py-4 2xl:text-[17px]"
            >
              Book gratis befaring
            </Link>
          </div>

          {/* Hamburger-knapp vises nå under lg: i stedet for under xl: */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Lukk meny" : "Åpne meny"}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#B8E4F0] text-[#1A3A4A] transition hover:bg-[#DCF2F9] sm:h-11 sm:w-11 md:h-12 md:w-12 lg:hidden"
          >
            <svg
              className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6"
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

      {/* Mobilmeny — vises nå under lg: i stedet for under xl: */}
      {mobileMenuOpen && (
        <div className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-[#B8E4F0] bg-white sm:max-h-[calc(100vh-80px)] lg:hidden">
          <div className="px-3 py-4 sm:px-6 sm:py-5">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const hasDropdown = !!item.dropdown;
                const active = isActive(item.href) || isDropdownActive(item);
                const isOpen = mobileDropdownOpen === item.label;

                if (hasDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-[#B8E4F0] bg-[#EDF8FC]"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setMobileDropdownOpen((prev) =>
                            prev === item.label ? null : item.label
                          )
                        }
                        className={`flex w-full items-center justify-between px-4 py-3.5 text-left text-[15px] font-medium text-[#1A3A4A] sm:py-4 sm:text-[16px] ${
                          active ? "font-semibold" : ""
                        }`}
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`h-4 w-4 shrink-0 transition ${
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
                              className={`block rounded-xl px-3 py-2.5 text-[14px] text-[#1A3A4A] transition hover:bg-white sm:py-3 sm:text-[15px] ${
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
                    className={`rounded-2xl px-4 py-3.5 text-[15px] font-medium transition sm:py-4 sm:text-[16px] ${
                      active
                        ? "bg-[#EDF8FC] text-[#1A3A4A]"
                        : "text-[#1A3A4A] hover:bg-[#EDF8FC]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/kontakt"
                className="mt-2 rounded-full bg-[#4DAEC8] px-6 py-3.5 text-center text-[15px] font-semibold text-white transition hover:bg-[#3A9AB5] sm:py-4 sm:text-[16px]"
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
