import {
    ArrowTopRightIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Home() {
    return (
        <section className='w-full flex flex-col justify-start items-start'>
            <h1 className='inline text-3xl text-black dark:text-white mb-8'>
                Hello there! I am Greg 👋
            </h1>
            <p className='text-base text-justify'>
                a trained architect turned programmer. I specialize in crafting
                user interfaces and implementing designs that enhance web
                experiences. Outside of work, I enjoy woodworking, exploring
                nature, and spending time with my dogs.
            </p>

            <div className='mt-24'>
                <h3 className='inline text-lg'>Interested in hiring me?</h3>{' '}
                Checkout my{' '}
                <Link
                    href='https://grzegorzxpatyk.github.io/resume/'
                    target='_blank'
                    className='inline-flex justify-between items-center underline underline-offset-2 hover:text-zinc-600 dark:hover:text-zinc-100'
                >
                    printable Resume
                    <ArrowTopRightIcon />
                </Link>
            </div>

            <div className='mt-8'>
                <h3>You can also find me on</h3>
                <div className='flex sm:flex-row sm:justify-between sm:items-center flex-col justify-start items-start mt-2'>
                    <Link
                        href='https://github.com/grzegorzxpatyk'
                        target='_blank'
                        className='flex justify-between items-center gap-2 hover:text-zinc-600 dark:hover:text-zinc-100'
                    >
                        <GitHubLogoIcon /> GitHub
                    </Link>
                    <Link
                        href='https://www.linkedin.com/in/grzegorz-patyk'
                        target='_blank'
                        className='flex justify-between items-center gap-2 hover:text-zinc-600 dark:hover:text-zinc-100'
                    >
                        <LinkedInLogoIcon /> Linkedin
                    </Link>
                </div>
            </div>
        </section>
    );
}
