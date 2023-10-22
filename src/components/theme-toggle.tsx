import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icon } from './icon';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant='outline'
                    size='icon'
                    className='h-[2.7rem] w-[2.7rem] focus-visible:outline-none focus-visible:ring-0'>
                    {theme === 'light' && <Icon className='h-[1.35rem] w-[1.35rem]' name='IconSunLow' />}
                    {theme === 'dark' && <Icon className='h-[1.35rem] w-[1.35rem]' name='IconMoonStars' />}
                    {theme === 'system' && (
                        <Icon className='h-[1.35rem] w-[1.35rem]' name='IconDeviceDesktop' />
                    )}
                    <span className='sr-only'>Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
