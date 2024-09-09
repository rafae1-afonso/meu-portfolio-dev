'use client';

import './globals.css';
import HeaderLink from "@/components/HeaderComponents/HeaderLink";
import TechnologyIcon from '@/components/HomeComponents/TechnologyIcon';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { useEffect } from 'react';
import ProjectCard from '@/components/ProjectsComponents/ProjectCard';
import SkillsList from '@/components/AboutComponents/SkillsList';

export default function Home() {

  useEffect(() => {
    const myObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('scrollShow')
        } else {
          entry.target.classList.remove('scrollShow')
        }
      })
    })

    const scrollHiddenElements = document.querySelectorAll('.scrollHidden');
    scrollHiddenElements.forEach((element) => myObserver.observe(element));

    return () => myObserver.disconnect();
  });


  return (
    <>
      <header className="w-full h-24 bg-black flex flex-row justify-between items-center px-8 -mt-40 z-10 fixed">
        <div className='flex items-center'>
          <h1 className='logo text-center'><strong className='text-cyan-300'>&lt;</strong> RAFAEL AF0NSO DEV <strong className='text-cyan-300'>/&gt;</strong></h1>
        </div>

        <nav className="h-full flex items-center gap-5 px-8">
          <HeaderLink title='HOME' link='/' />
          <HeaderLink title='ABOUT' link='#about' />
          <HeaderLink title='PROJECTS' link='#projects' />
        </nav>

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

      <main>
        {/* Home */}
        <section id='home' className='flex flex-row items-center justify-center gap-44 p-24 my-40'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-5xl mb-6 font-bold'>Rafael Afonso</h1>
            <h2 className='text-xl'>Desenvolvedor <strong>Full-Stack</strong></h2>
          </div>

          <div className='p-7 rounded-md bg-gray-900 grid grid-cols-4 gap-24'>
            <TechnologyIcon icon={<FaHtml5 size={40} className='technologyIcon group-hover:translate-y-0 group-hover:fill-orange-500' />} name='HTML' />
            <TechnologyIcon icon={<FaCss3Alt size={40} className='technologyIcon group-hover:translate-y-0 group-hover:fill-blue-500' />} name='CSS' />
            <TechnologyIcon icon={<FaJs size={40} className='technologyIcon group-hover:translate-y-0 group-hover:fill-yellow-400' />} name='JavaScript' />
            <TechnologyIcon icon={<SiTypescript size={35} className='technologyIcon group-hover:translate-y-0 group-hover:fill-blue-600' />} name='TypeScript' />
            <TechnologyIcon icon={<FaNodeJs size={40} className='technologyIcon group-hover:translate-y-0 group-hover:fill-green-500' />} name='NodeJS' />
            <TechnologyIcon icon={<FaReact size={40} className='technologyIcon group-hover:translate-y-0 group-hover:fill-cyan-500' />} name='ReactJS' />
            <TechnologyIcon icon={<RiNextjsFill size={40} className='technologyIcon group-hover:translate-y-0 group-hover:fill-white' />} name='NextJS' />
            <TechnologyIcon icon={<RiTailwindCssFill size={40} className='technologyIcon group-hover:translate-y-0 group-hover:fill-cyan-400' />} name='Tailwind' />
          </div>
        </section>

        {/* About */}
        <section id='about' className='flex flex-col items-center gap-40 mb-36'>

          <h1 className='text-4xl font-bold'>ABOUT</h1>

          <div className='flex gap-32 mx-48'>
            <Image
              className='rounded-full scrollHidden'
              src='https://media.licdn.com/dms/image/v2/D4D03AQHx7xPlMeOY9g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721940303623?e=1730937600&v=beta&t=Jll-lTDVFeaGj6VsysBitmOD4qwvinglKjoRZaj_HDA'
              width={350}
              height={350}
              alt='foto de perfil minha do linkedin'
            />

            <article className='scrollHidden text-lg p-5 leading-8 bg-gray-900 rounded-lg'>
              Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
              Praesentium distinctio ipsa excepturi
              provident, ea quo, saepe impedit incidunt
              ducimus nulla quaerat amet cupiditate minus
              soluta possimus voluptatem cum rem vel!
              Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
              Praesentium distinctio ipsa excepturi
              provident, ea quo, saepe impedit incidunt
              ducimus nulla quaerat amet cupiditate minus
              soluta possimus voluptatem cum rem vel!
            </article>
          </div>

          <div className='flex justify-center gap-64'>
            <SkillsList title='Hard Skills'>
              <li>HTML, CSS, JavaScript</li>
              <li>TypeScript, NodeJS</li>
              <li>TailwindCSS, Bootstrap</li>
              <li>ReactJS, NextJS</li>
              <li>Inglês Intermediário</li>
            </SkillsList>

            <SkillsList title='Soft Skills'>
              <li>Colaboração</li>
              <li>Trabalho em equipe</li>
              <li>Responsibilidade</li>
              <li>Concentração</li>
              <li>Resolução de problemas</li>
            </SkillsList>
          </div>

        </section>

        {/* Projects */}
        <section id='projects' className='flex flex-col items-center gap-12'>
          <h1 className='text-4xl font-bold'>PROJECTS</h1>

          <div className='flex mx-48 my-20 gap-8'>
            <ProjectCard
              imageSrc='/assets/ProjectThumbnails/LiveDocs.png'
              title='LiveDocs'
              projectHref='#'
            />
            <ProjectCard
              imageSrc='/assets/ProjectThumbnails/CarePulse.png'
              title='CarePulse'
              projectHref='#'
            />
          </div>
        </section>

      </main>
    </>
  );
}
