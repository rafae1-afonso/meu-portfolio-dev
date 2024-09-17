'use client';

import '@/app/styles/globals.css';
import React from 'react';
import ProjectPageComponent from '@/components/ProjectPageComponent';
import Link from 'next/link';

const page = () => {
  return (
    <ProjectPageComponent
      thumbImageSrc='/assets/ProjectThumbnails/LiveDocs.png'
      deployRef='https://jsm-live-docs-five.vercel.app/'
      repoRef='https://github.com/rafae1-afonso/jsm_live_docs'
    >
      Este projeto foi criado durante um curso de um canal do Youtube
      chamado
      <Link
        href='https://www.youtube.com/@javascriptmastery'
        target='_blank'
        className='duration-500 font-bold underline hover:text-cyan-300'
      > JavaScript Mastery </Link>
      é um canal gringo que faz tutoriais de aplicações web. Este projeto é um
      editor de documentos que alem de funcionalidades como criar documentos, editar, etc.
      Ele possui também funcionalidades em tempo real, como por exemplo:
      colaboração de outras pessoas que possuem acesso ao documento e comentários.
      Esta aplicação foi criada utilizando <strong>NextJS, Tailwind e TypeScript</strong>
    </ProjectPageComponent>
  )
}

export default page