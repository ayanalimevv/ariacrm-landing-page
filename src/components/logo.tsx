import { cn } from '@/lib/utils';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={24}
      height={24}
      className={cn('object-contain', className)}
    />
  );
}
