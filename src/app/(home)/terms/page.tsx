import { title as homeTitle } from '@/app/layout.config';
import { Section } from '@/components/section';
import { createMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import Link from 'next/link';

const LAST_UPDATED = 'March 2, 2025';

export default function TermsOfService() {
  return (
    <>
      <Section className='p-4 text-center lg:p-6'>
        <h1 className='mb-2 font-bold text-3xl leading-tight tracking-tighter md:text-4xl'>
          Terms of Service
        </h1>
        <p className='text-muted-foreground text-sm'>
          Last updated: {LAST_UPDATED}
        </p>
      </Section>
      <Section>
        <div className='grid divide-y divide-dashed divide-border'>
          {sections.map((section) => (
            <div key={section.title} className='group p-6 transition-all'>
              <h2 className='mb-4 font-semibold text-xl tracking-tight'>
                {section.title}
              </h2>
              <div className='prose prose-sm prose-zinc dark:prose-invert max-w-none'>
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

const sections = [
  {
    title: 'Overview',
    content: (
      <p>
        Folio is an AI workflow automation platform that helps businesses connect their tools,
        automate processes, and leverage AI to handle repetitive work.
        By using our platform, you agree to these terms.
      </p>
    ),
  },
  {
    title: 'Service Description',
    content: (
      <div className='space-y-8'>
        <div>
          <h3 className='mb-3 font-medium text-card-foreground text-xl'>
            Workflow Automation Services
          </h3>
          <ul className='ml-4 list-disc space-y-2'>
            <li>
              Our platform provides a visual workflow builder, AI-powered automation steps,
              and integrations with 100+ popular apps and services.
            </li>
            <li>
              We offer features including multi-model AI support, real-time execution monitoring,
              and team collaboration tools.
            </li>
            <li>
              Workflow executions are billed on a usage-based model with
              guaranteed uptime SLAs.
            </li>
          </ul>
        </div>
        <div>
          <h3 className='mb-3 font-medium text-card-foreground text-xl'>
            API and Integrations
          </h3>
          <ul className='ml-4 list-disc space-y-2'>
            <li>
              Our platform provides APIs and webhooks for programmatic access
              to workflow triggers and actions.
            </li>
            <li>
              Users must comply with rate limits and fair usage policies for API access.
            </li>
            <li>
              Third-party integrations are subject to their respective terms of service.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'User Responsibilities',
    content: (
      <div className='mt-4 space-y-3 text-muted-foreground'>
        <p>By using our platform, you agree to:</p>
        <ul className='ml-4 list-disc space-y-2'>
          <li>Comply with all applicable laws and regulations.</li>
          <li>Maintain the security of your API keys and connected app credentials.</li>
          <li>Use automations responsibly and ethically.</li>
          <li>Not use the platform for harmful, deceptive, or malicious purposes.</li>
          <li>Report any security vulnerabilities or misuse promptly.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Usage Terms',
    content: (
      <div className='mt-4 space-y-3 text-muted-foreground'>
        <p>Our usage terms include:</p>
        <ul className='ml-4 list-disc space-y-2'>
          <li>Fair usage policies for workflow executions and API calls.</li>
          <li>99.9% uptime SLA for production workflows.</li>
          <li>Execution history retention based on your plan.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Data Policies',
    content: (
      <div className='mt-4 space-y-3 text-muted-foreground'>
        <p>Our data handling policies ensure:</p>
        <ul className='ml-4 list-disc space-y-2'>
          <li>Secure processing and storage of workflow data and execution logs.</li>
          <li>Compliance with GDPR, CCPA, and other data protection regulations.</li>
          <li>Data isolation between customers for all workflows.</li>
          <li>Clear data retention and deletion policies.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Contact Information',
    content: (
      <div className='mt-4 space-y-3 text-muted-foreground'>
        <p>
          For any questions or concerns regarding these terms, please reach out
          to our team:
        </p>
        <div className='flex flex-col space-y-2'>
          <Link
            href='/contact'
            className='inline-flex items-center text-fd-primary underline duration-300 hover:text-fd-primary/70'
          >
            Contact Support
          </Link>
        </div>
      </div>
    ),
  },
];

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const description = `Terms of service for ${homeTitle}. Last updated on ${LAST_UPDATED}.`;

  return createMetadata({
    title: 'Terms of Service',
    description,
    openGraph: {
      url: '/terms',
    },
    alternates: {
      canonical: '/terms',
    },
  });
}
