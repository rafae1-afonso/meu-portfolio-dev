'use client';

import '@/app/styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import React, { ReactNode, useEffect } from 'react';
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import LinkButton from '@/components/ui/LinkButton';

import { GrDeploy, GrGithub } from "react-icons/gr";

interface Props {
    thumbImageSrc: string
    deployRef: string
    repoRef: string
    children: ReactNode;
}

const ProjectPageComponent = ({ thumbImageSrc, deployRef, repoRef, children }: Props) => {

    useEffect(() => {
        const myObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scrollShow')
                } else {
                    entry.target.classList.remove('scrollShow')
                };
            });
        });

        const scrollHiddenElements = document.querySelectorAll('.scrollHidden');
        scrollHiddenElements.forEach((element) => myObserver.observe(element));

        return () => myObserver.disconnect();
    });

    return (
        <>
            <header className="w-full h-24 bg-black flex flex-row justify-between items-center px-8 z-10 fixed">

                <Link href='/#projects' className='font-bold text-white duration-500 hover:text-cyan-300'>&lt; RETURN</Link>

                <div className='hidden md:flex items-center ml-24'>
                    <h1 className='logo text-center'><strong className='text-cyan-300'>&lt;</strong> RAFAEL AF0NSO DEV <strong className='text-cyan-300'>/&gt;</strong></h1>
                </div>

                <section className='flex items-center justify-center gap-6 px-8'>

                    <Link href='https://www.linkedin.com/in/rafaelafonsofl/' target='_blank'>
                        <FaLinkedin size={25} className='cursor-pointer duration-500 hover:-translate-y-1 hover:fill-cyan-300' />
                    </Link>

                    <Link href='https://github.com/rafae1-afonso' target='_blank'>
                        <FaGithubSquare size={25} className='cursor-pointer duration-500 hover:-translate-y-1 hover:fill-cyan-300' />
                    </Link>

                    <Link href='https://www.instagram.com/_rafa.afonso/' target='_blank'>
                        <FaInstagramSquare size={25} className='cursor-pointer duration-500 hover:-translate-y-1 hover:fill-cyan-300' />
                    </Link>

                </section>
            </header>

            <main id='project' className='flex flex-col items-center gap-40 p-24 scrollHidden'>
                <div className='flex flex-col md:flex-row gap-40 mt-16'>

                    <div className='flex flex-col justify-center items-center gap-12 bg-card-gradient p-5 rounded-lg'>
                        <Image
                            className='rounded-lg border border-gray-900'
                            src={thumbImageSrc}
                            alt='imagem do projeto'
                            width={600}
                            height={250}
                        />

                        <div className='flex gap-28 mb-8'>
                            <LinkButton linkRef={deployRef} target='_blank'><GrDeploy size={20} /> DEPLOY</LinkButton>
                            <LinkButton linkRef={repoRef} target='_blank'><GrGithub size={25} /> REPOSITORY</LinkButton>
                        </div>
                    </div>

                    <article className='text-lg md:w-[35rem] h-auto p-5 leading-8 bg-card-gradient rounded-lg'>
                        {children}
                    </article>
                </div>
            </main>

            <footer className='flex w-full h-24 justify-center items-center gap-1 bg-black'>
                <Link className='underline duration-500 hover:text-cyan-400 font-bold' target='_blank' href='https://github.com/rafae1-afonso/meu-portfolio-dev'>Portfólio</Link> desenvolvido por <strong>Rafael Afonso</strong>
            </footer>
        </>
    )
}

export default ProjectPageComponent