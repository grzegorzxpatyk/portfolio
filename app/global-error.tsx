'use client';

import Button from '@/components/Button/Button';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <h2>Something went wrong!</h2>
                <Button onPress={() => reset()}>Try again</Button>
            </body>
        </html>
    );
}
