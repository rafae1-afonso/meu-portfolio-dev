import './globals.css';
import HeaderLink from "@/components/HeaderComponents/HeaderLink";
import Link from 'next/link';
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";

export default function Home() {
  return (
    <header className="w-full h-24 bg-black flex flex-row justify-between items-center px-8">
      <div className='flex items-center'>
        <h1 className='logo text-center'>MEU PORTFÓLIO DEV</h1>
      </div>

      <nav className="h-full flex items-center gap-5 px-8">
        <HeaderLink title='HOME' link='/' />
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
  );
}
