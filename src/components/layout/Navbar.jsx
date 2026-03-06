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
          "site-shell overflow-hidden text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors backdrop-blur",
          isScrolled ? "bg-amber-900" : "bg-black/50",
        ].join(" ")}
      >
        {/* Top header bar: Contact / A A / العربية */}
        <div
          className={[
            "overflow-hidden bg-amber-950 transition-all duration-200",
            isScrolled ? "max-h-0 opacity-0" : "max-h-\[30px\] opacity-100",
          ].join(" ")}
        >
          <div className="flex h-\[30px\] items-center justify-end text-center p-2">
            <ul className="flex items-center justify-center gap-6 text-[10px]">
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
        <div className="grid h-\[77px\] grid-cols-[auto_minmax(0,1fr)] items-center gap-10 p-2">
          {/* Left: logo/brand */}
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-400 text-base font-bold text-amber-300">
              L
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] tracking-[0.18em]">Ljudia</span>
            </span>
          </div>

          {/* Center: main nav items */}
          <div className="flex min-w-0 items-center justify-end">
            <ul className="flex items-center gap-7 text-[10px] xl:gap-8">
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
