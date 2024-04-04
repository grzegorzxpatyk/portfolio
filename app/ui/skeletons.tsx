export function ProjectsSkeleton() {
    return (
        <ul className='flex flex-col justify-evenly items-start animate-pulse'>
            {[...Array(6)].map((el, i) => (
                <li className='mb-4 h-fit' key={i}>
                    <span className='block w-20 h-5 mt-[4px] mb-[8px] bg-zinc-500'></span>
                    <span className='block w-48 h-4 mb-[7px] bg-zinc-500'></span>
                    <span className='w-fit flex flex-row gap-x-1 gap-y-0 h-3.5 mb-[3px]'>
                        {[...Array(5)].map((el, j) => (
                            <span
                                key={`${i}-${j}`}
                                className='inline-block w-16 h-full bg-zinc-500'
                            ></span>
                        ))}
                    </span>
                </li>
            ))}
        </ul>
    );
}
