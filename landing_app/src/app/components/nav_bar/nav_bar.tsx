"use client";

import React, { useState, useEffect, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const productLinks = [
  {
    name: "Order to Cash",
    href: "/our-products/order-to-cash",
    description: "Automate your order-to-cash workflow",
  },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-gray-800 bg-opacity-90 backdrop-blur-sm" : "bg-black"
      }`}
    >
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 ${
          scrolled ? "border-gray-700" : "border-gray-900"
        } border-b`}
      >
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-white text-lg font-bold lg:text-2xl"
              >
                Payce
              </Link>
            </div>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`
                        group inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium 
                        ${
                          open
                            ? "text-white border-blue-400"
                            : "text-gray-300 border-transparent hover:text-gray-400 hover:border-gray-500"
                        }
                        focus:outline-none
                      `}
                    >
                      <span>Our Products</span>
                      <ChevronDownIcon
                        className={`ml-2 h-5 w-5 transition-transform ${
                          open ? "rotate-180 text-blue-400" : "text-gray-300"
                        }`}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-xs transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white p-6 sm:gap-8">
                            {productLinks.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 transition ease-in-out duration-150"
                              >
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Link
                href="/our-deck"
                className="border-transparent text-gray-300 hover:text-gray-400 hover:border-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Our Deck
              </Link>
              <Link
                href="/our-team"
                className="border-transparent text-gray-300 hover:text-gray-400 hover:border-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Our Team
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button - this will appear on smaller screens */}
          <div className="flex items-center sm:hidden">
            <Popover>
              {({ open }) => (
                <>
                  <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className={`${open ? "hidden" : "block"} h-6 w-6`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                    <svg
                      className={`${open ? "block" : "hidden"} h-6 w-6`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Popover.Panel className="absolute top-16 inset-x-0 bg-gray-800 p-4">
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                          <Link
                            href="/our-products/order-to-cash"
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                          >
                            Order to Cash
                          </Link>
                          <Link
                            href="/our-deck"
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                          >
                            Our Deck
                          </Link>
                          <Link
                            href="/our-team"
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                          >
                            Our Team
                          </Link>
                          <Link
                            href="/contact"
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                          >
                            Contact
                          </Link>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  );
}
