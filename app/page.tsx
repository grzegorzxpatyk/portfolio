import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import LinkStyled from './ui/linkStyled';
import Avatar from './ui/avatar';

export default function Home() {
    return (
        <main className='flex w-full flex-col items-start justify-start'>
            <div className='grid gap-8 sm:grid-cols-3'>
                <h1 className='row-start-2 text-3xl text-black sm:col-span-2 sm:row-start-1 dark:text-white'>
                    Hello there!{' '}
                    <span className='whitespace-nowrap'>I am Greg 👋</span>
                </h1>
                <Avatar />
                <p className='text-justify text-base sm:col-span-2'>
                    a trained architect turned programmer. I specialize in
                    crafting user interfaces and implementing designs that
                    enhance web experiences. Outside of work, I enjoy
                    woodworking, photography, and spending time with my dogs.
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
                <div className='mt-2 flex flex-col items-start justify-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4'>
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
        </main>
    );
}
