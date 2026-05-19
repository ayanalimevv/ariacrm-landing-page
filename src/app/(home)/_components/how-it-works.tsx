import { MessageSquare } from 'lucide-react';

import { cn } from '@/lib/utils';

type ItemTone = 'purple' | 'blue' | 'cyan';
type StatusTone = 'emerald' | 'blue' | 'violet';

type StepData = {
  title: string;
  status: string;
  statusTone: StatusTone;
  progressLabel: string;
  leftPct: number;
  rightPct: number;
  progressText: string;
  itemsLabel: string;
  items: { tone: ItemTone; text: string; meta: string }[];
  footerLeft: string;
  footerAction: string;
};

const stepsData: {
  stepTitle: string;
  description: string;
  mockup: StepData;
}[] = [
  {
    stepTitle: 'Capture feedback',
    description:
      'Drop the Stackr widget on any page. Users share ideas in five seconds — no signup required.',
    mockup: {
      title: 'Feedback widget',
      status: 'Live',
      statusTone: 'emerald',
      progressLabel: 'Conversion this week',
      leftPct: 30,
      rightPct: 50,
      progressText: '82% submitted',
      itemsLabel: 'Recent submissions',
      items: [
        { tone: 'purple', text: 'Sarah · Bulk CSV export', meta: '2m' },
        { tone: 'blue', text: 'Mike · Dark mode flicker', meta: '5m' },
        { tone: 'cyan', text: 'Anna · Sidebar nav redesign', meta: '8m' },
      ],
      footerLeft: '247 submissions today',
      footerAction: 'Configure',
    },
  },
  {
    stepTitle: 'Vote and prioritize',
    description:
      'Watch consensus emerge. Votes, threads, and tags surface what matters without you doing the herding.',
    mockup: {
      title: 'Top requests',
      status: 'Trending',
      statusTone: 'blue',
      progressLabel: 'Engagement this week',
      leftPct: 35,
      rightPct: 30,
      progressText: '1.2K / 2K votes',
      itemsLabel: 'Most voted',
      items: [
        { tone: 'purple', text: 'Bulk CSV export', meta: '247' },
        { tone: 'blue', text: 'Dark mode polish', meta: '124' },
        { tone: 'cyan', text: 'Sidebar redesign', meta: '89' },
      ],
      footerLeft: '47 ideas in backlog',
      footerAction: 'Sort',
    },
  },
  {
    stepTitle: 'Ship and notify',
    description:
      'Move ideas to release. Stackr pings everyone who asked the moment their feature ships.',
    mockup: {
      title: 'Release pipeline',
      status: 'Shipping',
      statusTone: 'violet',
      progressLabel: 'Rollout progress',
      leftPct: 40,
      rightPct: 45,
      progressText: '85% deployed',
      itemsLabel: 'Just shipped',
      items: [
        { tone: 'purple', text: 'CSV export · v2.4', meta: 'now' },
        { tone: 'blue', text: 'Dark mode · v2.3', meta: '2d' },
        { tone: 'cyan', text: 'Sidebar nav · v2.2', meta: '1w' },
      ],
      footerLeft: '247 customers notified',
      footerAction: 'View',
    },
  },
];

const STATUS_TONES: Record<StatusTone, string> = {
  emerald: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
  blue: 'bg-blue-500/10 text-blue-700 dark:text-blue-400',
  violet: 'bg-violet-500/10 text-violet-700 dark:text-violet-400',
};

const ITEM_TONES: Record<ItemTone, { bg: string; icon: string }> = {
  purple: {
    bg: 'bg-purple-500/10 ring-purple-500/20',
    icon: 'text-purple-600 dark:text-purple-400',
  },
  blue: {
    bg: 'bg-blue-500/10 ring-blue-500/20',
    icon: 'text-blue-600 dark:text-blue-400',
  },
  cyan: {
    bg: 'bg-cyan-500/10 ring-cyan-500/20',
    icon: 'text-cyan-600 dark:text-cyan-400',
  },
};

function StepMockup({ data }: { data: StepData }) {
  return (
    <div className='pt-1 pl-6 [mask-image:radial-gradient(100%_100%_at_top_left,black_75%,transparent)]'>
      <div className='rounded-2xl bg-background/75 p-2 shadow-black/5 shadow-lg ring-1 ring-border'>
        {/* Header */}
        <div className='flex items-center gap-2 px-4 py-3'>
          <div className='font-medium text-foreground text-sm'>
            {data.title}
          </div>
          <div
            className={cn(
              'ml-auto rounded-full px-2 py-0.5 text-xs',
              STATUS_TONES[data.statusTone],
            )}
          >
            {data.status}
          </div>
        </div>

        {/* Inner card */}
        <div className='rounded-xl bg-card p-4 ring-1 ring-border'>
          {/* Progress bar */}
          <div className='space-y-3'>
            <div className='text-muted-foreground text-xs'>
              {data.progressLabel}
            </div>
            <div className='relative h-3 overflow-hidden rounded-full bg-muted'>
              <div
                className='absolute inset-y-0 left-0 rounded-full bg-primary/40'
                style={{ width: `${data.leftPct}%` }}
              />
              <div
                className='absolute inset-y-0 rounded-full bg-primary'
                style={{ left: `${data.leftPct}%`, width: `${data.rightPct}%` }}
              />
              <div className='absolute inset-0 flex items-center justify-center font-medium text-[8px] text-white'>
                {data.progressText}
              </div>
            </div>
          </div>

          {/* Items */}
          <div className='mt-4 space-y-3'>
            <div className='text-muted-foreground text-xs'>
              {data.itemsLabel}
            </div>
            <div className='space-y-1.5'>
              {data.items.map((item) => (
                <div
                  key={item.text}
                  className={cn(
                    'flex items-center gap-2 rounded-lg p-2 ring-1',
                    ITEM_TONES[item.tone].bg,
                  )}
                >
                  <MessageSquare
                    className={cn(
                      'size-3.5 shrink-0',
                      ITEM_TONES[item.tone].icon,
                    )}
                  />
                  <div className='flex-1 truncate text-[10px] text-foreground'>
                    {item.text}
                  </div>
                  <span className='text-[10px] text-muted-foreground tabular-nums'>
                    {item.meta}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className='mt-3 flex items-center justify-between text-xs'>
            <div className='text-muted-foreground'>{data.footerLeft}</div>
            <button
              type='button'
              className='text-primary hover:underline'
            >
              {data.footerAction}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className='py-20 md:py-28'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Eyebrow */}
        <p className='font-mono text-[11px] text-muted-foreground uppercase tracking-[0.2em]'>
          How it works
        </p>

        {/* Side-by-side header */}
        <div className='mt-6 grid items-end gap-8 md:grid-cols-2 md:gap-12'>
          <h2 className='text-balance font-bold text-4xl text-foreground tracking-tight md:text-5xl'>
            From idea to shipped in days, not quarters
          </h2>
          <p className='max-w-md text-base text-muted-foreground leading-relaxed'>
            Three steps. No setup calls, no implementation team, no PRD. Just
            install, listen, and ship.
          </p>
        </div>

        {/* 3 step cards */}
        <div className='mt-14 grid gap-10 md:grid-cols-3 md:gap-8'>
          {stepsData.map((step, i) => (
            <div key={step.stepTitle} className='flex flex-col'>
              <StepMockup data={step.mockup} />
              <p className='mt-8 font-semibold text-foreground text-lg'>
                {i + 1}. {step.stepTitle}
              </p>
              <p className='mt-2 text-muted-foreground text-sm leading-relaxed'>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
