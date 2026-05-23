'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

type FAQItem = { question: string; answer: string };

type FAQGroup = {
  id: string;
  label: string;
  items: FAQItem[];
};

const faqGroups: FAQGroup[] = [
  {
    id: 'general',
    label: 'General',
    items: [
      {
        question: 'What is Folio?',
        answer:
          'Folio is an AI-powered data workspace that lets teams query databases, build dashboards, and share insights in plain English — no SQL required. Connect your warehouse and start asking questions in minutes.',
      },
      {
        question: 'Which databases does Folio support?',
        answer:
          'Folio connects to Postgres, MySQL, Snowflake, BigQuery, Redshift, and most popular warehouses out of the box. We also support CSV uploads and read-only views into production data with column-level permissions.',
      },
      {
        question: 'Is my data sent to a third-party AI provider?',
        answer:
          'Folio uses AI to generate SQL, but your query results and underlying tables stay in your warehouse. Only schema metadata is sent for context — never row-level data. Enterprise plans include a private model deployment option.',
      },
      {
        question: 'How do I get started?',
        answer:
          'Sign up, connect your warehouse with read-only credentials, and ask your first question. Most teams have a useful dashboard live within an hour.',
      },
    ],
  },
  {
    id: 'customization',
    label: 'Customization',
    items: [
      {
        question: 'Can I edit the SQL Folio generates?',
        answer:
          'Yes — every generated query is editable, version-controlled, and reviewable. Analysts can refine the SQL before saving it as a reusable view, and the AI learns from edits to improve future suggestions.',
      },
      {
        question: 'Does Folio support our team’s semantic layer?',
        answer:
          'Folio reads dbt models, Cube definitions, and LookML if you’ve already invested in a semantic layer. If you haven’t, the AI builds one as you go — every saved query becomes a reusable concept.',
      },
      {
        question: 'Can I theme dashboards to match our brand?',
        answer:
          'Dashboards support custom palettes, logo placement, and exportable themes. Embed them in your app, share them publicly, or pin them to a Slack channel with a single URL.',
      },
    ],
  },
  {
    id: 'support',
    label: 'Support',
    items: [
      {
        question: 'Is there documentation and support available?',
        answer:
          'Yes — Folio ships with comprehensive docs, query examples for common schemas, and tutorials. Pro plans include a dedicated Slack channel with our team; Enterprise gets a named solutions engineer.',
      },
      {
        question: 'Does Folio integrate with our existing tools?',
        answer:
          'Folio integrates with Slack, Notion, Linear, GitHub, and most BI exporters. Pin a chart to a Slack channel, embed it in Notion, or post a query result on a Linear ticket — pick the surface your team already uses.',
      },
      {
        question: 'How can I report bugs or request features?',
        answer:
          'Open an issue on our GitHub or reach out in our community channel. We triage bugs quickly and ship a fresh release roughly every two weeks.',
      },
    ],
  },
];

export default function FAQs() {
  const [activeId, setActiveId] = useState<string>('general');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
    );

    for (const group of faqGroups) {
      const el = document.getElementById(group.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className='bg-background py-16 md:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='grid items-end gap-8 md:grid-cols-2 md:gap-12'>
          <h2 className='font-semibold text-4xl text-foreground'>FAQs</h2>
          <p className='max-w-md text-balance text-lg text-muted-foreground'>
            Everything you need to know about Folio. Can&apos;t find what
            you&apos;re looking for? Reach out to our{' '}
            <Link
              href='#'
              className='font-medium text-foreground hover:underline'
            >
              support team
            </Link>{' '}
            for assistance.
          </p>
        </div>

        <div className='@container mt-6 grid md:mt-20 md:grid-cols-5'>
          <nav
            aria-label='FAQ categories'
            className='md:-mt-3 sticky top-0 z-10 h-fit max-md:flex max-md:justify-center max-md:bg-foreground/2 max-md:p-2 max-md:backdrop-blur md:top-12 md:col-span-2 md:block'
          >
            {faqGroups.map((group) => {
              const isActive = activeId === group.id;
              return (
                <button
                  key={group.id}
                  type='button'
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'block w-fit cursor-pointer py-2 text-left text-sm transition-colors max-md:px-2 md:py-1.5',
                    isActive
                      ? 'font-medium text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                  onClick={() => {
                    setActiveId(group.id);
                    document.getElementById(group.id)?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}
                >
                  {group.label}
                </button>
              );
            })}
          </nav>

          <div className='space-y-12 max-md:mt-6 md:col-span-3'>
            {faqGroups.map((group) => (
              <div
                key={group.id}
                id={group.id}
                data-faq-group={group.id}
                className='scroll-mt-20 space-y-4'
              >
                <h3 className='pl-6 font-semibold text-foreground text-lg'>
                  {group.label}
                </h3>
                <Accordion
                  type='single'
                  collapsible
                  className='-space-y-1'
                  defaultValue={
                    group.id === 'general' ? 'general-0' : undefined
                  }
                >
                  {group.items.map((item, index) => (
                    <AccordionItem
                      key={`${group.id}-${index}`}
                      value={`${group.id}-${index}`}
                      className='peer rounded-xl border-none px-6 py-1 data-[state=open]:border-none data-[state=open]:bg-card data-[state=open]:shadow-black/[0.065] data-[state=open]:shadow-sm data-[state=open]:ring-1 data-[state=open]:ring-border'
                    >
                      <AccordionTrigger className='cursor-pointer rounded-none border-b py-4 text-base transition-none hover:no-underline data-[state=open]:border-transparent'>
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className='text-base text-muted-foreground'>
                          {item.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { FAQs as FAQ };
