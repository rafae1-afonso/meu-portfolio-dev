import React from 'react'
import Link from "next/link";

const HeaderLink = ({ title, link }: { title: string, link: string}) => {
    return (
        <Link href={link} className="group w-24 flex flex-col items-center justify-center">
            <p className="p-8">{title}</p>
            <div className="w-full h-1 duration-500 bg-cyan-400 opacity-0 group-hover:opacity-100" />
        </Link>
    )
}

export default HeaderLink