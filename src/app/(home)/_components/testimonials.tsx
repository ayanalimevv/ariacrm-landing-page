'use client';

import { useRef, useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icons } from '@/components/icons/icons';

type TestimonialType = 'video' | 'text' | 'featured';

interface Testimonial {
  type: TestimonialType;
  video?: string;
  quote: string;
  author: {
    name: string;
    role: string;
    company: string;
    image: string;
  };
}

const testimonials: Testimonial[] = [
  {
    type: 'video',
    video: '/videos/testimonial-01.mp4',
    quote: 'We automated our entire customer onboarding flow in an afternoon. What took our team hours now happens instantly.',
    author: {
      name: 'Sarah Chen',
      role: 'Head of Operations',
      company: 'Acme Inc',
      image: 'https://github.com/haydenbleasel.png',
    },
  },
  {
    type: 'text',
    quote: 'The AI understands context perfectly. Our support ticket routing is now 95% accurate without any manual rules.',
    author: {
      name: 'Emily Watson',
      role: 'Support Lead',
      company: 'HelpDesk Pro',
      image: 'https://github.com/pontusab.png',
    },
  },
  {
    type: 'featured',
    quote: 'Vertex replaced 5 different automation tools for us. One platform handles everything from data sync to AI-powered document processing.',
    author: {
      name: 'Michael Foster',
      role: 'VP of Engineering',
      company: 'Dropbox',
      image: 'https://github.com/rauchg.png',
    },
  },
  {
    type: 'text',
    quote: 'Connected all our tools in one place. Slack, Notion, Salesforce - data flows automatically between everything.',
    author: {
      name: 'David Park',
      role: 'Engineering Manager',
      company: 'CloudScale',
      image: 'https://github.com/shuding.png',
    },
  },
  {
    type: 'video',
    video: '/videos/testimonial-02.mp4',
    quote: 'Our sales team saves 15+ hours per week. Lead enrichment, CRM updates, follow-up emails - all automated.',
    author: {
      name: 'Marcus Rodriguez',
      role: 'Sales Director',
      company: 'TechFlow',
      image: 'https://github.com/leerob.png',
    },
  },
  {
    type: 'text',
    quote: 'Real-time analytics show exactly where workflows succeed or fail. We optimize continuously based on actual data.',
    author: {
      name: 'Rachel Torres',
      role: 'Data Analyst',
      company: 'DataFlow',
      image: 'https://github.com/shadcn.png',
    },
  },
  {
    type: 'text',
    quote: 'Implementation took 2 days instead of the 2 months we expected. The pre-built integrations saved us countless hours.',
    author: {
      name: 'Thomas Wright',
      role: 'IT Director',
      company: 'Notion',
      image: 'https://github.com/timneutkens.png',
    },
  },
  {
    type: 'featured',
    quote: 'We went from spending 40 hours a week on manual data entry to zero. The AI handles everything with 99% accuracy.',
    author: {
      name: 'Jennifer Liu',
      role: 'Operations Director',
      company: 'Stripe',
      image: 'https://github.com/vercel.png',
    },
  },
  {
    type: 'video',
    video: '/videos/testimonial-03.mp4',
    quote: 'Built our first workflow in 30 minutes. No code, just drag-and-drop. The AI steps are incredibly powerful.',
    author: {
      name: 'Alex Kim',
      role: 'CTO',
      company: 'StartupXYZ',
      image: 'https://github.com/adamwathan.png',
    },
  },
  {
    type: 'text',
    quote: 'The visual workflow builder is intuitive. Our non-technical team members can now create complex automations themselves.',
    author: {
      name: 'Lisa Chang',
      role: 'Product Manager',
      company: 'Figma',
      image: 'https://github.com/evilrabbit.png',
    },
  },
  {
    type: 'text',
    quote: 'Customer response time dropped from 4 hours to 15 minutes. AI routes and drafts responses automatically.',
    author: {
      name: 'James Miller',
      role: 'Customer Success',
      company: 'Intercom',
      image: 'https://github.com/sindresorhus.png',
    },
  },
  {
    type: 'featured',
    quote: 'Enterprise security was non-negotiable. Vertex met all our compliance requirements while delivering powerful automation.',
    author: {
      name: 'Amanda Ross',
      role: 'CISO',
      company: 'Twilio',
      image: 'https://github.com/kentcdodds.png',
    },
  },
];

// Video Card - Theme adaptive, NO black
function VideoCard({ testimonial }: { testimonial: Testimonial }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const updateProgress = () => setProgress((video.currentTime / video.duration) * 100);
    video.addEventListener('timeupdate', updateProgress);
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setProgress(0);
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  return (
    <div
      className="relative overflow-hidden bg-muted border-b border-r border-border aspect-[3/4]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        src={testimonial.video}
        className="absolute inset-0 h-full w-full object-cover"
        playsInline
        muted
        preload="metadata"
        onEnded={handleVideoEnd}
      />

      {/* Theme-adaptive gradient - uses background color */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

      {/* Play Button */}
      <button
        onClick={handlePlayPause}
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isPlaying && !isHovered ? 'opacity-0' : 'opacity-100'
        }`}
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        <div className={`flex h-12 w-12 items-center justify-center bg-foreground transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
          {isPlaying ? (
            <Icons.pause className="h-4 w-4 text-background" />
          ) : (
            <Icons.play className="h-4 w-4 text-background ml-0.5" />
          )}
        </div>
      </button>

      {/* Content */}
      <div className={`absolute inset-x-0 bottom-0 p-5 transition-all duration-300 ${isPlaying && !isHovered ? 'translate-y-2 opacity-0' : 'translate-y-0 opacity-100'}`}>
        <blockquote className="text-sm text-foreground leading-relaxed mb-4">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8 border border-border rounded-none">
            <AvatarImage src={testimonial.author.image} alt={testimonial.author.name} className="rounded-none" />
            <AvatarFallback className="rounded-none text-xs">{testimonial.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-foreground">{testimonial.author.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.author.role}, {testimonial.author.company}</p>
          </div>
        </div>
      </div>

      {isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border">
          <div className="h-full bg-primary transition-all duration-150 ease-linear" style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  );
}

// Text Card - Theme adaptive
function TextCard({ testimonial }: { testimonial: Testimonial }) {
  const isFeatured = testimonial.type === 'featured';

  return (
    <div className={`flex flex-col p-5 border-b border-r border-border ${isFeatured ? 'bg-primary text-primary-foreground' : 'bg-background'}`}>
      {isFeatured && (
        <div className="mb-3 flex">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}
      <blockquote className={`text-sm leading-relaxed ${isFeatured ? 'text-primary-foreground' : 'text-foreground'}`}>
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="mt-5 flex items-center gap-3">
        <Avatar className={`h-8 w-8 rounded-none ${isFeatured ? 'ring-1 ring-primary-foreground/30' : 'border border-border'}`}>
          <AvatarImage src={testimonial.author.image} alt={testimonial.author.name} className="rounded-none" />
          <AvatarFallback className={`rounded-none text-xs ${isFeatured ? 'bg-primary-foreground/20' : ''}`}>{testimonial.author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className={`text-sm font-medium ${isFeatured ? 'text-primary-foreground' : 'text-foreground'}`}>{testimonial.author.name}</p>
          <p className={`text-xs ${isFeatured ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{testimonial.author.role}, {testimonial.author.company}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  if (testimonial.type === 'video') return <VideoCard testimonial={testimonial} />;
  return <TextCard testimonial={testimonial} />;
}

const Testimonials = () => {
  return (
    <section className="bg-background">
      <div className="border-t border-dashed border-border" />

      {/* Header */}
      <div className="border-b border-dashed border-border px-6 pb-8 md:px-12 md:pb-12 pt-16">
        <h2 className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl text-foreground">
          Hear from teams{' '}
          <span className="text-muted-foreground">automating smarter.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Thousands of companies trust Vertex to automate their workflows,
          connect their tools, and let AI handle the repetitive work.
        </p>
      </div>

      {/* Masonry Grid - NO gaps */}
      <div className="border-l border-border">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 [column-gap:0]">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="break-inside-avoid">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-dashed border-border" />
    </section>
  );
};

export default Testimonials;
