import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'My web development projects.',
};

type Repo = {
    [key: string]: any;
    name: string;
    description: string;
};

export default async function Page() {
    const response = await fetch(
        'https://api.github.com/users/grzegorzxpatyk/repos'
    );
    const data: Repo[] = await response.json();
    const selectedReposNames = [
        'portfolio',
        'resume',
        'fashion-portfolio',
        'image-search-app',
        'my-resume',
        'accounting-frontend-react',
        'snake-game',
    ];

    const selectedRepos: Repo[] = [];
    selectedReposNames.forEach((name) => {
        const repo = data.find((el: Repo) => el.name === name);
        if (repo) selectedRepos.push(repo);
    });

    return (
        <section className='w-full flex flex-col items-start'>
            <h2 className='text-2xl text-black dark:text-white mb-4'>my projects</h2>
            <ul className='flex flex-col justify-evenly items-start'>
                {selectedRepos.map((el) => (
                    <li className='mb-1' key={el.name}>
                        <Link href={el.html_url} target='_blank' className='inline-flex justify-between items-center hover:text-zinc-600 dark:hover:text-zinc-100'>
                            {el.name}
                            <ArrowTopRightIcon />
                        </Link>
                        <span className='text-zinc-500 text-sm block'>
                            {' '}
                            {el.description}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
