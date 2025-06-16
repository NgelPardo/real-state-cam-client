'use client'

import { titleFont } from '@/config/fonts'
import Link from 'next/link'
import React from 'react'
import { IoSearchOutline } from 'react-icons/io5';
import Image from "next/image";
import { useUiStore } from '@/store';


export const TopMenu = () => {
    
    const openSideMenu = useUiStore( state => state.openSideMenu );
  
    return (
    <nav className='flex px-5 justify-between items-center w-full py-2 bg-[#E0DEF7]'>
        <div className='flex'>
            <Link
                href="/"
                className='flex items-center ml-5'>
                    <Image src={'/imgs/iconestatery.png'} alt='icon-estatery' width={20} height={20}/>
                    <span className={`${titleFont.className} antialiased font-bold ml-1`}>Estatery</span>
            </Link>
            <Link className='ml-10 m-2 p-2 rounded-md transition-all hover:bg-gray-100' href={'/'}>Comprar</Link>
            <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href={'/'}>Rentar</Link>
        </div>
        <div className='hidden sm:block'>
        </div>
        <div className='flex items-center'>
            <Link href="/search" className='mx-2'>
                <IoSearchOutline className='w-5 h-5'/> 
            </Link>
            <button 
                onClick={ openSideMenu }
                className='m-2 p-2 rounded-md transition-all bg-purple-600 text-white'>
                Menu
            </button>
        </div>

    </nav>
  )
}
