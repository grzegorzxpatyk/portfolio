export function ProjectsSkeleton() {
    return (
        <ul className='flex w-full animate-pulse flex-col items-start justify-evenly'>
            {[...Array(6)].map((el, i) => (
                <li className='mb-8 h-fit w-full' key={i}>
                    <div className='w-full rounded-xl border border-zinc-400 p-4 shadow-[10px_10px_0] shadow-zinc-600 dark:border-zinc-700 dark:shadow-zinc-950'>
                        <div className='mb-[19px] flex w-full flex-row items-start justify-between'>
                            <span className='mb-[8px] mt-[4px] block h-6 w-28 bg-zinc-500'></span>
                            <div className='flex flex-row items-center justify-end gap-2'>
                                <span className='hidden h-[32px] w-[60px] rounded bg-zinc-500 sm:block'></span>
                                <span className='h-[32px] w-[60px] rounded bg-zinc-500'></span>
                            </div>
                        </div>
                        <span className='mb-[8px] block h-5 w-[70%] bg-zinc-500'></span>
                        <span className='mb-[3px] flex h-3.5 w-fit flex-row gap-x-1 gap-y-0'>
                            {[...Array(5)].map((el, j) => (
                                <span
                                    key={`${i}-${j}`}
                                    className='inline-block h-full w-8 bg-zinc-500 sm:w-16'
                                ></span>
                            ))}
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    );
}
