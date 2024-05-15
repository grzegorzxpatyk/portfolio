'use client';

import Button from '../components/button';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <Button onPress={() => reset()}>Try again</Button>
        </div>
    );
}
