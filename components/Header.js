import React, { Fragment, useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
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
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex px-2 lg:px-0">
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
                <div className="hidden lg:ml-6 md:flex font-roboto md:space-x-8 lg:space-x-8">
                  <Link href="/events">
                    <a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-black inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium">
                      Events
                    </a>
                  </Link>

                  {user ? (
                    // If logged in
                    <>
                      <Link href="/events/add">
                        <a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-black inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium">
                          Add Event
                        </a>
                      </Link>
                      <Link href="/account/dashboard">
                        <a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-black inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium">
                          Dashboard
                        </a>
                      </Link>
                      <a
                        onClick={() => logout()}
                        className="border-transparent text-gray-500 hover:border-gray-300 cursor-pointer hover:text-black inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium"
                      >
                        <FaSignOutAlt /> Logout
                      </a>
                    </>
                  ) : (
                    // If logged out
                    <Link href="/account/login">
                      <a className="border-transparent text-gray-500 gap-1 hover:border-gray-300 hover:text-black inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium">
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
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-4 relative flex-shrink-0">
                  <div>
                    <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1 font-roboto">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <Link href="/">
                <a className="border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 text-base font-medium">
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className="border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 text-base font-medium">
                  About
                </a>
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3 font-roboto">
                  <div className="text-base font-medium text-gray-800">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    tom@example.com
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 font-roboto">
                <a
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Sign out
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
