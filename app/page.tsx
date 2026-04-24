import CopilotLogo from "@/components/logo/copilot-logo";
import { ProfileForm } from "@/components/containers/5-form/form-section";
import type { ReactNode } from "react";

const tickerItems = [
  "Crisis Communications",
  "AI Process Optimization",
  "Reputation Management",
  "Executive Training",
  "Digital Strategy",
  "Political Campaigns",
  "AI Tool Building",
  "Workflow Automation",
  "Stakeholder Engagement",
  "Data-Driven Decisions",
];

const services = [
  {
    number: "01",
    title: "Strategic Communications",
    description:
      "Comprehensive strategy development and execution for organizations at critical junctures. Your message, precisely engineered.",
  },
  {
    number: "02",
    title: "Crisis Management",
    description:
      "24/7 rapid response with battle-tested frameworks to protect your reputation when it matters most.",
  },
  {
    number: "03",
    title: "Political & Campaign",
    description:
      "Strategic communications for political campaigns, parties, and public figures navigating complex environments.",
  },
  {
    number: "04",
    title: "Executive Training",
    description:
      "Rigorous programs that prepare leaders and communications teams for high-stakes situations.",
  },
  {
    number: "05",
    title: "Digital Reputation",
    description:
      "Online reputation management and proactive digital positioning across all channels and platforms.",
  },
  {
    number: "06 NEW",
    title: "AI Business Optimization",
    description:
      "From process automation to AI tool implementation, the same strategic discipline applied to operational excellence.",
    highlighted: true,
  },
];

const aiOfferings = [
  {
    title: "AI Automation Systems",
    description:
      "We design and implement AI-driven automation tailored to your workflows, removing bottlenecks, reducing manual overhead, and creating systems that scale with your business.",
  },
  {
    title: "Process Optimisation",
    description:
      "Deep operational analysis followed by structured redesign. We map your current processes, identify friction points, and implement measurable efficiency improvements.",
  },
  {
    title: "Data-Driven Decision Tools",
    description:
      "Custom dashboards, reporting systems, and decision frameworks built on your actual data, so leadership has the clarity to act with confidence.",
  },
  {
    title: "Strategic AI Consulting",
    description:
      "Not sure where AI fits in your business? We assess your organisation, identify the highest-impact opportunities, and build a roadmap grounded in reality, not hype.",
  },
];

const approachItems = [
  {
    title: "Proactive Protection",
    description:
      "We identify and mitigate risks, communication or operational, before they become crises.",
    features: [
      "Social media vulnerability audits",
      "AI readiness assessments",
      "24/7 media sentiment tracking",
      "Early warning detection systems",
    ],
  },
  {
    title: "Crisis Response",
    description:
      "When things move fast, we move faster. Battle-tested protocols, deployed within hours.",
    features: [
      "24/7 crisis hotline",
      "Rapid response team deployment",
      "Media relations management",
      "Stakeholder communications",
    ],
  },
  {
    title: "Strategic Planning",
    description:
      "Comprehensive strategies that work across communications and operations simultaneously.",
    features: [
      "Reputation management plans",
      "Process optimization roadmaps",
      "Brand positioning",
      "AI implementation strategies",
    ],
  },
  {
    title: "Stakeholder Engagement",
    description:
      "Building strong relationships, internally and externally, that support long-term resilience.",
    features: [
      "Community outreach programs",
      "Government relations",
      "Internal communications",
      "Media relationship building",
    ],
  },
];

const industries = [
  {
    name: "Corporations",
    description:
      "Strategic communications for Fortune 500 companies and emerging enterprises.",
  },
  {
    name: "Financial Services",
    description:
      "Reputation management for banks, investment firms, and fintech companies.",
  },
  {
    name: "Government",
    description:
      "Public affairs and crisis management for agencies and officials.",
  },
  {
    name: "Legal",
    description: "Media strategy and crisis management for law firms and their clients.",
  },
  {
    name: "Technology",
    description:
      "Communications strategy and AI consulting for tech companies and startups.",
  },
  {
    name: "Political Parties",
    description:
      "Media strategy, event planning and crisis management for campaigns.",
  },
  {
    name: "NGOs & Thinktanks",
    description:
      "Media strategy and crisis management for non-governmental organizations.",
  },
  {
    name: "Lobbyists",
    description:
      "Media strategy, digital presence and crisis management for advocacy groups.",
  },
];

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:gap-20">
      <div>
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
          {label}
        </p>
        <h2 className="text-4xl font-bold leading-[1.08] tracking-normal text-white sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-xl pt-0 text-base leading-8 text-zinc-300 lg:pt-14">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Divider() {
  return (
    <div className="mx-6 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent md:mx-12" />
  );
}

export default function Home() {
  return (
    <main id="top" className="site-noise relative overflow-hidden bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.04] bg-black/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" aria-label="CoPilot Agency home" className="inline-flex">
            <CopilotLogo
              fill="#E2E12F"
              title="CoPilot Agency"
              width={150}
              height={56}
              className="h-8 w-auto transition-opacity hover:opacity-85 sm:h-9"
            />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <a className="nav-link" href="#services">
              Services
            </a>
            <a className="nav-link text-primary" href="#ai-consulting">
              AI Consulting
            </a>
            <a className="nav-link" href="#approach">
              Approach
            </a>
            <a className="nav-link" href="#industries">
              Industries
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="inline-flex min-h-10 items-center bg-primary px-5 text-xs font-semibold uppercase tracking-[0.08em] text-black shadow-[0_0_22px_rgba(226,225,47,0.16)] transition hover:bg-primary/90"
          >
            Schedule Call
          </a>
        </nav>
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-24 pt-32 md:px-8 lg:px-12">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Strategic Communications & AI Business Optimization
          </p>
          <h1 className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-normal text-white sm:text-7xl lg:text-8xl">
            When Stakes Are
            <br />
            <span className="text-primary text-glow">Highest,</span>
            <br />
            We Deliver.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-zinc-300 sm:text-lg">
            From crisis communications to AI-driven operational transformation,
            CoPilot Agency partners with global leaders who cannot afford second
            place.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a className="btn-primary" href="#contact">
              Schedule Consultation
            </a>
            <a className="btn-ghost" href="#services">
              Our Services
            </a>
          </div>
        </div>

        <div className="absolute bottom-20 right-5 z-10 hidden flex-col gap-8 text-right md:flex lg:right-12">
          <div>
            <div className="text-5xl font-bold leading-none text-primary text-glow">
              24/7
            </div>
            <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Crisis Response
            </div>
          </div>
          <div>
            <div className="text-5xl font-bold leading-none text-primary text-glow">
              F500
            </div>
            <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Clientele
            </div>
          </div>
        </div>

        <div className="hero-scroll-line" aria-hidden="true" />
      </section>

      <div className="overflow-hidden border-y border-white/[0.05] bg-zinc-900 py-4">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-9 px-9 text-xs font-medium uppercase tracking-[0.06em] text-zinc-500"
            >
              <span className="text-lg leading-none text-primary">.</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      <section id="services" className="px-5 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Our Services"
            title={
              <>
                What We
                <br />
                Do Best
              </>
            }
            description="A comprehensive suite of communications and strategic consulting services, designed for organizations that operate where precision is non-negotiable."
          />

          <div className="mt-16 grid border border-white/[0.05] bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className={`group relative min-h-72 overflow-hidden border border-transparent p-8 transition duration-300 ${
                  service.highlighted
                    ? "bg-primary/[0.08] ring-1 ring-primary/25"
                    : "bg-[#0a0a0a] hover:bg-[#141414]"
                } hover:border-primary/25`}
              >
                <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  {service.number}
                </div>
                <h3 className="mb-4 text-2xl font-semibold tracking-normal text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-7 text-zinc-400">{service.description}</p>
                <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary shadow-[0_0_12px_rgba(226,225,47,0.35)] transition-transform duration-300 group-hover:scale-x-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section id="ai-consulting" className="bg-[#0a0a0a] px-5 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <div>
            <span className="mb-8 inline-flex border border-primary/25 bg-primary/[0.08] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              New Service Offering
            </span>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
              AI & Process Optimization
            </p>
            <h2 className="text-4xl font-bold leading-[1.08] tracking-normal text-white sm:text-5xl lg:text-6xl">
              Operational
              <br />
              Precision.
              <br />
              <span className="text-primary text-glow">AI-Powered.</span>
            </h2>
            <p className="mt-7 border-t border-white/[0.06] pt-7 text-base leading-8 text-zinc-300">
              We apply the same strategic rigour that protects reputations in
              crisis to optimising how your business operates day-to-day. AI
              automation systems, data-driven decision tools, and process
              redesign - built for organisations that demand results, not
              experiments.
            </p>
            <p className="mt-5 text-sm leading-7 text-zinc-500">
              Nuo procesų tobulinimo iki kritinių situacijų valdymo - padedame
              jūsų verslui veikti nepriekaištingai.
            </p>
            <div className="mt-10 border border-primary/25 bg-primary/[0.08] p-8">
              <p className="mb-7 text-sm leading-7 text-zinc-300">
                Already working with us on comms? AI optimization consulting can
                be added to your existing engagement or initiated as a standalone
                mandate.
              </p>
              <a className="btn-primary" href="#contact">
                Book AI Consultation
              </a>
            </div>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {aiOfferings.map((offering, index) => (
              <article
                key={offering.title}
                className="grid grid-cols-[2.5rem_1fr] gap-6 py-8 transition hover:bg-primary/[0.06] hover:pl-3"
              >
                <div className="pt-1 text-xs font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold tracking-normal text-white">
                    {offering.title}
                  </h3>
                  <p className="text-sm leading-7 text-zinc-400">
                    {offering.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section id="approach" className="px-5 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Our Approach"
            title={
              <>
                The Method
                <br />
                Behind Results
              </>
            }
            description="Whether we are managing a crisis or redesigning a business process, our approach is identical: deep analysis, precise strategy, flawless execution."
          />

          <div className="mt-16 grid border border-white/[0.05] bg-white/[0.04] md:grid-cols-2">
            {approachItems.map((item, index) => (
              <article
                key={item.title}
                className="bg-[#0a0a0a] p-8 transition hover:bg-[#141414] sm:p-10"
              >
                <div className="mb-7 text-6xl font-bold leading-none tracking-normal text-primary/20">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-4 text-2xl font-semibold tracking-normal text-white">
                  {item.title}
                </h3>
                <p className="mb-7 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm font-medium text-zinc-300"
                    >
                      <span className="text-primary" aria-hidden="true">
                        -
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section id="industries" className="bg-[#0a0a0a] px-5 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
              Industries We Serve
            </p>
            <h2 className="text-4xl font-bold leading-[1.08] tracking-normal text-white sm:text-5xl lg:text-6xl">
              Sector
              <br />
              Expertise
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <article
                key={industry.name}
                className="border-b border-r border-white/[0.06] p-7 transition hover:border-primary/25 hover:bg-primary/[0.08]"
              >
                <h3 className="mb-3 text-lg font-semibold tracking-normal text-white">
                  {industry.name}
                </h3>
                <p className="text-sm leading-7 text-zinc-400">
                  {industry.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section id="contact" className="px-5 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
              Contact
            </p>
            <h2 className="text-4xl font-bold leading-[1.08] tracking-normal text-white sm:text-5xl lg:text-6xl">
              Let&apos;s Talk
              <br />
              About What&apos;s
              <br />
              <span className="text-primary text-glow">At Stake.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-300">
              Whether you&apos;re facing a communications challenge or looking to
              transform your operations with AI, we&apos;re ready. Every engagement
              begins with a confidential consultation.
            </p>
            <div className="mt-12 border-l-4 border-primary bg-primary/[0.08] p-8">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Urgent? Call directly
              </p>
              <a
                href="tel:+37069181186"
                className="break-words text-3xl font-bold tracking-normal text-primary text-glow transition hover:opacity-85 sm:text-4xl"
              >
                +370 691 81186
              </a>
            </div>
          </div>

          <ProfileForm />
        </div>
      </section>

      <footer className="border-t border-white/[0.06] px-5 py-10 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-zinc-500 lg:flex-row lg:items-center lg:justify-between">
          <p>&copy; 2026 CoPilot Agency. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-[11px] font-medium uppercase tracking-[0.06em]">
            <a className="transition hover:text-primary" href="#top">
              Home
            </a>
            <a className="transition hover:text-primary" href="#services">
              Services
            </a>
            <a className="transition hover:text-primary" href="#ai-consulting">
              AI Consulting
            </a>
            <a className="transition hover:text-primary" href="/privacy-policy">
              Privacy Policy
            </a>
            <a className="transition hover:text-primary" href="mailto:contact@copilotagency.com">
              contact@copilotagency.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
