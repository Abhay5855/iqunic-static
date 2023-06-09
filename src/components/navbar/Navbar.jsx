import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/images/logo.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center xl:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                
                  
                  <img
                    className="h-12 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden xl:ml-12 md:flex xl:space-x-12">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <HashLink
                    to="/#about"
                    smooth
                    className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-primary"
                  >
                    About Us
                  </HashLink>
                  <HashLink
                    to="/#pricing"
                    smooth
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-primary hover:border-gray-300 hover:text-gray-700"
                  >
                    Pricing
                  </HashLink>
                  <HashLink
                    to="/#team"
                    smooth
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-primary hover:border-gray-300 hover:text-gray-700"
                  >
                    Team
                  </HashLink>
                  <HashLink
                    to="/#features"
                    smooth
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-primary hover:border-gray-300 hover:text-gray-700"
                  >
                    Features
                  </HashLink>
                  <HashLink
                    to="/#contact"
                    smooth
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-primary hover:border-gray-300 hover:text-gray-700"
                  >
                    Contact Us
                  </HashLink>
                  
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative xs:hidden sm:hidden inline-flex items-center gap-x-1.5 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm "
                  >
                    <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                    Get Started
                  </button>
                </div>
                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
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
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                        {/* <Menu.Item>
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
                        </Menu.Item> */}
                        
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="xl:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button className="block border-l-4 text-left w-full border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-primary sm:pl-5 sm:pr-6">
                <HashLink to="/#about" smooth className="">
                  About Us
                </HashLink>
              </Disclosure.Button>
              <Disclosure.Button className="block border-l-4 text-left w-full border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-primary sm:pl-5 sm:pr-6">
                <HashLink to="/#team" smooth className="">
                  Team
                </HashLink>
              </Disclosure.Button>
              <Disclosure.Button className="block border-l-4 text-left w-full border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-primary sm:pl-5 sm:pr-6">
                <HashLink to="/#pricing" smooth className="">
                  Pricing
                </HashLink>
              </Disclosure.Button>
              <Disclosure.Button className="block border-l-4 text-left w-full border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-primary sm:pl-5 sm:pr-6">
                <HashLink to="/#features" smooth className="">
                  Features
                </HashLink>
              </Disclosure.Button>
              <Disclosure.Button className="block border-l-4 text-left w-full border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-primary sm:pl-5 sm:pr-6">
                <HashLink to="/#contact" smooth className="">
                  Contact
                </HashLink>
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex items-center px-4 sm:px-6">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                >
                  Your Profile
                </Disclosure.Button>
                {/* <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                >
                  Settings
                </Disclosure.Button> */}
                {/* <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                >
                  Sign out
                </Disclosure.Button> */}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
