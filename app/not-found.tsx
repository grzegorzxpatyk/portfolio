import LinkButton from './ui/linkButton';

export default function NotFound() {
    return (
        <div className='flex h-[50vh] min-h-[400px] w-full items-center justify-center'>
            <div>
                <h2 className='text-xl'>Not Found</h2>
                <p>Could not find requested resource</p>
                <LinkButton className='mt-4' href={'/'}>
                    Return Home
                </LinkButton>
            </div>
        </div>
    );
}
