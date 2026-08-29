import { AnimatedBadge } from '@/components/ui/animated-badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { HeroDashboard } from './hero-dashboard';

const Hero = () => {
  return (
    <main className='relative z-10 overflow-hidden border-b'>
      <section className='relative bg-background'>
        {/* Hero content with container and border lines */}
        <div className='container relative mx-auto'>
          {/* Left and right border lines - continuation from navbar */}
          <div className='border-border border-dashed bg-background sm:border-x'>
            <div className='pt-24 pb-20 md:pt-32 lg:pt-40'>
              <div className='relative z-10 mx-auto grid max-w-5xl items-center gap-4 px-6 text-center'>
                <AnimatedBadge
                  text='Now in early access — WhatsApp-native CRM'
                  href='#'
                  className='justify-self-center'
                />
                <h1 className='text-balance font-semibold text-4xl sm:text-5xl lg:text-6xl'>
                  Run your whole pipeline from WhatsApp
                </h1>
                <div className='mx-auto max-w-2xl'>
                  <p className='mb-6 text-balance text-lg text-muted-foreground lg:text-xl'>
                    Aria turns the WhatsApp conversations your team is already
                    having into contacts, companies, and deals. Nothing to copy
                    into a spreadsheet. No lead stuck on someone’s personal
                    phone.
                  </p>
                  <div className='flex items-center justify-center gap-3'>
                    <Button asChild className='shadow-md'>
                      <Link href='https://crm.realityrift.co'>Start free</Link>
                    </Button>
                    <Button variant='outline' asChild className='shadow-sm'>
                      <Link href='/contact' prefetch={false}>
                        Book a demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product dashboard preview with background image */}
              <div className='relative pt-12 lg:pt-20'>
                <div className='relative mx-auto max-w-7xl px-1 md:px-0 lg:px-6'>
                  {/* Background image */}
                  <div
                    className='-inset-20 sm:-inset-28 lg:-inset-40 pointer-events-none absolute opacity-60'
                    style={{
                      maskImage: `
                        linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%),
                        linear-gradient(to bottom, transparent 0%, black 30%, black 100%)
                      `.trim(),
                      WebkitMaskImage: `
                        linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%),
                        linear-gradient(to bottom, transparent 0%, black 30%, black 100%)
                      `.trim(),
                      maskComposite: 'intersect',
                      WebkitMaskComposite: 'source-in',
                    }}
                  >
                    <Image
                      alt=''
                      aria-hidden='true'
                      priority
                      fetchPriority='high'
                      width={2000}
                      height={1333}
                      sizes='(max-width: 768px) 100vw, (max-width: 1280px) 1280px, 1600px'
                      className='size-full object-cover'
                      src='/images/dashboard-bg.jpg'
                    />
                  </div>

                  {/* Dashboard with bottom fade */}
                  <div
                    className='relative z-10'
                    style={{
                      maskImage:
                        'linear-gradient(to bottom, black 0%, black 92%, transparent 100%)',
                      WebkitMaskImage:
                        'linear-gradient(to bottom, black 0%, black 92%, transparent 100%)',
                    }}
                  >
                    <HeroDashboard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
