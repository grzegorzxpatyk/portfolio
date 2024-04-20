import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Photography',
    description: 'My photography portfolio.',
};

export default function Page() {
    return (
        <section className='flex h-[50vh] w-full flex-col items-center justify-center'>
            <h2>Photography portfolio is coming soon 😏</h2>
        </section>
    );
}
