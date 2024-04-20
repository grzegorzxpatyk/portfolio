import LinkButton from './linkButton';
import LinkStyled from './linkStyled';

type ProjectCardProps = {
    name: string;
    url: string;
    description: string;
    languages: string[];
    homepageUrl?: string;
};

export default function ProjectCard({
    name,
    url,
    description,
    languages,
    homepageUrl,
}: ProjectCardProps) {
    return (
        <div className='w-full rounded-xl border border-zinc-400 p-4 shadow-[10px_10px_0] shadow-zinc-600 transition-transform duration-200 ease-in-out hover:scale-105 dark:border-zinc-700 dark:shadow-zinc-950'>
            <div className='mb-3 flex h-10 w-full flex-row items-start justify-between'>
                <LinkStyled className='text-2xl' href={url} target='_blank'>
                    {name}
                </LinkStyled>
                <div className='flex flex-row items-start justify-end gap-2'>
                    <LinkButton
                        href={url}
                        target='_blank'
                        className='hidden sm:block'
                    >
                        Repo
                    </LinkButton>
                    {homepageUrl && (
                        <LinkButton href={homepageUrl} target='_blank'>
                            Demo
                        </LinkButton>
                    )}
                </div>
            </div>
            <span className='block text-lg text-zinc-800 dark:text-zinc-300'>
                {' '}
                {description}
            </span>
            <span className='block text-sm text-zinc-700 dark:text-zinc-400'>
                {languages.map(
                    (lang: string, i: number) =>
                        `${lang}${i < languages.length - 1 ? ', ' : ''}`
                )}
            </span>
        </div>
    );
}
