import Link from "next/link";
import '../styles/globals.css';
import HeaderLink from "@/components/HeaderComponents/HeaderLink";

export default function Home() {
  return (
    <header className="w-full h-24 bg-black flex items-center justify-center gap-5">
      <HeaderLink title='HOME' link='/'/>
    </header>
  );
}
