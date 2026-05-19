import {
  type Testimonial,
  TestimonialCard,
} from '@/components/ui/testimonial-card';

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    designation: 'Product Manager · Vercel',
    title: 'Cut our triage time in half',
    content:
      'We used to bounce between Notion, email, and three different Slack channels just to triage feedback. Switching to Basebox cut our triage time roughly in half — and the roadmap auto-syncs back to the customers who asked. That last bit alone is what sold the team.',
  },
  {
    name: 'Marcus Webb',
    designation: 'Founder · Resona',
    title: 'Customers actually fill it out',
    content:
      "Our old feedback form had a 0.6% response rate. Basebox's guest mode plus the inline widget pushed us to 14% in a week. Turns out users will tell you exactly what they want — if you don't make them log in first.",
  },
  {
    name: 'Priya Anand',
    designation: 'Head of Engineering · Hatch',
    title: 'The changelog writes itself',
    content:
      'I keep checking if our changelog is real because it just… keeps getting written. We ship feedback as resolved and the public note appears in the right tone, with a link to the original request. My PMs got an afternoon of their week back.',
  },
  {
    name: 'Diego Ramirez',
    designation: 'Designer · Northbeam',
    title: 'Beautiful enough that I show it off',
    content:
      "Most feedback tools look like they were designed in 2014. Basebox is the first one I've actually screenshotted and posted. The accordion micro-animation alone is worth the price of admission.",
  },
  {
    name: 'Aisha Khalid',
    designation: 'Customer Success Lead · Lattice',
    title: 'No more shouting users',
    content:
      'Voting surfaces what the quiet majority wants, not just whoever is loudest in the support channel. We shipped two requests last quarter that had over 200 votes and basically zero direct messages — they would have been invisible to us before.',
  },
  {
    name: 'Tom Vasquez',
    designation: 'CTO · Ledgerline',
    title: 'Replaced four tools',
    content:
      'We dropped Canny, Productboard, a Notion roadmap, and a custom email-forwarding script. All four. Onboarding the team took about an hour and nobody has asked for the old setup back, which says everything.',
  },
];

export default function Testimonials() {
  return (
    <section className='py-20 md:py-28'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='grid items-end gap-8 md:grid-cols-2 md:gap-12'>
          <h2 className='text-balance font-bold text-4xl text-foreground tracking-tight md:text-5xl'>
            Loved by teams that ship fast
          </h2>
          <p className='max-w-md text-base text-muted-foreground leading-relaxed'>
            From scrappy two-person teams to engineering orgs of 200,
            here&apos;s what people say after they switch.
          </p>
        </div>

        <div className='mt-14 columns-1 gap-6 md:columns-2 lg:columns-3'>
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
