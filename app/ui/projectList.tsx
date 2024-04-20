import { getPinnedRepos } from '../lib/data';
import ProjectCard from './projectCard';

export default async function ProjectList() {
    const pinnedRepos = await getPinnedRepos();

    return (
        <ul className='flex w-full flex-col items-start justify-evenly'>
            {pinnedRepos.map((el) => (
                <li className='mb-8 w-full' key={el.id}>
                    <ProjectCard {...el} />
                </li>
            ))}
        </ul>
    );
}
