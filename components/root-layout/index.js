import Image from 'next/image';
import styles from './root-layout.module.css';
import Sidebar from '../sidebar';
import Search from '../search';
import Logo from '../../public/assets/images/rapidreads-logo.png';
import Link from 'next/link';
import Footer from '../footer/index'

export default function RootLayout({ children }) {
  return (
    <>
    <div className="flex flex-col text-lightColor p-4 w-full min-h-screen bg-gradient-to-tr from-darkColor to-zinc-700">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="Rapid Reads, Bite-sized stories to fuel your mind."
            width={300}
          />
        </Link>
        <Search />
      </div>
      <div className="md:flex md:mt-8 ">
        <Sidebar />
        <main className={styles.mainContent}>{children}</main>
      </div>
      
    </div>
    <Footer/>
  </>
  );
}
