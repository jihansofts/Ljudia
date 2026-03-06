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
    <header className="fixed inset-x-0 top-0 z-50 text-white">
      <nav
        role="navigation"
        className={[
          "site-shell overflow-hidden text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors backdrop-blur",
          isScrolled ? "bg-amber-900" : "bg-black/50",
        ].join(" ")}
      >
        {/* Top header bar: Contact / A A / العربية */}
        <div
          className={[
            "overflow-hidden bg-amber-950 transition-all duration-200",
            isScrolled ? "max-h-0 opacity-0" : "max-h-[38px] opacity-100",
          ].join(" ")}
        >
          <div className="flex h-[38px] items-center justify-end px-5 text-center">
            <ul className="flex items-center justify-center gap-7 text-[11px]">
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
        <div className="grid h-[88px] grid-cols-[auto_minmax(0,1fr)] items-center gap-12 px-5">
          {/* Left: logo/brand */}
          <div className="flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400 text-lg font-bold text-amber-300">
              L
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[11px] tracking-[0.18em]">Ljudia</span>
            </span>
          </div>

          {/* Center: main nav items */}
          <div className="flex min-w-0 items-center justify-end">
            <ul className="flex items-center gap-8 text-[11px] xl:gap-10">
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
        </div>
      </nav>
    </header>
  );
}
