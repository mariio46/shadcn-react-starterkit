import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GuestLayout from '@/layouts/guest-layout';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <GuestLayout>
            <Card className='w-full sm:max-w-md'>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                        Welcome back, let&apos;s login and jump to your dashboard.
                    </CardDescription>
                </CardHeader>
                <form>
                    <CardContent>
                        <div>
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                name='email'
                                type='email'
                                id='email'
                                autoComplete='email'
                                className='mt-1 block w-full '
                            />
                        </div>
                        <div className='mt-4'>
                            <Label htmlFor='password'>Password</Label>
                            <Input
                                name='password'
                                type='password'
                                id='password'
                                autoComplete='password'
                                className='mt-1 block w-full '
                            />
                        </div>
                    </CardContent>
                    <CardFooter className='items-center justify-between'>
                        <Link to={'/'} className='text-sm text-muted-foreground hover:underline'>
                            Home
                        </Link>
                        <div className='flex items-center gap-x-4'>
                            <Link to={'/register'} className='text-sm text-muted-foreground hover:underline'>
                                Register?
                            </Link>
                            <Button>Login</Button>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </GuestLayout>
    );
}
