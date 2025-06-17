import Image from 'next/image';
import { Sidebar, TopMenu } from '@/components';
import { SessionProvider } from 'next-auth/react';

export default function AdminLayout({ children }: {
 children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Image src={'/imgs/background.png'} alt='fondo' layout='fill' objectFit='cover' priority className='z-0'/>
      <div className='relative z-10'>
        <TopMenu/>
        <SessionProvider>
          <Sidebar />
        </SessionProvider>
          { children }
      </div>
    </main>
  );
}