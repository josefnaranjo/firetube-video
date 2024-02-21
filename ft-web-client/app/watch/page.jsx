"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from "react"

const Watch = () => {
    const videoPrefix = 'https://storage.googleapis.com/ft-processed-videos/';
    const videoSrc = useSearchParams().get('v');

    return (
        <div>
            <h1>Watch Page</h1>
            { <video controls src={videoPrefix + videoSrc} /> }
        </div>
    );
}

const SuspenseWrapper = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Watch />
        </Suspense>
    );
}

export default SuspenseWrapper