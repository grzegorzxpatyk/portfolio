import { getPinnedRepos } from '@/app/lib/data';
import ProjectCard from '@/components/ProjectCard/ProjectCard';

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
