import { useEffect, useState } from "react";

const navItems = [
  "WHO WE ARE",
  "WHAT WE DO",
  "PEOPLE & CAREERS",
  "THE LEADERSHIP INSTITUTE",
  "INVESTOR RELATIONS",
  "MEDIA CENTRE",
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`maf-header ${isScrolled ? "is-scrolled" : ""}`}>
      <a className="skip-link" href="#main-content">
        Skip to Content
      </a>

      <div className="maf-utility-bar" aria-label="Utility navigation">
        <div className="maf-utility-inner">
          <span className="maf-search">Search</span>
          <a href="#">Contact Us</a>
          <a href="#">A A</a>
          <a href="#">العربية</a>
        </div>
      </div>

      <nav className="maf-main-nav" aria-label="Primary navigation">
        <div className="maf-logo" aria-label="Majid Al Futtaim">
          <span className="maf-logo-mark">M</span>
          <span className="maf-logo-text">MAJID AL FUTTAIM</span>
        </div>

        <ul className="maf-links">
          {navItems.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
