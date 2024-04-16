import { Metadata } from 'next';
import { Suspense } from 'react';
import { ProjectsSkeleton } from '../ui/skeletons';
import ProjectList from '../ui/projectList';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'My web development projects.',
};

export const revalidate = 3600;

export default async function Page() {
    return (
        <section className='w-full flex flex-col items-start'>
            <h2 className='text-3xl text-black dark:text-white mb-4'>
                my projects
            </h2>
            <Suspense fallback={<ProjectsSkeleton />}>
                <ProjectList />
            </Suspense>
        </section>
    );
}
