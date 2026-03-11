import Image from "next/image";
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { BsTiktok } from "react-icons/bs";
import { SlSocialYoutube } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";
import { AiOutlineMedium } from "react-icons/ai";

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
    icon: <CiFacebook />,
  },
  {
    label: "Instagram",
    href: "#",
    icon: <FaInstagram />,
  },
  {
    label: "TikTok",
    href: "#",
    icon: <BsTiktok />,
  },
  {
    label: "YouTube",
    href: "#",
    icon: <SlSocialYoutube />,
  },
  {
    label: "X",
    href: "#",
    icon: <FaXTwitter />,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: <RiLinkedinLine />,
  },
  {
    label: "Medium",
    href: "#",
    icon: <AiOutlineMedium />,
  },
];

function SocialLink({ href, label, icon }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-[var(--navbar-accent)] hover:text-[var(--navbar-surface)]"
    >
      {icon}
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-0">
      <div className="bg-[var(--navbar-surface)] text-white">
        <div className="mx-auto max-w-full px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="grid gap-10 border-b border-white/10 pb-10 sm:pb-12 md:grid-cols-2 md:gap-12 xl:grid-cols-[minmax(0,1.3fr)_repeat(4,minmax(0,1fr))] xl:gap-8">
            <div className="space-y-8 md:col-span-2 xl:col-span-1">
              <Link
                href="/"
                aria-label="Majid Al Futtaim home"
                className="inline-flex"
              >
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
                <p className="text-lg font-light tracking-[0.01em] text-white sm:text-xl">
                  Stay in touch with us
                </p>

                <div className="flex max-w-sm flex-wrap gap-3 sm:gap-4">
                  {SOCIAL_LINKS.map((link) => (
                    <SocialLink key={link.label} {...link} />
                  ))}
                </div>
              </div>
            </div>

            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title} className="space-y-4">
                <h2 className="max-w-[14rem] text-base font-semibold uppercase leading-tight tracking-[0.08em] text-white sm:text-lg">
                  {column.title}
                </h2>

                <ul className="space-y-3 text-[11px] uppercase tracking-[0.08em] text-white sm:text-xs">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="transition-colors hover:text-[var(--navbar-accent)]"
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
        <div className="mx-auto max-w-full px-6 py-6 text-center text-xs text-[var(--gray-dark)] sm:px-10 sm:text-sm lg:px-16 lg:text-left">
          <p>&copy; {currentYear} Majid Al Futtaim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
