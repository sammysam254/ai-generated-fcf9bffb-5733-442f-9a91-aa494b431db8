import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Portfolio Website</title>
        <meta name="description" content="My portfolio website" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;