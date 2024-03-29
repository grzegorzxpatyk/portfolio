import { ArrowTopRightIcon } from '@radix-ui/react-icons';
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

            <p className='mt-16'>
                Interested in hiring me? Checkout my{' '}
                <Link href='https://grzegorzxpatyk.github.io/resume/' target='_blank' className='inline-flex justify-between items-center underline underline-offset-2 hover:text-zinc-600 dark:hover:text-zinc-100'>
                    printable Resume
                    <ArrowTopRightIcon />
                </Link>
            </p>
        </section>
    );
}
