import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects',
    description: 'My web development projects.'
}

export default function Page() {
    return (
        <section>
            <h2 className='text-2xl'>my projects</h2>
        </section>
    )
}