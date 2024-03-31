import { Metadata } from 'next';
import LinkStyled from '../ui/linkStyled';

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
            <h2 className='text-2xl text-black dark:text-white mb-4'>
                my projects
            </h2>
            <ul className='flex flex-col justify-evenly items-start'>
                {selectedRepos.map((el) => (
                    <li className='mb-1' key={el.name}>
                        <LinkStyled href={el.html_url} target='_blank'>
                            {el.name}
                        </LinkStyled>
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
