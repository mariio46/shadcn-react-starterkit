import Navigation from '@/components/navigation';
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export default function AppLayout({ className, children }: PropsWithChildren & { className?: string }) {
    return (
        <div>
            <Navigation />
            <main className={cn('flex min-h-screen items-center justify-center', className)}>{children}</main>
        </div>
    );
}
