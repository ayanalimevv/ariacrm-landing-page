import type { ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Testimonial data
const testimonials = [
  {
    quote: 'We automated our entire customer onboarding flow in an afternoon. What took our team hours now happens instantly.',
    author: {
      name: 'Sarah Chen',
      role: 'Head of Operations',
      image: 'https://github.com/haydenbleasel.png',
    },
  },
  {
    quote: 'Our sales team saves 15+ hours per week. Lead enrichment, CRM updates, follow-up emails - all automated.',
    author: {
      name: 'Marcus Rodriguez',
      role: 'Sales Director',
      image: 'https://github.com/leerob.png',
    },
  },
  {
    quote: 'Built our first workflow in 30 minutes. No code, just drag-and-drop. The AI steps are incredibly powerful.',
    author: {
      name: 'Alex Kim',
      role: 'CTO',
      image: 'https://github.com/shadcn.png',
    },
  },
  {
    quote: 'The AI understands context perfectly. Our support ticket routing is now 95% accurate without any manual rules.',
    author: {
      name: 'Emily Watson',
      role: 'Support Lead',
      image: 'https://github.com/pontusab.png',
    },
  },
  {
    quote: 'Connected all our tools in one place. Slack, Notion, Salesforce - data flows automatically between everything.',
    author: {
      name: 'David Park',
      role: 'Engineering Manager',
      image: 'https://github.com/shuding.png',
    },
  },
  {
    quote: 'Real-time analytics show exactly where workflows succeed or fail. We optimize continuously based on actual data.',
    author: {
      name: 'Rachel Torres',
      role: 'Data Analyst',
      image: 'https://github.com/rauchg.png',
    },
  },
];

// Featured testimonials with company logos
const featuredTestimonials = [
  {
    quote: 'Vertex replaced 5 different automation tools for us. One platform handles everything from data sync to AI-powered document processing.',
    author: {
      name: 'Adam Wathan',
      role: 'Creator',
      image: 'https://github.com/adamwathan.png',
    },
    company: 'Tailwind CSS',
    logo: TailwindLogo,
  },
  {
    quote: 'We automated content workflows that used to require a dedicated team. AI generates, reviews, and schedules - all hands-free.',
    author: {
      name: 'Jennifer Lee',
      role: 'VP of Engineering',
      image: 'https://github.com/jenniferlee.png',
    },
    company: 'Hulu',
    logo: HuluLogo,
  },
  {
    quote: 'Enterprise-grade security was non-negotiable for us. Vertex gave us full control over data flow and met all our compliance requirements.',
    author: {
      name: 'Patrick Collison',
      role: 'CEO',
      image: 'https://github.com/pc.png',
    },
    company: 'Stripe',
    logo: StripeLogo,
  },
];

// Company Logo Components
function TailwindLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 248 31" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zM106.975 4.318c0 1.392-1.15 2.499-2.587 2.499-1.437 0-2.588-1.107-2.588-2.499 0-1.391 1.151-2.499 2.588-2.499 1.437 0 2.587 1.108 2.587 2.499zm-4.526 4.794h3.879v17.849h-3.879V9.112zM115.441 27.461c0-.357-.143-.571-.428-.571-.215 0-.536.071-.893.214l-.5-1.821c.536-.214 1.143-.357 1.75-.357.964 0 1.643.357 1.964.964 1.322-.857 2.823-1.178 4.573-1.178v3.713c-2.573 0-4.787.536-6.466 1.964v-2.928zm8.332-18.349h3.879v17.849h-3.879V9.112zM148.216 9.112h3.879l-6.109 17.849h-3.664l-3.591-12.138-3.592 12.138h-3.664l-6.108-17.849h3.878l4.094 12.495 3.592-12.495h3.592l3.592 12.495 4.101-12.495zM160.181 4.318c0 1.392-1.151 2.499-2.588 2.499-1.436 0-2.587-1.107-2.587-2.499 0-1.391 1.151-2.499 2.587-2.499 1.437 0 2.588 1.108 2.588 2.499zm-4.526 4.794h3.878v17.849h-3.878V9.112zM173.455 8.648c4.92 0 8.942 4.07 8.942 9.388 0 5.284-4.022 9.389-8.942 9.389s-8.942-4.105-8.942-9.389c0-5.318 4.022-9.388 8.942-9.388zm0 3.677c-3.232 0-5.674 2.392-5.674 5.711 0 3.32 2.442 5.712 5.674 5.712 3.233 0 5.675-2.392 5.675-5.712 0-3.32-2.442-5.711-5.675-5.711zM193.065 8.648c4.884 0 8.942 4.07 8.942 9.388 0 5.284-4.058 9.389-8.942 9.389-2.801 0-4.92-1.143-6.285-3.034v2.57h-3.879V.926h3.879v10.756c1.365-1.857 3.484-3.034 6.285-3.034zm-.61 3.677c-3.233 0-5.675 2.392-5.675 5.711 0 3.32 2.442 5.712 5.675 5.712 3.232 0 5.674-2.392 5.674-5.712 0-3.32-2.442-5.711-5.674-5.711zM210.893 8.648c4.884 0 8.942 4.07 8.942 9.388 0 5.284-4.058 9.389-8.942 9.389-2.801 0-4.92-1.143-6.285-3.034v2.57h-3.878V.926h3.878v10.756c1.365-1.857 3.484-3.034 6.285-3.034zm-.611 3.677c-3.232 0-5.674 2.392-5.674 5.711 0 3.32 2.442 5.712 5.674 5.712 3.233 0 5.675-2.392 5.675-5.712 0-3.32-2.442-5.711-5.675-5.711zM233.68 19.286l5.067-10.174h4.166l-7.723 14.457 4.166 7.749h-4.166l-3.51-6.535-3.52 6.535h-4.165l4.165-7.749-7.722-14.457h4.165l5.077 10.174z"
      />
    </svg>
  );
}

function HuluLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 22" fill="currentColor">
      <path d="M55.7 0h-4.1c-.3 0-.6.3-.6.6v8.5c0 .5-.4.9-.9.9h-3.3c-.5 0-.9-.4-.9-.9V.6c0-.3-.3-.6-.6-.6h-4.1c-.3 0-.6.3-.6.6v9.1c0 3.2 2.6 5.8 5.8 5.8h3.6c3.2 0 5.8-2.6 5.8-5.8V.6c0-.3-.3-.6-.6-.6h-.5zm-19.8 5.5h-3.6c-3.2 0-5.8 2.6-5.8 5.8v9.1c0 .3.3.6.6.6h4.1c.3 0 .6-.3.6-.6v-8.5c0-.5.4-.9.9-.9h3.3c.5 0 .9.4.9.9v8.5c0 .3.3.6.6.6h4.1c.3 0 .6-.3.6-.6v-9.1c0-3.2-2.6-5.8-5.8-5.8h-.5zM4.3 0H.6c-.3 0-.6.3-.6.6v20.8c0 .3.3.6.6.6h4.1c.3 0 .6-.3.6-.6v-8.5c0-.5.4-.9.9-.9h3.3c.5 0 .9.4.9.9v8.5c0 .3.3.6.6.6h4.1c.3 0 .6-.3.6-.6V6.1c0-.3-.3-.6-.6-.6h-4.1c-.3 0-.6.3-.6.6v2.4c0 .5-.4.9-.9.9H6.2c-.5 0-.9-.4-.9-.9V.6c0-.3-.3-.6-.6-.6H4.3zm20.8 5.5h-4.6c-.3 0-.6.3-.6.6v14.3c0 .3.3.6.6.6h4.6c.3 0 .6-.3.6-.6V6.1c0-.3-.3-.6-.6-.6z" />
    </svg>
  );
}

function StripeLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 25" fill="currentColor">
      <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a10.3 10.3 0 01-4.56.98c-4.01 0-6.83-2.5-6.83-7.28 0-4.19 2.39-7.36 6.42-7.36 4.04 0 5.97 3.02 5.97 7.28 0 .52-.05 1.06-.19 1.46zm-5.79-5.58c-1.2 0-2.06.93-2.21 2.53h4.26c-.1-1.54-.73-2.53-2.05-2.53zM41.39 20V6.09h4.09l.23 1.47c.87-1.13 2.17-1.78 3.69-1.78v4.12c-1.9-.16-3.34.35-3.92 1.03V20h-4.09zM29.3 20V6.09h4.09V20H29.3zm2.05-15.55c-1.28 0-2.31-1.03-2.31-2.23S30.07 0 31.35 0s2.31 1.02 2.31 2.22-1.03 2.23-2.31 2.23zM24.05 10.2c0-1.03-.82-1.6-2.09-1.6-1.11 0-2.38.36-3.46.9V5.81c1.13-.47 2.52-.77 4.11-.77 3.26 0 5.44 1.47 5.44 4.48v10.5h-3.94l-.22-1.24c-.89 1-2.17 1.55-3.59 1.55-2.38 0-4.12-1.53-4.12-4.04 0-2.65 1.93-4.26 5.68-4.71l2.19-.23v-.15zm0 3.13l-1.43.16c-1.34.15-2.06.63-2.06 1.55 0 .78.55 1.27 1.48 1.27.88 0 1.63-.46 2.01-1.09v-1.89zM8.06 6.31c1.52 0 2.74.6 3.59 1.63l.24-1.32h3.94V20h-3.94l-.23-1.24c-.89 1-2.17 1.55-3.6 1.55-3.44 0-5.81-2.81-5.81-7.04 0-4.22 2.39-6.96 5.81-6.96zm1.03 10.52c1.21 0 2.01-.6 2.56-1.28V10.1c-.51-.67-1.34-1.24-2.56-1.24-1.72 0-2.85 1.37-2.85 3.96 0 2.6 1.13 4.01 2.85 4.01zM0 3.79C0 1.7 1.62 0 3.58 0h52.84C58.38 0 60 1.7 60 3.79v17.42c0 2.1-1.62 3.79-3.58 3.79H3.58C1.62 25 0 23.3 0 21.21V3.79z" />
    </svg>
  );
}

// Testimonial Card Component
function TestimonialCard({
  quote,
  author,
}: {
  quote: string;
  author: { name: string; role: string; image: string };
}) {
  return (
    <div className="flex flex-col justify-between p-6 sm:p-8 h-full">
      <blockquote className="text-sm sm:text-base text-foreground leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center gap-3">
        <Avatar className="h-10 w-10 border border-border">
          <AvatarImage src={author.image} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium text-foreground">{author.name}</p>
          <p className="text-xs text-muted-foreground">{author.role}</p>
        </div>
      </div>
    </div>
  );
}

// Featured Testimonial Card Component
function FeaturedTestimonialCard({
  quote,
  author,
  company,
  Logo,
}: {
  quote: string;
  author: { name: string; role: string; image: string };
  company: string;
  Logo: ({ className }: { className?: string }) => ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between p-6 sm:p-8 h-full bg-muted/30">
      <div>
        <Logo className="h-6 text-foreground mb-6" />
        <blockquote className="text-sm sm:text-base text-foreground leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <Avatar className="h-10 w-10 border border-border">
          <AvatarImage src={author.image} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium text-foreground">{author.name}</p>
          <p className="text-xs text-muted-foreground">
            {author.role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}

const Testimonials = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      {/* Top border */}
      <div className="border-t border-dashed border-border" />

      <div>
        {/* Header */}
        <div className="border-b border-dashed border-border px-6 pb-8 md:px-12 md:pb-12 pt-16">
          <h2 className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl text-foreground">
            Teams are automating{' '}
            <span className="text-muted-foreground">
              smarter with Vertex.
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Thousands of companies trust Vertex to automate their workflows,
            connect their tools, and let AI handle the repetitive work.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {/* Regular Testimonials */}
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-background"
            >
              <TestimonialCard quote={testimonial.quote} author={testimonial.author} />
            </div>
          ))}

          {/* Featured Testimonials and Remaining Cards */}
          {featuredTestimonials.map((featured, index) => (
            <div
              key={`featured-${index}`}
              className={`bg-background ${index === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : 'lg:row-span-2'}`}
            >
              <FeaturedTestimonialCard
                quote={featured.quote}
                author={featured.author}
                company={featured.company}
                Logo={featured.logo}
              />
            </div>
          ))}

          {/* More Regular Testimonials */}
          {testimonials.slice(3).map((testimonial, index) => (
            <div
              key={index + 3}
              className="bg-background"
            >
              <TestimonialCard quote={testimonial.quote} author={testimonial.author} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
