'use client'

import React from 'react';
import { Meteors } from './meteors';
import { usePathname } from 'next/navigation';

const MeteorProvider = () => {
    const pathname = usePathname();
    if (pathname === "/"){ 
        return(
            <div className="w-full relative">
                <div className="absolute w-screen z-10 bg-transparent py-40 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                    <Meteors number={80} />
                </div>
            </div>
        )
    }
}

export default MeteorProvider