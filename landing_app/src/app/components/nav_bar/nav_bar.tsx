"use client";

import React, { useState, useEffect, Fragment } from "react";
import { Popover, Transition, Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const productLinks = [
  {
    name: "Order to Cash",
    href: "/our-products/order-to-cash",
    description: "Automate your order-to-cash workflow",
  },
  // Add other products here if needed
];

const navigationLinks = [
  { name: "Our Deck", href: "/our-deck" },
  { name: "Our Team", href: "/our-team" },
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
    <Popover
      as="nav"
      className={({ open }) =>
        `fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled || open
            ? "bg-gray-800 bg-opacity-95 backdrop-blur-md"
            : "bg-black"
        }`
      }
    >
      {({ open }) => (
        <>
          <div
            className={`mx-auto px-4 sm:px-6 lg:px-8 ${
              scrolled || open ? "border-gray-700" : "border-gray-900"
            } border-b`}
          >
            <div className="flex justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <Link
                  href="/"
                  className="text-white text-lg font-bold lg:text-2xl"
                >
                  Payce
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:ml-10 sm:flex sm:items-center sm:space-x-8">
                {/* Products Popover */}
                <Popover className="relative">
                  {({ open: productOpen }) => (
                    <>
                      <Popover.Button
                        className={`
                          group inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium 
                          ${
                            productOpen
                              ? "text-white border-blue-400"
                              : "text-gray-300 border-transparent hover:text-gray-400 hover:border-gray-500"
                          }
                          focus:outline-none
                        `}
                      >
                        <span>Our Products</span>
                        <ChevronDownIcon
                          className={`ml-2 h-5 w-5 transition-transform ${
                            productOpen
                              ? "rotate-180 text-blue-400"
                              : "text-gray-300"
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
                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-xs transform px-2 sm:px-0">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 bg-white p-6 sm:gap-8">
                              {productLinks.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 transition ease-in-out duration-150"
                                >
                                  {/* Add icon here if desired */}
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

                {/* Other Desktop Links */}
                {navigationLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="border-transparent text-gray-300 hover:text-gray-400 hover:border-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Desktop Contact Button */}
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 transition-colors"
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center sm:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Popover.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel className="sm:hidden absolute top-full inset-x-0 bg-gray-800 shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Mobile Products Disclosure */}
                <Disclosure as="div" className="-mx-3">
                  {({ open: productsOpen }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-700">
                        Our Products
                        <ChevronDownIcon
                          className={`${
                            productsOpen ? "rotate-180" : ""
                          } h-5 w-5 flex-none transition-transform`}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2 pl-6">
                        {productLinks.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-300 hover:bg-gray-700 hover:text-white"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                {/* Other Mobile Links */}
                {navigationLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-700"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Contact Link (Styled as a button-like link) */}
                <Link
                  href="/contact"
                  className="block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-blue-300 hover:bg-gray-700 hover:text-blue-200"
                >
                  Contact
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
