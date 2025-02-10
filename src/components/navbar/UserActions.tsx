import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import SearchButton from './SearchButton';

export default function UserActions() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleProfile = () => {
    const profile = document.querySelector('#profile');
    profile?.classList.toggle('hidden');
    setIsOpen(!isOpen);
  };

  return (
    <ul className="flex items-center space-x-3 rtl:space-x-reverse">
      <li>{/* <ThemeButton /> */}</li>
      <li>
        <SearchButton />
      </li>
      <li>
        <span className="px-2 dark:text-white text-3xl">|</span>
      </li>
      <li>
        <button
          id="profileDropdownNavbarLink"
          data-dropdown-toggle="profileDropdownNavbar"
          className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          onClick={toggleProfile}
        >
          <Image src="/profile-pic.png" className="h-8 w-8 dark:invert" width={16} height={16} alt="profile pic" />
        </button>
        {/* <!-- Dropdown menu --> */}
        <motion.div
          id="profile"
          className="z-10 -translate-x-3/4 hidden absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="py-2 text-sm text-gray-700 dark:text-gray-200 flex flex-col justify-center items-center px-4">
            <h1 className="text-lg font-bold">
              <span className="sr-only">Username</span>
              {/* TODO: Username */}
              Username
            </h1>
            <h2 className="text-sm text-gray-500">
              <span className="sr-only">Email</span>
              {/* TODO: Email */}
              Mail
            </h2>
          </div>
          <div className="py-1 flex justify-center">
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </Link>
          </div>
        </motion.div>
      </li>
    </ul>
  );
}

// const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
//   const dimensions = useRef({ width: 0, height: 0 });

//   useEffect(() => {
//     if (ref.current) {
//       dimensions.current.width = ref.current.offsetWidth;
//       dimensions.current.height = ref.current.offsetHeight;
//     }
//   }, [ref]);

//   return dimensions.current;
// };
