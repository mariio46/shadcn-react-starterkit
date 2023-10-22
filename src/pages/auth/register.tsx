import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GuestLayout from '@/layouts/guest-layout';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <GuestLayout>
            <Card className='w-full sm:max-w-md'>
                <CardHeader>
                    <CardTitle>Register</CardTitle>
                    <CardDescription>Hii, let&apos;s register and jump to your dashboard.</CardDescription>
                </CardHeader>
                <form>
                    <CardContent>
                        <div>
                            <Label htmlFor='name'>Name</Label>
                            <Input
                                name='name'
                                type='name'
                                id='name'
                                autoComplete='name'
                                className='mt-1 block w-full '
                            />
                        </div>
                        <div className='mt-4'>
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
                        <div className='mt-4'>
                            <Label htmlFor='password_confirmation'>Confirm Password</Label>
                            <Input
                                name='password_confirmation'
                                type='password_confirmation'
                                id='password_confirmation'
                                autoComplete='password_confirmation'
                                className='mt-1 block w-full '
                            />
                        </div>
                    </CardContent>
                    <CardFooter className='items-center justify-between'>
                        <Link to={'/'} className='text-sm text-muted-foreground hover:underline'>
                            Home
                        </Link>
                        <div className='flex items-center gap-x-4'>
                            <Link to={'/login'} className='text-sm text-muted-foreground hover:underline'>
                                Login?
                            </Link>
                            <Button>Register</Button>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </GuestLayout>
    );
}
