import { Link } from 'react-router-dom';
import NavLink from './nav-link';
import { ThemeToggle } from './theme-toggle';
import { buttonVariants } from './ui/button';
import reactLogo from '../assets/react.svg';

export default function Navigation() {
    return (
        <header className='relative z-[50] hidden md:block'>
            <div className='fixed left-1/2 top-0 h-[4.5rem] w-full -translate-x-1/2'>
                <nav className='border-b border-border/80 bg-transparent px-6 py-5 backdrop-blur'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-8'>
                            <Link to={'/'}>
                                <img
                                    src={reactLogo}
                                    className='w-8 animate-spin [animation-duration:5s]'
                                    alt='React logo'
                                />
                            </Link>
                            <div className='flex items-center gap-x-4'>
                                <NavLink url='/' value={'home'} />
                                <NavLink url='/dashboard' value={'dashboard'} />
                            </div>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <ThemeToggle />
                            <Link
                                to={'/login'}
                                className={buttonVariants({
                                    variant: 'outline',
                                    size: 'default',
                                    className: 'h-[2.7rem]',
                                })}>
                                Login
                            </Link>
                            <Link
                                to={'/register'}
                                className={buttonVariants({
                                    variant: 'outline',
                                    size: 'default',
                                    className: 'h-[2.7rem]',
                                })}>
                                Register
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
