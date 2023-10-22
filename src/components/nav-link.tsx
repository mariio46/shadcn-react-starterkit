import { PropsWithChildren } from 'react';
import { NavLink as Link } from 'react-router-dom';

interface NavigationProps {
    url: string;
    value?: string;
}

export default function NavLink({ url, children, value, ...props }: PropsWithChildren & NavigationProps) {
    return (
        <Link
            to={url}
            {...props}
            className={({ isActive }) =>
                [
                    isActive
                        ? 'font-semibold capitalize text-foreground'
                        : 'font-normal capitalize text-muted-foreground',
                ].join('capitalize text-muted-foreground hover:text-foreground')
            }>
            {value ?? children}
        </Link>
    );
}
