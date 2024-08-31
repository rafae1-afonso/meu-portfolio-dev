import './globals.css';
import HeaderLink from "@/components/HeaderComponents/HeaderLink";
import TechnologyIcon from '@/components/HomeComponents/TechnologyIcon';
import Link from 'next/link';
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
import { RiNextjsFill, RiTailwindCssFill  } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <header className="w-full h-24 bg-black flex flex-row justify-between items-center px-8 mb-20">
        <div className='flex items-center'>
          <h1 className='logo text-center'><strong className='text-cyan-300'>&lt;</strong> RAFAEL AF0NSO DEV <strong className='text-cyan-300'>/&gt;</strong></h1>
        </div>

        <nav className="h-full flex items-center gap-5 px-8">
          <HeaderLink title='HOME' link='#home' />
          <HeaderLink title='HOME' link='/' />
          <HeaderLink title='HOME' link='/' />
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
        <section id='home' className='flex flex-col items-center justify-center p-44'>
          <h1 className='text-5xl mb-6 font-bold'>Rafael Afonso</h1>
          <h2 className='text-xl'>Desenvolvedor <strong>Full-Stack</strong></h2>

          <div className='mt-28 p-7 rounded-md bg-gray-900 flex gap-24'>
            <TechnologyIcon icon={<FaHtml5 size={40} className='technologyIcon group-hover:translate-y-0 group-hover:fill-orange-500'/>} name='HTML'/>
            <TechnologyIcon icon={<FaCss3Alt size={40} className='technologyIcon group-hover:translate-y-0 group-hover:fill-blue-500'/>} name='CSS'/>
            <TechnologyIcon icon={<FaJs size={40} className='technologyIcon group-hover:translate-y-0 group-hover:fill-yellow-400'/>} name='JavaScript'/>
            <TechnologyIcon icon={<SiTypescript size={35} className='technologyIcon group-hover:translate-y-0 group-hover:fill-blue-600'/>} name='TypeScript'/>
            <TechnologyIcon icon={<FaNodeJs size={40} className='technologyIcon group-hover:translate-y-0 group-hover:fill-green-500'/>} name='NodeJS'/>
            <TechnologyIcon icon={<FaReact size={40} className='technologyIcon group-hover:translate-y-0 group-hover:fill-cyan-500'/>} name='ReactJS'/>
            <TechnologyIcon icon={<RiNextjsFill size={40} className='technologyIcon group-hover:translate-y-0 group-hover:fill-white'/>} name='NextJS'/>
            <TechnologyIcon icon={<RiTailwindCssFill size={40} className='technologyIcon group-hover:translate-y-0 group-hover:fill-cyan-400'/>} name='Tailwind'/>
          </div>
        </section>
      </main>
    </>
  );
}
