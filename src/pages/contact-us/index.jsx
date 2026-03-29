import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CONTACT_CHANNELS = [
  {
    eyebrow: "General inquiries",
    title: "Start the right conversation",
    description:
      "Share your hiring challenge, operational question, or growth objective and we will route it to the right team quickly.",
    href: "mailto:hello@ljudia.com?subject=General%20inquiry%20for%20Ljudia%20Hire",
    linkLabel: "Email the team",
  },
  {
    eyebrow: "People & careers",
    title: "Discuss talent and career opportunities",
    description:
      "Reach out if you want to explore current openings, development pathways, or how our people programs are structured.",
    href: "mailto:hello@ljudia.com?subject=People%20and%20Careers%20inquiry",
    linkLabel: "Talk to careers",
  },
  {
    eyebrow: "Partnerships",
    title: "Build something together",
    description:
      "For partnership opportunities, strategic collaborations, or leadership learning initiatives, send us the context and desired outcome.",
    href: "mailto:hello@ljudia.com?subject=Partnership%20opportunity%20with%20Ljudia%20Hire",
    linkLabel: "Share your idea",
  },
];

const NEXT_STEPS = [
  {
    step: "01",
    title: "We review the brief",
    description:
      "Your message is read with the business context attached, not treated like a generic inbox request.",
  },
  {
    step: "02",
    title: "We route it properly",
    description:
      "We connect your request to the right conversation, whether that is talent, leadership development, or partnership planning.",
  },
  {
    step: "03",
    title: "We respond with next steps",
    description:
      "You get a clear reply with the most relevant follow-up rather than a vague acknowledgment.",
  },
];

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  company: "",
  topic: "Hiring support",
  message: "",
};

function buildMailtoUrl(formState) {
  const subject = `${formState.topic} inquiry from ${formState.name}`;
  const body = [
    `Name: ${formState.name}`,
    `Email: ${formState.email}`,
    `Company: ${formState.company || "Not provided"}`,
    `Focus area: ${formState.topic}`,
    "",
    "Message:",
    formState.message,
  ].join("\n");

  return `mailto:hello@ljudia.com?${new URLSearchParams({
    subject,
    body,
  }).toString()}`;
}

export default function ContactUsPage() {
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);
  const [hasOpenedDraft, setHasOpenedDraft] = useState(false);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;

    setFormState((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = buildMailtoUrl(formState);
    setHasOpenedDraft(true);
  };

  return (
    <>
      <Head>
        <title>Contact Us | Ljudia Hire</title>
        <meta
          name="description"
          content="Start a conversation with Ljudia Hire about hiring support, people programs, and partnership opportunities."
        />
      </Head>

      <section className="relative isolate min-h-[42rem] overflow-hidden bg-stone-950">
        <Image
          src="/images/office-images/office-1.jpg"
          alt="Ljudia Hire team collaboration space"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(17,24,39,0.92)_0%,rgba(17,24,39,0.78)_42%,rgba(17,24,39,0.36)_100%)]" />

        <div className="relative z-10 mx-auto grid min-h-[42rem] max-w-full gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_24rem] lg:px-16 lg:py-24">
          <div className="flex items-end">
            <div className="max-w-4xl text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-100 sm:text-base">
                Contact Us
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Bring the right people into the conversation.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-stone-100 sm:mt-7 sm:text-lg sm:leading-8">
                Whether you need hiring support, want to explore career
                opportunities, or are looking to build a partnership, this page
                gives you a direct route to the team that can actually move the
                discussion forward.
              </p>
            </div>
          </div>

          <div className="self-end rounded-[2rem] border border-white/15 bg-white/10 p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--navbar-accent)]">
              Quick contact
            </p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
              Prefer a direct email instead of a long form?
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">
              Use the direct inbox below for immediate outreach, or complete the
              form further down to generate a structured email draft with the
              details already filled in.
            </p>

            <a
              href="mailto:hello@ljudia.com"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--navbar-surface)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--navbar-accent-strong)]"
            >
              hello@ljudia.com
            </a>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.22em] text-white/60">
                  Typical use
                </span>
                <span className="text-right text-sm text-white/80">
                  Hiring briefs, partnerships, career conversations
                </span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.22em] text-white/60">
                  Response style
                </span>
                <span className="text-right text-sm text-white/80">
                  Clear next step and relevant follow-up
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f0e8]">
        <div className="mx-auto max-w-full px-6 py-12 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8c6c3a]">
              Choose your route
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-[1.08] tracking-tight text-black sm:text-5xl lg:text-6xl">
              Different conversations need different entry points.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg sm:leading-8">
              Pick the path that best matches what you are trying to solve. Each
              option opens a focused conversation instead of sending you into a
              dead-end contact flow.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {CONTACT_CHANNELS.map((channel) => (
              <article
                key={channel.title}
                className="flex h-full flex-col rounded-[2rem] border border-black/8 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8c6c3a]">
                  {channel.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight text-black">
                  {channel.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-black/70 sm:text-base">
                  {channel.description}
                </p>
                <a
                  href={channel.href}
                  className="mt-8 inline-flex min-h-11 items-center rounded-full border border-[var(--navbar-surface)] px-5 py-3 text-sm font-semibold text-[var(--navbar-surface)] transition-colors hover:bg-[var(--navbar-surface)] hover:text-white"
                >
                  {channel.linkLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-full px-6 py-12 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.1fr)_24rem]">
            <div className="rounded-[2rem] bg-[#f8f5ef] p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8c6c3a]">
                Send a brief
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-[1.08] tracking-tight text-black sm:text-5xl">
                Tell us what you need and we will shape the right next step.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg sm:leading-8">
                This form does not disappear into a backend queue. It opens a
                structured email draft to <strong>hello@ljudia.com</strong> so
                your message leaves with the context already in place.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 grid gap-4 sm:grid-cols-2"
              >
                <label className="flex flex-col gap-2 text-sm font-medium text-black">
                  Name
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleFieldChange}
                    required
                    className="min-h-12 rounded-2xl border border-black/10 bg-white px-4 text-base text-black outline-none transition-colors focus:border-[var(--navbar-accent-strong)]"
                    placeholder="Your full name"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-black">
                  Work email
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleFieldChange}
                    required
                    className="min-h-12 rounded-2xl border border-black/10 bg-white px-4 text-base text-black outline-none transition-colors focus:border-[var(--navbar-accent-strong)]"
                    placeholder="name@company.com"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-black">
                  Company
                  <input
                    type="text"
                    name="company"
                    value={formState.company}
                    onChange={handleFieldChange}
                    className="min-h-12 rounded-2xl border border-black/10 bg-white px-4 text-base text-black outline-none transition-colors focus:border-[var(--navbar-accent-strong)]"
                    placeholder="Your company or team"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-black">
                  Focus area
                  <select
                    name="topic"
                    value={formState.topic}
                    onChange={handleFieldChange}
                    className="min-h-12 rounded-2xl border border-black/10 bg-white px-4 text-base text-black outline-none transition-colors focus:border-[var(--navbar-accent-strong)]"
                  >
                    <option>Hiring support</option>
                    <option>People & Careers</option>
                    <option>Leadership Institute</option>
                    <option>Partnerships</option>
                    <option>General inquiry</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-black sm:col-span-2">
                  What should we know?
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleFieldChange}
                    required
                    rows={6}
                    className="rounded-[1.5rem] border border-black/10 bg-white px-4 py-3 text-base text-black outline-none transition-colors focus:border-[var(--navbar-accent-strong)]"
                    placeholder="Share the challenge, timeline, and the kind of support you are looking for."
                  />
                </label>

                <div className="flex flex-col gap-3 pt-2 sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--navbar-surface)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#45352a]"
                  >
                    Open email draft
                  </button>

                  <p className="text-sm leading-6 text-black/65">
                    Submitting opens your default email app with a pre-filled
                    draft addressed to hello@ljudia.com.
                  </p>

                  {hasOpenedDraft ? (
                    <p className="text-sm font-medium leading-6 text-[#8c6c3a]">
                      If no email app opened, send your message directly to
                      hello@ljudia.com.
                    </p>
                  ) : null}
                </div>
              </form>
            </div>

            <aside className="rounded-[2rem] bg-[var(--navbar-surface)] p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--navbar-accent)]">
                What happens next
              </p>
              <div className="mt-6 space-y-5">
                {NEXT_STEPS.map((item) => (
                  <article
                    key={item.step}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--navbar-accent)]">
                      {item.step}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/75">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-[var(--navbar-accent)]/30 bg-black/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--navbar-accent)]">
                  Prefer a lighter touch?
                </p>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  If you are still exploring, email us directly or head back to
                  the homepage and continue reviewing our services before you
                  reach out.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="mailto:hello@ljudia.com"
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--navbar-accent)] px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-[var(--navbar-accent-strong)]"
                  >
                    Email directly
                  </a>
                  <Link
                    href="/"
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
                  >
                    Back to home
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
