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
        question: 'What is Aria CRM?',
        answer:
          'Aria is a flexible CRM that helps teams organize companies, contacts, customer data, and interactions in one place.',
      },
      {
        question: 'Who is Aria CRM for?',
        answer:
          'Aria is built for teams that want a simple, flexible way to manage customer relationships without relying on scattered spreadsheets.',
      },
      {
        question: 'How is Aria different from a traditional CRM?',
        answer:
          'Aria focuses on keeping customer data simple, organized, and adaptable to the way your team actually works.',
      },
      {
        question: 'Can I manage both companies and contacts in Aria?',
        answer:
          'Yes. Aria lets you organize companies and contacts together so your team can easily understand and manage customer relationships.',
      },
      {
        question: 'Can my whole team use Aria?',
        answer:
          'Yes. Aria is designed to give teams a shared workspace for managing and accessing customer information.',
      },
    ],
  },
  {
    id: 'data-organization',
    label: 'Data & Organization',
    items: [
      {
        question: 'Can I customize Aria to fit my workflow?',
        answer:
          'Yes. Aria is designed to be flexible, allowing you to organize customer information around your team’s workflow.',
      },
      {
        question: 'Can I create custom fields?',
        answer:
          'Yes. Custom fields help you capture the information that matters most to your business and your customer relationships.',
      },
      {
        question: 'Can I create custom views?',
        answer:
          'Yes. Create views that help your team focus on the companies, contacts, and information that matter most.',
      },
      {
        question: 'Can I search and filter my customer data?',
        answer:
          'Yes. Search and filtering make it easier to quickly find the customers and information you need.',
      },
      {
        question: 'Can I keep customer activity and information together?',
        answer:
          'Yes. Aria keeps customer information and relevant activity connected, giving your team more context when working with customers.',
      },
    ],
  },
  {
    id: 'integrations',
    label: 'Integrations',
    items: [
      {
        question: 'Does Aria integrate with the tools my team already uses?',
        answer:
          'Aria is designed to fit into your existing workflow. Available integrations depend on the tools supported by your Aria setup.',
      },
      {
        question: 'Can I import existing customer data into Aria?',
        answer:
          'You can bring your existing customer information into Aria, making it easier to move away from scattered spreadsheets and legacy workflows.',
      },
      {
        question: 'Can Aria replace our customer spreadsheets?',
        answer:
          'Aria gives your team a structured place to manage customer data, reducing the need to maintain multiple spreadsheets and duplicate records.',
      },
    ],
  },
  {
    id: 'teams-workflow',
    label: 'Teams & Workflow',
    items: [
      {
        question: 'Can Aria support different team workflows?',
        answer:
          'Yes. Aria’s flexible structure lets teams organize information and views around the way they work.',
      },
      {
        question: 'How does Aria help keep the team aligned?',
        answer:
          'With customer information in one shared workspace, everyone can work from the same data and stay up to date.',
      },
      {
        question: 'Can I use Aria for sales and customer management?',
        answer:
          'Yes. Aria can be used to organize customer information, track relationships, and give sales and customer-facing teams the context they need.',
      },
    ],
  },
  {
    id: 'security',
    label: 'Security',
    items: [
      {
        question: 'How is my customer data protected?',
        answer:
          'Aria is built with data security in mind. Your specific security controls and policies depend on your Aria environment and plan.',
      },
    ],
  },
  {
    id: 'getting-started',
    label: 'Getting Started',
    items: [
      {
        question: 'How do I get started with Aria?',
        answer:
          'Getting started is simple: bring in your customer data, customize your workspace, and start managing your relationships in Aria.',
      },
      {
        question: 'Do I need technical knowledge to use Aria?',
        answer:
          'No. Aria is designed to be approachable for teams that want to manage customer data without needing advanced technical or database skills.',
      },
    ],
  },
  {
    id: 'support',
    label: 'Support',
    items: [
      {
        question: 'Is support available if I need help?',
        answer:
          'Yes. If you need help getting started or using Aria, you can reach out to the Aria team for assistance.',
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
