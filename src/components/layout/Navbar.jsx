import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  "WHO WE ARE",
  "WHAT WE DO",
  "PEOPLE & CAREERS",
  "THE LEADERSHIP INSTITUTE",
  "INVESTOR RELATIONS",
  "MEDIA CENTRE",
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 text-white transition-colors backdrop-blur",
        isScrolled ? "bg-black/90" : "bg-black/70",
      ].join(" ")}
    >
      <nav
        role="navigation"
        className="mx-auto max-w-[1440px] px-10 text-[11px] font-semibold uppercase tracking-[0.16em]"
      >
        {/* Top header bar: Contact / A A / العربية */}
        <div
          className={[
            "overflow-hidden transition-all duration-200",
            isScrolled ? "max-h-0 opacity-0" : "max-h-[30px] opacity-100",
          ].join(" ")}
        >
          <div className="flex h-[30px] items-center justify-end">
            <ul className="flex items-center gap-6 text-[10px]">
              <li>
                <Link
                  href="#"
                  className="tracking-[0.18em] hover:text-amber-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <button className="tracking-[0.18em] hover:text-amber-300">
                  A A
                </button>
              </li>
              <li>
                <button className="tracking-[0.18em] hover:text-amber-300">
                  العربية
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Main nav row */}
        <div className="flex h-[77px] items-center gap-10">
          {/* Left: logo/brand */}
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-400 text-base font-bold text-amber-300">
              M
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] tracking-[0.18em]">
                Majid Al Futtaim
              </span>
            </span>
          </div>

          {/* Center: main nav items */}
          <div className="flex flex-1 items-center justify-center">
            <ul className="flex items-center gap-9 text-[10px]">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="border-b-2 border-transparent pb-1 transition-colors hover:border-amber-400 hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: spacer to balance layout */}
          <div className="w-[72px]" />
        </div>
      </nav>
    </header>
  );
}

