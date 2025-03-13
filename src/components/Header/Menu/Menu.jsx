"use client";
// @flow strict
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import * as Icon from '@phosphor-icons/react/dist/ssr';


const Menu = () => {
    const pathname = usePathname()
    const [fixedHeader, setFixedHeader] = useState(false)
    const [openMenuMobile, setOpenMenuMobile] = useState(false)

    return (
        <>
            <div className={`header-menu bg-white ${fixedHeader ? 'fixed' : ''}`}>
                <div className="container flex items-center justify-between h-20">
                    <Link className='menu-left-block' href="/">
                        <Image
                            src={'/images/logo.png'}
                            width={2000}
                            height={1000}
                            alt='logo'
                            priority={true}
                            className='w-[149px] max-sm:w-[132px]'
                        />
                    </Link>

                    <div className="menu-block h-full">

                        <ul className='menu-nav flex items-center xl:gap-2 h-full'>

                            <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/' ? 'active' : ''} mx-4`}>

                                <Link className='nav-link text-title flex items-center gap-1 text-blue-500' href="/">
                                    <span> Home
                                    </span>
                                </Link>
                            </li>


                            <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/about' ? 'active' : ''} mx-4`}>

                                <Link className='nav-link text-title flex items-center gap-1 text-blue-500' href="/about">
                                    <span> About Us
                                    </span>
                                </Link>
                            </li>

                            <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/service' ? 'active' : ''} mx-4`}>

                                <Link className='nav-link text-title flex items-center gap-1 text-blue-500' href="/service">
                                    <span> Services
                                    </span>
                                </Link>
                            </li>

                            <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/casestudy' ? 'active' : ''} mx-4`}>

                                <Link className='nav-link text-title flex items-center gap-1 text-blue-500' href="/casestudy">
                                    <span> Case Study
                                    </span>
                                </Link>
                            </li>

                            <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/contact' ? 'active' : ''} mx-4`}>

                                <Link className='nav-link text-title flex items-center gap-1 text-blue-500' href="/contact">
                                    <span> Contact Us
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div className='menu-right-block flex items-center'>
                        <div className='icon-call'>
                            <i className='icon-phone-call text-4xl'></i>

                        </div>

                        <div className='text ml-3'>

                            <div className='text caption1'> Contact to me </div>
                            <div className='number text-button'> +6550238756 </div>
                        </div>

                        <div className='menu-humberger hidden pointer' onClick={() => setOpenMenuMobile(!openMenuMobile)}>
                            <Icon.List className='text-2xl' weight='bold' />
                        </div>



                    </div>

                </div>

                <div id='menu-mobile-block' className={`${openMenuMobile ? 'open' : ''}`}>
                <div className='menu-mobile-main'> 
                    <div className='container '>

                        <ul>
                            <li>
                                asdfadf
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Menu;