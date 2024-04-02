import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Avatar from './lib/avatar.png';
import LinkStyled from './ui/linkStyled';

export default function Home() {
    return (
        <section className='w-full flex flex-col justify-start items-start'>
            <div className='flex flex-col sm:grid gap-8 sm:grid-cols-3'>
                <h1 className='text-3xl text-black dark:text-white sm:col-span-2'>
                    Hello there!{' '}
                    <span className='whitespace-nowrap'>I am Greg 👋</span>
                </h1>
                <Image
                    src={Avatar}
                    width={200}
                    height={200}
                    alt='My portrait.'
                    className='hidden sm:block rounded-lg sm:row-span-2'
                    placeholder='blur'
                />
                <p className='text-base text-justify sm:col-span-2'>
                    a trained architect turned programmer. I specialize in
                    crafting user interfaces and implementing designs that
                    enhance web experiences. Outside of work, I enjoy
                    woodworking, exploring nature, and spending time with my
                    dogs.
                </p>
            </div>

            <div className='mt-24'>
                <h2 className='inline text-lg'>Interested in hiring me?</h2>{' '}
                <span className='whitespace-nowrap'>
                    Checkout my{' '}
                    <LinkStyled
                        href='https://grzegorzxpatyk.github.io/resume/'
                        target='_blank'
                    >
                        resume
                    </LinkStyled>
                </span>
            </div>

            <div className='mt-8'>
                <h3>You can also find me on</h3>
                <div className='flex gap-1 sm:gap-4 sm:flex-row sm:justify-between sm:items-center flex-col justify-start items-start mt-2'>
                    <LinkStyled
                        href='https://github.com/grzegorzxpatyk'
                        target='_blank'
                    >
                        <GitHubLogoIcon className='mr-1' /> GitHub
                    </LinkStyled>
                    <LinkStyled
                        href='https://www.linkedin.com/in/grzegorz-patyk'
                        target='_blank'
                    >
                        <LinkedInLogoIcon className='mr-1' /> Linkedin
                    </LinkStyled>
                </div>
            </div>
        </section>
    );
}
