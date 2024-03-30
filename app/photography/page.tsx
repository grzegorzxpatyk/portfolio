import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Photography',
    description: 'My photography portfolio.',
};


export default function Page() {
    return (
        <section className='w-full h-[50vh] flex flex-col justify-center items-center'>
            <h2>Photography portfolio is coming soon 😏</h2>
        </section>
    );
}
