import { getPinnedRepos } from '../utils';
import LinkStyled from './linkStyled';

export const revalidate = 3600;

export default async function Projects() {
    const dupa = await new Promise((resolve) => setTimeout(resolve, 5000));

    const pinnedRepos = await getPinnedRepos();
    
    return (
        <ul className='flex flex-col justify-evenly items-start'>
                    {pinnedRepos.map((el) => (
                        <li className='mb-4' key={el.id}>
                            <LinkStyled className='text-xl' href={el.url} target='_blank'>
                                {el.name}
                            </LinkStyled>
                            <span className='text-zinc-800 dark:text-zinc-300 text-base block'>
                                {' '}
                                {el.description}
                            </span>
                            <span className='text-zinc-700 dark:text-zinc-400 text-sm block'>
                                {el.languages.map(
                                    (lang: string, i: number) =>
                                        `${lang}${
                                            i < el.languages.length - 1
                                                ? ', '
                                                : ''
                                        }`
                                )}
                            </span>
                        </li>
                    ))}
                </ul>
    )
}