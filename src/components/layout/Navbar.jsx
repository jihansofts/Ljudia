import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

const NAV_ITEMS = [
  { label: "Home", href: "/#home" },
  { label: "WHO WE ARE", href: "/#who-we-are" },
  { label: "PEOPLE & CAREERS", href: "/#people-careers" },
  {
    label: "The Leadership Institute",
    href: "/#leadership-institute",
  },
  { label: "INVESTOR RELATIONS", href: "/#investor-relations" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const visibleNavItems = isScrolled
    ? [...NAV_ITEMS, { label: "SEARCH", href: "#" }]
    : NAV_ITEMS;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white">
      <nav
        role="navigation"
        className={[
          "overflow-hidden text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors backdrop-blur",
          isScrolled
            ? "bg-[var(--navbar-surface)]"
            : "bg-[var(--navbar-overlay)]",
        ].join(" ")}
      >
        {/* Top header bar*/}
        <div
          className={[
            "overflow-hidden bg-[var(--navbar-surface)] transition-all duration-200",
            isScrolled ? "max-h-0 opacity-0" : "max-h-[38px] opacity-100",
          ].join(" ")}
        >
          <div className="flex h-[38px] items-center justify-end   px-5 text-center">
            <ul className="flex items-center justify-center gap-7 text-[11px]">
              <li>
                <Link
                  href="#"
                  className="tracking-[0.18em] text-white transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <BsSearch />
            </ul>
          </div>
        </div>

        {/* Main nav row */}
        <div className="grid h-[70px] grid-cols-[auto_minmax(0,1fr)] items-center gap-12 px-5">
          {/* Left: logo/brand */}
          <div className="flex items-center">
            <Image
              src="/images/Logo-light.png"
              alt="Ljudia"
              width={1500}
              height={1394}
              priority
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Center: main nav items */}
          <div className="flex min-w-0 items-center justify-end">
            <ul className="flex items-center gap-8 text-[11px] xl:gap-10">
              {visibleNavItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="border-b-2 border-transparent pb-1 text-white transition-colors hover:border-[var(--navbar-accent-strong)] hover:text-white"
                  >
                    {item.label === "SEARCH" ? <BsSearch /> : item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
