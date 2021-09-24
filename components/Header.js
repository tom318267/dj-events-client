/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Events", href: "/events", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <Disclosure as="nav" className="bg-green shadow-md">
      {({ open }) => (
        <>
          <div className="max-w-7xl font-roboto mx-auto px-2 sm:px-2 lg:px-8">
            <div className="relative flex items-center justify-between py-2">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="block h-6 w-6 text-black"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="block h-6 w-6 text-black"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <div className="relative flex items-center h-10 cursor-pointer">
                      <Image
                        src="/images/headphones.svg"
                        width={95}
                        height={95}
                        objectFit="contain"
                      />
                    </div>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex text-white space-x-2 font-quicksand relative top-0.5">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <h3 className="text-black text-lg hvr-underline-from-right px-3 py-2 text-md font-medium cursor-pointer">
                          {item.name}
                        </h3>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <h3 className="text-black font-roboto block px-3 py-2 cursor-pointer rounded-md hvr-underline-from-right font-petrona text-base font-medium">
                    {item.name}
                  </h3>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;

// /* This example requires Tailwind CSS v2.0+ */
// import { Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
// import Link from "next/link";
// import Image from "next/image";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// const Header = () => {
//   return (
//     <Disclosure as="nav" className="bg-white shadow">
//       {({ open }) => (
//         <>
//           <div className="max-w-7xl mx-auto font-sanchez font-bold px-2 sm:px-6 lg:px-8">
//             <div className="relative flex justify-between h-16">
//               <div className="flex-1 flex items-center sm:items-stretch sm:justify-start">
//                 <div className="flex-shrink-0 flex items-center cursor-pointer">
//                   <Link href="/">
//                     <Image
//                       src="/images/headphones.svg"
//                       width={80}
//                       height={80}
//                       objectFit="contain"
//                     />
//                   </Link>
//                 </div>
//                 <div className="sm:ml-6 sm:flex sm:space-x-8">
//                   {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
//                   <Link href="/events">
//                     <a className="text-gray-900 inline-flex items-center px-1 pt-1 text-md font-medium">
//                       Events
//                     </a>
//                   </Link>
//                   <Link href="/about">
//                     <a className="text-gray-900 inline-flex items-center px-1 pt-1 text-md font-medium">
//                       About
//                     </a>
//                   </Link>
//                 </div>
//               </div>
//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="pt-2 pb-4 space-y-1">
//               {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
//               <Link href="/events">
//                 <a className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
//                   Events
//                 </a>
//               </Link>
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// };

// export default Header;
