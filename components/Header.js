import React, { useContext } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import AuthContext from "../context/AuthContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex lg:px-0">
                <div className="flex-shrink-0 flex items-center cursor-pointer">
                  <Link href="/">
                    <Image
                      src="/images/headphones.svg"
                      width={95}
                      height={95}
                      objectFit="contain"
                    />
                  </Link>
                </div>
                <div className="hidden lg:ml-6 lg:flex font-roboto md:space-x-8 lg:space-x-8">
                  {user ? (
                    // If logged in
                    <>
                      <Link href="/events/add">
                        <a className="border-transparent text-black hover:text-purple-500 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium">
                          Add Event
                        </a>
                      </Link>
                      <Link href="/account/dashboard">
                        <a className="border-transparent text-black hover:text-purple-500 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium">
                          Dashboard
                        </a>
                      </Link>
                      <a
                        onClick={() => logout()}
                        className="border-transparent text-black cursor-pointer gap-1 hover:text-purple-500 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium"
                      >
                        <FaSignOutAlt /> Logout
                      </a>
                    </>
                  ) : (
                    // If logged out
                    <Link href="/account/login">
                      <a className="border-transparent text-black gap-1 hover:text-purple-500 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium">
                        <FaSignInAlt /> Login
                      </a>
                    </Link>
                  )}
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <Search />
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex sm:mr-6 items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="block text-purple-500 h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="block text-purple-500 h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1 font-roboto">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <Link href="/">
                <a className="text-black hover:text-purple-500 block pl-3 pr-4 py-2 text-base font-medium">
                  Home
                </a>
              </Link>

              <Link href="/events">
                <a className="text-black hover:text-purple-500 block pl-3 pr-4 py-2 text-base font-medium">
                  Events
                </a>
              </Link>

              {user ? (
                // If logged in
                <>
                  <Link href="/events/add">
                    <a className="text-black hover:text-purple-500 block pl-3 pr-4 py-2 text-base font-medium">
                      Add Event
                    </a>
                  </Link>
                  <Link href="/account/dashboard">
                    <a className="text-black hover:text-purple-500 block pl-3 pr-4 py-2 text-base font-medium">
                      Dashboard
                    </a>
                  </Link>
                  <a
                    onClick={() => logout()}
                    className="border-transparent text-black gap-1 cursor-pointer hover:text-purple-500 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium"
                  >
                    <FaSignOutAlt /> Logout
                  </a>
                </>
              ) : (
                // If logged out
                <Link href="/account/login">
                  <a className="border-transparent text-black gap-1 hover:text-purple-500 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium">
                    <FaSignInAlt /> Login
                  </a>
                </Link>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
