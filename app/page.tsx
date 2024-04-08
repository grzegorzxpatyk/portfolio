import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import LinkStyled from './ui/linkStyled';
import Avatar from './ui/avatar';

export default function Home() {
    return (
        <section className='w-full flex flex-col justify-start items-start'>
            <div className='grid gap-8 sm:grid-cols-3'>
                <h1 className='text-3xl text-black dark:text-white sm:col-span-2 row-start-2 sm:row-start-1'>
                    Hello there!{' '}
                    <span className='whitespace-nowrap'>I am Greg 👋</span>
                </h1>
                <Avatar />
                <p className='text-base text-justify sm:col-span-2'>
                    a trained architect turned programmer. I specialize in
                    crafting user interfaces and implementing designs that
                    enhance web experiences. Outside of work, I enjoy
                    woodworking, photography, and spending time with my
                    dogs.
                </p>
            </div>

            <div className='mt-16 sm:mt-24'>
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

            <div className='my-8'>
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
