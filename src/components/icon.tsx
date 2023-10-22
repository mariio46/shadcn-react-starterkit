import * as icons from '@tabler/icons-react';
import React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends icons.TablerIconsProps {
    name: keyof typeof icons;
    className?: string;
}

export function Icon({ className, name, ...props }: IconProps) {
    const TablerIcon = icons[name] as React.FC<icons.TablerIconsProps>;
    return <TablerIcon className={cn('h-5 w-5 stroke-[1.25]', className)} {...props} />;
}
