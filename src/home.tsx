import AppLayout from './layouts/app-layout';

export default function Home() {
    return (
        <AppLayout className='flex-col'>
            <h1 className='text-center text-3xl font-extrabold md:text-4xl lg:text-7xl 2xl:text-8xl'>
                <span className='bg-gradient-to-br from-teal-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500'>
                    React & ShadcUI
                </span>

                <span className='bg-gradient-to-tr from-blue-500 via-pink-500 to-red-500 bg-clip-text text-transparent dark:from-sky-300 dark:via-pink-300 dark:to-red-500'>
                    &nbsp;Starterkit
                </span>
            </h1>
        </AppLayout>
    );
}
