'use client';

import { useRef, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icons } from '@/components/icons/icons';

// Video testimonial data
const videoTestimonials = [
  {
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
    video: '/videos/testimonial-03.mp4',
    quote: 'Built our first workflow in 30 minutes. No code, just drag-and-drop. The AI steps are incredibly powerful.',
    author: {
      name: 'Alex Kim',
      role: 'CTO',
      company: 'StartupXYZ',
      image: 'https://github.com/shadcn.png',
    },
  },
];

// Text testimonials
const textTestimonials = [
  {
    quote: 'The AI understands context perfectly. Our support ticket routing is now 95% accurate without any manual rules.',
    author: {
      name: 'Emily Watson',
      role: 'Support Lead',
      company: 'HelpDesk Pro',
      image: 'https://github.com/pontusab.png',
    },
  },
  {
    quote: 'Connected all our tools in one place. Slack, Notion, Salesforce - data flows automatically between everything.',
    author: {
      name: 'David Park',
      role: 'Engineering Manager',
      company: 'CloudScale',
      image: 'https://github.com/shuding.png',
    },
  },
  {
    quote: 'Real-time analytics show exactly where workflows succeed or fail. We optimize continuously based on actual data.',
    author: {
      name: 'Rachel Torres',
      role: 'Data Analyst',
      company: 'DataFlow',
      image: 'https://github.com/rauchg.png',
    },
  },
];

// Video Testimonial Card Component
function VideoTestimonialCard({
  video,
  quote,
  author,
  isLarge = false,
}: {
  video: string;
  quote: string;
  author: { name: string; role: string; company: string; image: string };
  isLarge?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
  };

  return (
    <div
      className={`group relative overflow-hidden bg-muted/30 ${isLarge ? 'aspect-[4/5] sm:aspect-[3/4]' : 'aspect-[4/5]'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={video}
        className="absolute inset-0 h-full w-full object-cover"
        playsInline
        muted
        loop={false}
        onEnded={handleVideoEnd}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Play Button */}
      <button
        onClick={handlePlayPause}
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isPlaying && !isHovered ? 'opacity-0' : 'opacity-100'
        }`}
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-2xl backdrop-blur-sm transition-all duration-300 ${
          isHovered ? 'scale-110' : 'scale-100'
        } ${isPlaying ? 'bg-white/80' : ''}`}>
          {isPlaying ? (
            <Icons.pause className="h-6 w-6 text-foreground ml-0" />
          ) : (
            <Icons.play className="h-6 w-6 text-foreground ml-1" />
          )}
        </div>
      </button>

      {/* Content Overlay */}
      <div className={`absolute inset-x-0 bottom-0 p-5 sm:p-6 transition-transform duration-300 ${
        isPlaying && !isHovered ? 'translate-y-full' : 'translate-y-0'
      }`}>
        {/* Quote */}
        <blockquote className={`text-white/95 leading-relaxed mb-4 ${
          isLarge ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
        }`}>
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border-2 border-white/20">
            <AvatarImage src={author.image} alt={author.name} />
            <AvatarFallback className="bg-white/20 text-white">
              {author.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-white">{author.name}</p>
            <p className="text-xs text-white/70">
              {author.role}, {author.company}
            </p>
          </div>
        </div>
      </div>

      {/* Video Progress Bar */}
      {isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div
            className="h-full bg-primary transition-all duration-100"
            style={{
              width: videoRef.current
                ? `${(videoRef.current.currentTime / videoRef.current.duration) * 100}%`
                : '0%'
            }}
          />
        </div>
      )}
    </div>
  );
}

// Text Testimonial Card Component
function TextTestimonialCard({
  quote,
  author,
}: {
  quote: string;
  author: { name: string; role: string; company: string; image: string };
}) {
  return (
    <div className="flex flex-col justify-between p-6 sm:p-8 h-full bg-background">
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
          <p className="text-xs text-muted-foreground">
            {author.role}, {author.company}
          </p>
        </div>
      </div>
    </div>
  );
}

const Testimonials = () => {
  return (
    <section className="bg-background">
      {/* Top border */}
      <div className="border-t border-dashed border-border" />

      <div>
        {/* Header */}
        <div className="border-b border-dashed border-border px-6 pb-8 md:px-12 md:pb-12 pt-16">
          <h2 className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl text-foreground">
            Hear from teams{' '}
            <span className="text-muted-foreground">
              automating smarter.
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Thousands of companies trust Vertex to automate their workflows,
            connect their tools, and let AI handle the repetitive work.
          </p>
        </div>

        {/* Video Testimonials - Featured Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-b border-dashed border-border">
          {videoTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`border-border ${
                index < videoTestimonials.length - 1 ? 'border-r-0 sm:border-r border-dashed' : ''
              } ${index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <VideoTestimonialCard
                video={testimonial.video}
                quote={testimonial.quote}
                author={testimonial.author}
                isLarge={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Text Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-dashed divide-border divide-y sm:divide-y-0 sm:divide-x">
          {textTestimonials.map((testimonial, index) => (
            <div key={index} className="min-h-[200px]">
              <TextTestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="border-t border-dashed border-border" />
    </section>
  );
};

export default Testimonials;
