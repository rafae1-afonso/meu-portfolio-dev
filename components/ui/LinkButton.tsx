import Link from 'next/link'
import React, { ReactNode } from 'react'

interface Props {
    linkRef: string;
    target?: string;
    children: ReactNode;
}

const LinkButton = ({ linkRef, target, children }: Props) => {
    return (
        <Link href={linkRef} target={target}
            className='group bg-gray-950 p-4 rounded-2xl hover:text-cyan-300 hover:brightness-125 duration-500 flex gap-3 items-center'
        >
            {children}
        </Link>
    )
}

export default LinkButton