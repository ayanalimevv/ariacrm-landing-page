import { ArrowUpRight, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ComponentType, SVGProps } from 'react';
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

type IconComponent = ComponentType<
  SVGProps<SVGSVGElement> & { className?: string }
>;

type FooterLinkItem = {
  label: string;
  href: string;
  external?: boolean;
  badge?: string;
};

type FooterSection = {
  title: string;
  links: FooterLinkItem[];
};

// Each top-level array is a column; each column may stack multiple sections.
const footerColumns: FooterSection[][] = [
  [
    {
      title: 'Platform',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Changelog', href: '#', badge: 'New' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Integrations', href: '#' },
        { label: 'API', href: '#', external: true },
        { label: 'Slack app', href: '#', external: true },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Blog', href: '#', badge: 'New' },
        { label: 'Careers', href: '#' },
        { label: 'Customers', href: '#' },
        { label: 'Press kit', href: '#' },
        { label: 'Become a partner', href: '#' },
      ],
    },
  ],
  [
    {
      title: 'Connect to',
      links: [
        { label: 'Postgres', href: '#' },
        { label: 'MySQL', href: '#' },
        { label: 'Snowflake', href: '#' },
        { label: 'BigQuery', href: '#' },
        { label: 'Redshift', href: '#' },
        { label: 'Databricks', href: '#' },
        { label: 'CSV upload', href: '#' },
      ],
    },
    {
      title: 'Folio for',
      links: [
        { label: 'Data teams', href: '#' },
        { label: 'Product teams', href: '#' },
        { label: 'Engineering', href: '#' },
        { label: 'Founders', href: '#' },
      ],
    },
  ],
  [
    {
      title: 'Integrations',
      links: [
        { label: 'Slack', href: '#' },
        { label: 'Notion', href: '#' },
        { label: 'GitHub', href: '#' },
        { label: 'Linear', href: '#' },
        { label: 'Jira', href: '#' },
        { label: 'dbt', href: '#' },
        { label: 'Cube', href: '#' },
        { label: 'Zapier', href: '#' },
        { label: 'Webhooks', href: '#' },
        { label: 'Microsoft Teams', href: '#' },
      ],
    },
  ],
  [
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'Help center', href: '#' },
        { label: 'API reference', href: '#', external: true },
        { label: 'System status', href: '#', external: true },
        { label: 'Tutorials', href: '#' },
        { label: 'Query templates', href: '#', badge: 'New' },
        { label: 'Community', href: '#' },
      ],
    },
    {
      title: 'Compare',
      links: [
        { label: 'vs Tableau', href: '#' },
        { label: 'vs Looker', href: '#' },
        { label: 'vs Metabase', href: '#' },
        { label: 'vs Mode', href: '#' },
        { label: 'vs Hex', href: '#' },
        { label: 'vs Sigma', href: '#' },
        { label: 'vs Power BI', href: '#' },
      ],
    },
  ],
];

const socials: { Icon: IconComponent; label: string; href: string }[] = [
  { Icon: SiFacebook as IconComponent, label: 'Facebook', href: '#' },
  { Icon: SiInstagram as IconComponent, label: 'Instagram', href: '#' },
  { Icon: SiX as IconComponent, label: 'X', href: '#' },
  { Icon: SiLinkedin as IconComponent, label: 'LinkedIn', href: '#' },
];

function FooterRow({ link }: { link: FooterLinkItem }) {
  const inner = (
    <span className='inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground'>
      <span>{link.label}</span>
      {link.external && (
        <ArrowUpRight className='size-3.5 shrink-0 opacity-70' />
      )}
      {link.badge && (
        <span className='inline-flex items-center rounded-full bg-blue-500 px-1.5 py-px font-medium text-[10px] text-white leading-none'>
          {link.badge}
        </span>
      )}
    </span>
  );

  if (link.external) {
    return (
      <a href={link.href} target='_blank' rel='noopener noreferrer'>
        {inner}
      </a>
    );
  }
  return <Link href={link.href}>{inner}</Link>;
}

function FooterColumn({ section }: { section: FooterSection }) {
  return (
    <div>
      <h4 className='font-semibold text-foreground text-sm'>{section.title}</h4>
      <ul className='mt-5 space-y-3'>
        {section.links.map((l) => (
          <li key={l.label}>
            <FooterRow link={l} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className='relative mt-12 overflow-hidden bg-background'>
      {/* Backdrop — dashboard-bg image with subtle theme overlay */}
      <div aria-hidden className='pointer-events-none absolute inset-0'>
        <Image
          src='/images/dashboard-bg.jpg'
          alt=''
          fill
          sizes='100vw'
          className='object-cover'
        />
        <div className='absolute inset-0 bg-background/30 dark:bg-background/70' />
      </div>

      {/* CTA */}
      <div className='relative px-6 pt-24 pb-32 text-center md:pt-32 md:pb-40 lg:px-8'>
        <h2 className='mx-auto max-w-3xl text-balance font-bold text-5xl text-foreground tracking-tight md:text-6xl lg:text-7xl'>
          Stop waiting on the data team.
        </h2>
        <p className='mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground md:text-lg'>
          Connect your warehouse, ask in plain English, and ship the chart
          before the meeting ends.
        </p>
        <Button
          size='lg'
          className='mt-8 rounded-full px-6 py-5 font-medium text-sm'
        >
          Try Folio Free
        </Button>
      </div>

      {/* Footer card */}
      <div className='relative px-6 pb-3 md:pb-6 lg:px-8'>
        <div className='mx-auto max-w-7xl rounded-3xl border border-border bg-card p-8 shadow-sm md:p-12'>
          <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 md:grid-cols-12 md:gap-x-12'>
            {/* Brand */}
            <div className='sm:col-span-2 md:col-span-4'>
              <div className='flex items-center gap-2'>
                <Logo className='size-9' />
                <span className='font-bold text-foreground text-xl'>Folio</span>
              </div>
              <p className='mt-5 max-w-xs text-muted-foreground text-sm leading-relaxed'>
                Folio is the AI-powered workspace that helps teams query
                databases, visualize data, and make faster decisions — all in
                one place.
              </p>
              <a
                href='mailto:hello@folio.app'
                className='mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 font-medium text-foreground text-xs shadow-sm transition-shadow hover:shadow'
              >
                <Mail className='size-3.5 text-muted-foreground' />
                hello@folio.app
              </a>
              <div className='mt-6 flex gap-2'>
                {socials.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={cn(
                      'flex size-9 items-center justify-center rounded-lg border border-border bg-background text-foreground/70 shadow-sm transition-colors',
                      'hover:text-foreground',
                    )}
                  >
                    <Icon className='size-4' />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns — each may stack multiple sections */}
            {footerColumns.map((sections, colIdx) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: columns are stable in DOM order
                key={colIdx}
                className='space-y-10 md:col-span-2'
              >
                {sections.map((section) => (
                  <FooterColumn key={section.title} section={section} />
                ))}
              </div>
            ))}
          </div>

          <Separator className='my-8' />

          <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
            <span className='text-muted-foreground text-sm'>
              © {new Date().getFullYear()} Folio. All rights reserved.
            </span>
            <div className='flex gap-6 text-sm'>
              <Link
                href='/terms'
                className='text-muted-foreground transition-colors hover:text-foreground'
              >
                Terms &amp; Conditions
              </Link>
              <Link
                href='/privacy'
                className='text-muted-foreground transition-colors hover:text-foreground'
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
