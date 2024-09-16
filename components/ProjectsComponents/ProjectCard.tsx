import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LinkButton from '../ui/LinkButton';

const ProjectCard = ({ imageSrc, title, projectHref }: { imageSrc: string, title: string, projectHref: string }) => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 bg-card-gradient p-6 rounded-xl scrollHidden'>
            <Image
                className='rounded-xl'
                src={imageSrc}
                alt='imagem do projeto'
                width={325}
                height={150}
            />
            <h1 className='text-2xl self-start mb-3 font-bold'>{title}</h1>
            <div className='flex gap-20'>
                <LinkButton linkRef={projectHref}>DETALHES</LinkButton>
            </div>
        </div>
    )
}

export default ProjectCard