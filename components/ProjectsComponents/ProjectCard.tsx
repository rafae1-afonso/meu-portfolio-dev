import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectCard = ({ imageSrc, title, projectHref }: { imageSrc: string, title: string, projectHref: string }) => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 bg-gray-900 p-6 rounded-xl scrollHidden'>
            <Image
                className='rounded-xl'
                src={imageSrc}
                alt='imagem do projeto'
                width={325}
                height={150}
            />
            <h1 className='text-2xl self-start mb-3 font-bold'>{title}</h1>
            <div className='flex gap-20'>
                <Link href={projectHref}
                    className='bg-gray-950 p-4 rounded-2xl hover:text-cyan-300 hover:brightness-125 duration-500'
                >
                    DETALHES
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard