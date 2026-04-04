import { InlineLink } from '@/components/inline-link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    category: 'General',
    items: [
      {
        question: 'What is Vertex?',
        answer:
          'Vertex is an AI workflow automation platform. Connect your tools, design intelligent workflows, and let AI handle repetitive tasks - from data processing to customer communications.',
      },
      {
        question: 'Do I need coding skills to use Vertex?',
        answer:
          'No coding required. Our visual workflow builder lets anyone create powerful automations with drag-and-drop. For advanced use cases, developers can extend workflows with custom code.',
      },
      {
        question: 'How does pricing work?',
        answer:
          'We charge based on workflow executions. Start free with 100 executions/month, then upgrade as you scale. All plans include access to our core integrations and AI models.',
      },
    ],
  },
  {
    category: 'Features & Integrations',
    items: [
      {
        question: 'Which AI models can I use?',
        answer:
          'Vertex supports all major AI models including OpenAI GPT-4, Anthropic Claude, Google Gemini, Mistral, and more. Use the best model for each step in your workflow.',
      },
      {
        question: 'What apps can I connect?',
        answer:
          'We offer 100+ native integrations including Slack, Notion, Salesforce, HubSpot, Google Workspace, GitHub, Jira, Stripe, and more. Custom integrations available via webhooks and API.',
      },
      {
        question: 'Is my data secure?',
        answer:
          'Yes. We implement enterprise-grade security with SOC 2 compliance, end-to-end encryption, and comprehensive audit logs. Your data never leaves your control.',
      },
    ],
  },
];

export const FAQ = () => (
  <section className="flex flex-col">
    {/* Top border */}
    <div className="border-t border-dashed border-border" />

    <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-dashed divide-border">
      {/* Left Column - Header */}
      <div className="md:col-span-2 p-6 md:p-12 flex flex-col gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">
          FAQs
        </h2>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          Everything you need to know about workflow automation with Vertex. Can&apos;t find your answer? Our team is here to help.
        </p>
        <div className="mt-2">
          <InlineLink
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Customer Support
          </InlineLink>
        </div>
      </div>

      {/* Right Column - Accordions */}
      <div className="md:col-span-3 flex flex-col">
        {faqData.map((category, categoryIndex) => (
          <div key={category.category} className="flex flex-col">
            {/* Category Header */}
            <div
              className={`px-6 md:px-8 py-4 bg-muted/30 ${
                categoryIndex > 0 ? 'border-t border-dashed border-border' : ''
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {category.category}
              </span>
            </div>

            {/* Category Items */}
            <Accordion
              type="single"
              collapsible
              className="w-full divide-y divide-dashed divide-border"
            >
              {category.items.map((item, index) => (
                <AccordionItem
                  key={`${category.category}-${index}`}
                  value={`${category.category}-${index}`}
                  className="border-b-0"
                >
                  <AccordionTrigger className="px-6 md:px-8 py-4 hover:bg-card hover:no-underline data-[state=open]:bg-card text-left text-sm md:text-base font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 md:px-8 pb-4 text-sm text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom border */}
    <div className="border-t border-dashed border-border" />
  </section>
);
