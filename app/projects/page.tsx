import { Metadata } from 'next';
import { Suspense } from 'react';
import { ProjectsSkeleton } from '../../components/skeletons';
import ProjectList from '../../components/projectList';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'My web development projects.',
};

export const revalidate = 3600;

export default async function Page() {
    return (
        <section className='flex w-full flex-col items-start'>
            <h2 className='mb-8 text-3xl text-black dark:text-white'>
                my projects
            </h2>
            <Suspense fallback={<ProjectsSkeleton />}>
                <ProjectList />
            </Suspense>
        </section>
    );
}
