'use client'

import { logout } from '@/actions/auth/logout';
import { useUiStore } from '@/store';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import { IoCloseOutline, IoHomeOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline } from 'react-icons/io5'

export const Sidebar = () => {

    const isSideMenuOpen = useUiStore( state => state.isSideMenuOpen );
    const closeSideMenu = useUiStore( state => state.closeSideMenu );

    const { data: session } = useSession();
    const isAuthenticated = !!session?.user;

  return (
    <div>
        {/* Background */}
        {
            isSideMenuOpen && (
                <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30' />
            )
        }

        {
            isSideMenuOpen && (
                <div onClick={ closeSideMenu }
                    className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm'
                />
                
            )
        }

        {/* Blur */}
            <nav className={
                clsx(
                    'fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300',
                    {
                        'translate-x-full': !isSideMenuOpen,
                    }
                )
            }>
                <IoCloseOutline
                    size={50}
                    className='absolute top-5 right-5 cursor-pointer'
                    onClick={ closeSideMenu }
                />

                <div className='relative mt-14'>
                    <IoSearchOutline size={20} className='absolute top-2 left-2'/>
                    <input type="text" placeholder='buscar' className='w-full bg-gray-50 rounded pl-10 py-1 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500'/>
                </div>

                {/* Menu */}

                {
                    isAuthenticated && (
                    <Link
                        href="/admin/profile"
                        onClick={ closeSideMenu }
                        className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                    >
                        <IoPersonOutline size={20}/>
                        <span className='ml-3 text'>Perfil</span>
                    </Link>
                    )
                }
                {
                    isAuthenticated && (
                        <Link
                            href="/"
                            onClick={ logout }
                            className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                        >
                            <IoLogOutOutline size={20}/>
                            <span className='ml-3 text'>Salir</span>
                        </Link>
                    )
                }
                {
                    !isAuthenticated && (
                        <Link
                            href="/auth/login"
                            onClick={ closeSideMenu }
                            className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                        >
                            <IoLogInOutline size={20}/>
                            <span className='ml-3 text'>Ingresar</span>
                        </Link>
                    )
                }


                <div className='w-full h-px bg-gray-200 my-10'></div>

                {
                    isAuthenticated && (
                    <Link
                        href="/admin/properties"
                        onClick={ closeSideMenu }
                        className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                    >
                        <IoHomeOutline size={20}/>
                        <span className='ml-3 text'>Propiedades</span>
                    </Link>
                    )
                }
                {
                    isAuthenticated && (
                    <Link
                        href="/admin/owners"
                        onClick={ closeSideMenu }
                        className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                    >
                        <IoPeopleOutline size={20}/>
                        <span className='ml-3 text'>Propietarios</span>
                    </Link>
                    )
                }
            </nav>
        </div>
  )
}
