import Image from 'next/image';
import Sidebar from '../sidebar';
import Search from '../search';
import Logo from '../../public/assets/images/logo.png';
import Link from 'next/link';
import Footer from '../footer/index'
import { Pathway_Extreme } from 'next/font/google';

const font = Pathway_Extreme({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <>
      <div className="flex flex-col text-lightColor w-full min-h-screen bg-gradient-to-tr from-darkColor to-zinc-700">
        <div className='md:flex justify-between align-middle pt-4'>
        <Link href="/">
         <Image
              src={Logo}
              alt="Rapid Reads, Bite-sized stories to fuel your mind."
              width={300}
              className='m-auto'
            />
          </Link>
        <Sidebar />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Search />
        </div>
        <div className="">
          
          <main className={font.className}>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}
