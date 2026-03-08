import Image from "next/image";
import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "WHO WE ARE",
    links: [
      "Vision & Values",
      "Our Journey",
      "Sustainability & ESG",
      "Corporate Compliance",
    ],
  },
  {
    title: "WHAT WE DO",
    links: [
      "Unique Experiences",
      "Our Industries",
      "Our Brand Family",
      "Partner With Us",
    ],
  },
  {
    title: "THE LEADERSHIP INSTITUTE",
    links: [
      "Executive Learning",
      "Leadership Programmes",
      "Capability Building",
    ],
  },
  {
    title: "QUICK LINKS",
    links: [
      "Contact Us",
      "Media Centre",
      "People & Careers",
      "Investor Relations",
      "Privacy Center",
      "Anti Fraud Disclaimer",
      "Responsible Disclosure Policy",
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M13.5 21v-7.1h2.4l.4-2.8h-2.8V9.3c0-.8.2-1.4 1.4-1.4h1.5V5.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4.1v1.7H7.9v2.8h2.3V21h3.3Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-none stroke-current"
      >
        <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5.5" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="4" strokeWidth="1.7" />
        <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M14.6 3c.4 2 1.5 3.4 3.4 4.2v2.4c-1.4 0-2.6-.4-3.8-1.2v5.3a5.1 5.1 0 1 1-5-5.1c.3 0 .6 0 .9.1v2.5a2.5 2.5 0 1 0 1.7 2.4V3h2.8Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M21 12c0-2.4-.2-4-.6-4.9-.3-.7-.9-1.2-1.6-1.5C17.9 5.2 12 5.2 12 5.2s-5.9 0-6.8.4c-.7.3-1.3.8-1.6 1.5C3.2 8 3 9.6 3 12c0 2.4.2 4 .6 4.9.3.7.9 1.2 1.6 1.5.9.4 6.8.4 6.8.4s5.9 0 6.8-.4c.7-.3 1.3-.8 1.6-1.5.4-.9.6-2.5.6-4.9Zm-11.4 3.4V8.6l5.6 3.4-5.6 3.4Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-none stroke-current"
      >
        <path d="M4.5 4.5 19.5 19.5M19.5 4.5 4.5 19.5" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M6.4 8.3A1.9 1.9 0 1 0 6.3 4.5a1.9 1.9 0 0 0 .1 3.8ZM4.8 9.9h3.1V19H4.8V9.9Zm5 0H13v1.3h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5V19H17v-4c0-.9 0-2.1-1.3-2.1s-1.5 1-1.5 2V19h-3.1V9.9Z" />
      </svg>
    ),
  },
  {
    label: "Medium",
    href: "#",
    icon: (
      <span className="text-lg font-semibold leading-none">M</span>
    ),
  },
];

function SocialLink({ href, label, icon }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--navbar-accent)] text-[var(--navbar-accent)] transition-colors hover:bg-[var(--navbar-accent)] hover:text-[var(--navbar-surface)]"
    >
      {icon}
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-0">
      <div className="bg-[var(--navbar-surface)] text-[var(--navbar-accent)]">
        <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
          <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[minmax(0,1.45fr)_repeat(4,minmax(0,1fr))] lg:gap-8">
            <div className="max-w-sm space-y-10">
              <Link href="/" aria-label="Majid Al Futtaim home" className="inline-flex">
                <Image
                  src="/images/Logo-light.png"
                  alt="Majid Al Futtaim"
                  width={311}
                  height={74}
                  className="h-14 w-auto object-contain sm:h-16"
                  priority={false}
                />
              </Link>

              <div className="space-y-5">
                <p className="text-xl font-light tracking-[0.01em] text-[var(--navbar-accent)]">
                  Stay in touch with us
                </p>

                <div className="flex max-w-xs flex-wrap gap-4">
                  {SOCIAL_LINKS.map((link) => (
                    <SocialLink key={link.label} {...link} />
                  ))}
                </div>
              </div>
            </div>

            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title} className="space-y-4">
                <h2 className="max-w-[12rem] text-lg font-semibold uppercase leading-tight tracking-[0.08em] text-[var(--navbar-accent)]">
                  {column.title}
                </h2>

                <ul className="space-y-3 text-xs uppercase tracking-[0.08em] text-[var(--navbar-accent)]">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="transition-colors hover:text-[var(--navbar-accent-strong)]"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[var(--background)]">
        <div className="mx-auto max-w-[1400px] px-6 py-7 text-sm text-[var(--gray-dark)] sm:px-10 lg:px-16">
          <p>&copy; {currentYear} Majid Al Futtaim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
