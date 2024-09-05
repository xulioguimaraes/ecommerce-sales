"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { FaUser } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { FiShoppingCart, FiUser } from "react-icons/fi";

export const Navbar = () => {
  const navigation = [
    "Produtos",
    "linhas",
    "Coleções",
    "mix and match",
    "sale",
    "repô",
    "parcerias",
    "aguaacademy",
  ];

  return (
    <div className="w-full flex justify-center fixed z-50 bg-white dark:bg-trueGray-900">
      <nav className="w-full max-w-[1420px] relative flex flex-wrap px-12 items-center justify-between py-8  lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <img
                        src="https://cdn.dooca.store/149698/files/logo-aguaazul-dark.svg?v=1708956371&webp=0"
                        alt="N"
                        className="w-[150px] bg-white rounded-full py-2 px-6"
                      />
                    </span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-nowrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href="/"
                        className="w-full px-2 py-2 -ml-4 text-gray-500 rounded-md  dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        <p className="text-[15px]">{item}</p>
                      </Link>
                    ))}
                    <Link
                      href="/"
                      className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                    >
                      Get Started
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href="/"
                  className="inline-block px-2 py-2 text-[15px] font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item  items-center">
          <MdSearch size={24} />

          <FiUser size={24} />

          <FiShoppingCart size={24} />
          <div className="relative w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              className="absolute w-9 h-9 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};
