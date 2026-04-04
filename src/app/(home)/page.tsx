import Hero from '@/app/(home)/_components/hero';
import LogoCloud from '@/app/(home)/_components/logo-cloud';
import CTA from './_components/cta';
import { FAQ } from './_components/faq';
import Features from './_components/features';
import Pricing from './_components/pricing';
import Services from './_components/services';
import Testimonials from './_components/testimonials';

export default function Home() {
  return (
    <div className="container mx-auto">
      {/* Outer border - continuous dashed line */}
      <div className="border-x border-dashed border-border">
        {/* Inner border with gap - continuous dashed line */}
        <div className="mx-3 sm:mx-4 lg:mx-6 border-x border-dashed border-border">

          {/* Hero Section */}
          <div className="relative w-full z-20 bg-background pt-24 md:pt-32">
            <Hero />
          </div>

          {/* Logo Cloud */}
          <LogoCloud />

          {/* Features */}
          <section id="features" className="scroll-mt-20">
            <Features />
          </section>

          {/* Services */}
          <Services />

          {/* Testimonials */}
          <section id="testimonials" className="scroll-mt-20">
            <Testimonials />
          </section>

          {/* Pricing */}
          <section id="pricing" className="scroll-mt-20">
            <Pricing />
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-20">
            <FAQ />
          </section>

          {/* CTA */}
          <CTA />

        </div>
      </div>
    </div>
  );
}
