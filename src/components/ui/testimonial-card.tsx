'use client';

import { Play, X } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

export interface Testimonial {
  name: string;
  designation: string;
  title?: string;
  profile?: string;
  content: string;
  mediaUrl?: string;
  thumbnail?: string;
}

export function TestimonialCard({
  testimonial,
}: {
  testimonial?: Testimonial;
}) {
  const [hydrated, setHydrated] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => setHydrated(true), []);

  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (open) v.play().catch(() => {});
    else {
      v.pause();
      v.currentTime = 0;
    }
  }, [open]);

  if (!testimonial) {
    return (
      <Card className='border border-border bg-background shadow-sm'>
        <CardContent className='p-6 text-center text-muted-foreground'>
          Loading testimonial...
        </CardContent>
      </Card>
    );
  }

  const {
    name = 'Anonymous',
    profile = '',
    title = '',
    designation = 'Customer',
    content = 'No testimonial available.',
    mediaUrl,
    thumbnail,
  } = testimonial;

  if (!hydrated) {
    return (
      <Card className='border border-border bg-background shadow-sm'>
        <CardContent className='p-6 text-center text-muted-foreground'>
          Loading...
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className='my-4 break-inside-avoid rounded-3xl border border-border bg-background p-3 shadow-sm transition-shadow duration-300 hover:shadow-md'>
      <CardHeader className='p-0'>
        <div className='flex items-center justify-between'>
          {title && (
            <CardTitle className='font-medium text-base'>{title}</CardTitle>
          )}
        </div>
      </CardHeader>

      <CardContent className='mt-3 space-y-4 p-0'>
        <div className='max-h-[500px] space-y-4 overflow-y-auto rounded-md'>
          {/* --- Video Section --- */}
          {mediaUrl && (
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button
                  type='button'
                  className='group relative w-full cursor-pointer outline-none'
                  aria-label='Play testimonial video'
                  onClick={() => setOpen(true)}
                >
                  <div className='relative aspect-video overflow-hidden rounded-xl border'>
                    <Image
                      src={thumbnail || '/placeholder-video.jpg'}
                      alt={name}
                      fill
                      className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                    />
                  </div>
                  <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
                    <div className='rounded-full bg-black/30 p-3 backdrop-blur-sm'>
                      <Play className='h-10 w-10 text-white drop-shadow' />
                    </div>
                  </div>
                </button>
              </DialogTrigger>

              {open && (
                <DialogContent
                  className='w-full overflow-hidden border-0 bg-black p-0 text-white sm:max-w-5xl'
                  onOpenAutoFocus={(e) => e.preventDefault()}
                >
                  <DialogClose asChild>
                    <Button
                      variant='ghost'
                      size='icon'
                      className='absolute top-2 right-2 z-50 rounded-full text-white hover:bg-white/10'
                      aria-label='Close video'
                      onClick={() => setOpen(false)}
                    >
                      <X className='h-5 w-5' />
                    </Button>
                  </DialogClose>

                  <div className='aspect-video bg-black'>
                    <video
                      ref={videoRef}
                      controls
                      playsInline
                      preload='metadata'
                      poster={thumbnail}
                      className='h-full w-full'
                    >
                      <source src={mediaUrl} type='video/mp4' />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </DialogContent>
              )}
            </Dialog>
          )}

          {/* --- Image Section --- */}
          {!mediaUrl && thumbnail && (
            <div className='relative aspect-video overflow-hidden rounded-xl border'>
              <Image
                src={thumbnail}
                alt={name}
                fill
                className='h-full w-full object-cover transition-transform duration-300 hover:scale-105'
              />
            </div>
          )}

          {/* --- Text Section --- */}
          {content && (
            <p className='text-muted-foreground leading-relaxed'>{content}</p>
          )}
        </div>

        <Separator />

        {/* --- Profile Section --- */}
        <div className='flex items-center space-x-3 pt-2'>
          <Avatar className='h-10 w-10'>
            <AvatarImage src={profile} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className='font-semibold text-foreground'>{name}</p>
            <p className='text-muted-foreground text-sm'>{designation}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
