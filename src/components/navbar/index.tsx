'use client';

import React, { useEffect } from 'react';
import Link from 'next/dist/client/link';
import Image from 'next/image';

import { NavbarLinks } from './NavbarLinks';
import UserActions from './UserActions';

// import ThemeButton from './ThemeButton';

export default function Navbar() {
  let lastScrollPosition = 0;
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('#navbar');
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down
        navbar?.classList.add('-translate-y-full');
      } else {
        // Scrolling up
        navbar?.classList.remove('-translate-y-full');
      }

      lastScrollPosition = currentScrollPosition;
    });
  }, []);

  return (
    <nav
      id="navbar"
      className="border-gray-200 z-10  dark:border-gray-700 fixed top-0 w-full transition-transform duration-300 ease-in-out"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/favicon.ico" className="h-8 w-8 dark:invert" width={16} height={16} alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blog Simulator</span>
        </Link>
        <NavbarLinks />
        <UserActions />
      </div>
    </nav>
  );
}
