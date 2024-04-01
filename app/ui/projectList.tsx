import { getPinnedRepos } from '../utils';
import LinkStyled from './linkStyled';

export const revalidate = 3600;

export default async function Projects() {
    const pinnedRepos = await getPinnedRepos();
    
    return (
        <ul className='flex flex-col justify-evenly items-start'>
                    {pinnedRepos.map((el) => (
                        <li className='mb-1' key={el.id}>
                            <LinkStyled href={el.url} target='_blank'>
                                {el.name}
                            </LinkStyled>
                            <span className='text-zinc-500 text-sm block'>
                                {' '}
                                {el.description}
                            </span>
                            <span className='text-zinc-600 text-sm block'>
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