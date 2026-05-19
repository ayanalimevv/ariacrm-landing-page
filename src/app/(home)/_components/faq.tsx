'use client';

import { LifeBuoy, Palette, Sparkles } from 'lucide-react';
import Link from 'next/link';
import type { ComponentType } from 'react';
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
  icon: ComponentType<{ className?: string }>;
  items: FAQItem[];
};

const faqGroups: FAQGroup[] = [
  {
    id: 'general',
    label: 'General',
    icon: Sparkles,
    items: [
      {
        question: 'What is Ruixen UI?',
        answer:
          'Ruixen UI is a modern, fully responsive design system that provides pre-built components, utilities, and layouts to help developers build scalable web applications quickly and efficiently.',
      },
      {
        question: 'Which platforms does Ruixen UI support?',
        answer:
          'Ruixen UI is built for web applications and works seamlessly with React, Next.js, and other modern JavaScript frameworks. It also supports dark mode and responsive layouts out of the box.',
      },
      {
        question: 'Is Ruixen UI free to use?',
        answer:
          'Ruixen UI is open and free to use in personal and commercial projects. Premium blocks and templates are available for teams that want a faster head start.',
      },
      {
        question: 'How do I get started?',
        answer:
          'Install the package, copy the components you need into your project, and start composing. Our quickstart guide walks you through setup with React, Next.js, and Tailwind CSS in minutes.',
      },
    ],
  },
  {
    id: 'customization',
    label: 'Customization',
    icon: Palette,
    items: [
      {
        question: 'Can I customize Ruixen UI components?',
        answer:
          'Yes — every component is fully customizable via props, CSS classes, and theme tokens. You can adapt colors, spacing, typography, and layout to match your brand without forking the source.',
      },
      {
        question: 'Does Ruixen UI support dark mode and theming?',
        answer:
          'Dark mode is supported out of the box, and our theme tokens make it easy to define light, dark, or fully bespoke palettes that flow through every component automatically.',
      },
      {
        question: 'Are Ruixen UI components accessible?',
        answer:
          'Components ship with sensible ARIA attributes, keyboard interactions, and focus management built-in, so accessibility is the default rather than an afterthought.',
      },
    ],
  },
  {
    id: 'support',
    label: 'Support',
    icon: LifeBuoy,
    items: [
      {
        question: 'Is there documentation and support available?',
        answer:
          'Yes — Ruixen UI ships with comprehensive documentation, live examples, and tutorials. Our community and support channels are also available to help you implement components and resolve issues.',
      },
      {
        question: 'Does Ruixen UI integrate with third-party tools?',
        answer:
          'Absolutely. Ruixen UI includes ready-to-use integrations and patterns for popular tools and services, making it easier to wire up analytics, authentication, and workflow platforms.',
      },
      {
        question: 'How can I report bugs or request features?',
        answer:
          'You can open an issue on our GitHub repository or reach out to our support team directly. We triage bugs quickly and welcome thoughtful feature requests from the community.',
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
            Everything you need to know about Ruixen UI. Can&apos;t find what
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
            className='sticky top-0 z-10 h-fit max-md:flex max-md:justify-center max-md:bg-foreground/2 max-md:p-2 max-md:backdrop-blur md:-mt-3 md:top-12 md:col-span-2 md:block'
          >
            {faqGroups.map((group) => {
              const Icon = group.icon;
              const isActive = activeId === group.id;
              return (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  data-state={isActive ? 'active' : 'inactive'}
                  className='group text-muted-foreground max-md:px-1 md:block md:py-1'
                  onClick={() => setActiveId(group.id)}
                >
                  <span
                    className={cn(
                      '@max-xs:px-4 flex w-fit items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors [&>svg]:size-4',
                      isActive
                        ? 'bg-card font-medium text-primary shadow-sm ring-1 ring-foreground/5'
                        : 'group-hover:bg-foreground/5 hover:text-foreground',
                    )}
                  >
                    <Icon />
                    <span className='@max-xs:in-data-[state=inactive]:hidden'>
                      {group.label}
                    </span>
                  </span>
                </a>
              );
            })}
          </nav>

          <div className='space-y-12 max-md:mt-6 md:col-span-3'>
            {faqGroups.map((group) => (
              <div
                key={group.id}
                id={group.id}
                data-faq-group={group.id}
                className='space-y-4 scroll-mt-20'
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
                      className='peer rounded-xl border-none px-6 py-1 data-[state=open]:border-none data-[state=open]:bg-card data-[state=open]:shadow-sm data-[state=open]:shadow-black/[0.065] data-[state=open]:ring-1 data-[state=open]:ring-border'
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
