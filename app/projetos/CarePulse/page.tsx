'use client';

import '@/app/styles/globals.css';
import React from 'react';
import ProjectPageComponent from '@/components/ProjectPageComponent';
import Link from 'next/link';

const page = () => {
  return (
    <ProjectPageComponent
      thumbImageSrc='/assets/ProjectThumbnails/CarePulse.png'
      deployRef='https://project-carepulse.vercel.app/'
      repoRef='https://github.com/rafae1-afonso/project-carepulse'
    >
      Assim como o projeto
      <Link
        href='././LiveDocs'
        className='duration-500 font-bold underline hover:text-cyan-300'
      > LiveDocs, </Link>
      este projeto também foi criado durante um video do canal
      <Link
        href='https://www.youtube.com/@javascriptmastery'
        target='_blank'
        className='duration-500 font-bold underline hover:text-cyan-300'
      > JavaScript Mastery. </Link>
      Este projeto é uma plataforma onde você pode agendar uma consulta médica, com possibilidade de
      escolher o doutor, escolher a data da consulta, notificação por mensagens no SMS e possui um painel de admin que pode ser acessado
      pela senha 123456.
      Esta aplicação foi criada utilizando <strong>NextJS, Tailwind, TypeScript e Twilio</strong>

    </ProjectPageComponent>
  )
}

export default page