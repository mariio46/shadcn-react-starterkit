import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export default function GuestLayout({ className, children }: PropsWithChildren & { className?: string }) {
    return (
        <div className={cn('flex min-h-screen items-center justify-center', className)}>
            {children}
            <div className='absolute bottom-0 right-0 mb-4 mr-4'>
                <ThemeToggle />
            </div>
        </div>
    );
}
