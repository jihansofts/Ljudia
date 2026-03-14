import Image from "next/image";
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";

const FOOTER_NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "WHO WE ARE", href: "/who-we-are" },
  { label: "PEOPLE & CAREERS", href: "/people-careers" },
  { label: "The Leadership Institute", href: "/leadership-institute" },
  { label: "TERMS & CONDITION", href: "/investor-relations" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: <CiFacebook className="text-lg" /> },
  {
    label: "LinkedIn",
    href: "#",
    icon: <RiLinkedinLine className="text-lg" />,
  },
  {
    label: "Gmail",
    href: "mailto:hello@ljudia.com",
    icon: <MdOutlineMail className="text-lg" />,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-(--navbar-surface) text-white">
        <div className="border-b border-white/10 px-5 py-10">
          <div className="mx-auto flex w-full max-w-350 flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" aria-label="Ljudia home" className="inline-flex">
                <Image
                  src="/images/Logo-light.png"
                  alt="Ljudia"
                  width={1500}
                  height={1394}
                  className="h-10 w-auto object-contain sm:h-12"
                />
              </Link>

              <ul className="flex items-center gap-3">
                {SOCIAL_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-(--navbar-accent) transition-colors hover:border-(--navbar-accent-strong) hover:text-(--navbar-accent-strong)"
                    >
                      {item.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <nav aria-label="Footer navigation" className="w-full md:max-w-190">
              <ul className="grid list-disc grid-cols-1 gap-x-10 gap-y-3 pl-4 text-[11px] font-semibold uppercase tracking-[0.16em] marker:text-white/60 sm:grid-cols-2 lg:grid-cols-3">
                {FOOTER_NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="border-b-2 border-transparent pb-1 transition-colors hover:border-(--navbar-accent-strong) hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </footer>
      <div className="px-5 py-5 text-[11px] uppercase tracking-[0.12em] text-black/80">
        <div className="mx-auto w-full max-w-350">
          <p>&copy; Ljudia Hire {currentYear}. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
