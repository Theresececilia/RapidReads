import Image from 'next/image';
import styles from './root-layout.module.css';
import Sidebar from '../sidebar';
import Search from '../search';
import Logo from '../../public/assets/images/rapidreads-logo.png';

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col text-lightColor w-full min-h-screen p-6 bg-gradient-to-tr from-darkColor to-zinc-800">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <Image
          src={Logo}
          alt="Rapid Reads, Bite-sized stories to fuel your mind."
          width={300}
        />
        <Search />
      </div>
      <div className="md:flex md:mt-8 ">
        <Sidebar />
        <main className={styles.mainContent}>{children}</main>
      </div>
    </div>
  );
}
