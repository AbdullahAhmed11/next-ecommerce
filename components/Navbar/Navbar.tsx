import React, { Fragment, useState, useEffect } from "react"
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import {
    Dialog,
    Disclosure,
    Popover,
    Transition,
    Menu
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
    MoonIcon,
    SunIcon,
} from '@heroicons/react/20/solid'
import Link from "next/link";
import Searchbar from "./Searchbar";
import Profile from "./Profile";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}


function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [theme, setTheme] = useState("light")
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    const NAV_LINKS = [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "Store",
            href: "/store"
        },
        {
            label: "Contact-us",
            href: "/contact"
        },
    ]

    return (
        <>
            <header className="bg-white dark:bg-black text-white">
                <nav className="flex items-center justify-between p-6 mx-auto shadow-md ">
                    <div className="hidden lg:flex items-center gap-3   ">
                        {
                            NAV_LINKS.map((link) => (
                                <Link passHref href={link.href}>
                                    <span className="text-2xl text-gray-900 dark:text-white">{link.label}</span>
                                </Link>

                            ))
                        }
                    </div>

                    <div className="hidden lg:flex text-black dark:text-white">
                        <Searchbar />
                    </div>

                    <div className="flex items-center gap-4 ">
                        <div>
                            <ShoppingBagIcon className="w-6 h-6 text-black dark:text-white" />
                            <span className="absolute w-4 h-4 rounded-full bg-black dark:bg-white dark:text-black flex items-center justify-center text-white top-6 right-29">0</span>
                        </div>
                        <div>
                            <Profile />
                        </div>
                        <div>
                            {
                                theme === "dark" ? (

                                    <SunIcon
                                        className="w-6 h-6 text-white"
                                        onClick={handleTheme}
                                    />
                                ) : (

                                    <MoonIcon
                                        className="w-6 h-6 text-black"
                                        onClick={handleTheme}
                                    />
                                )
                            }
                        </div>
                    </div>
                    <div className="lg:hidden flex">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6 dark:text-white" aria-hidden="true" />
                        </button>
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden fixed absolute " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10 " />
                    <Dialog.Panel className="  fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between ">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>

                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {
                                        NAV_LINKS.map((link) => (
                                            <a
                                                href={link.href}
                                                key={link.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {link.label}
                                            </a>

                                        ))
                                    }

                                </div>
                                <div className="py-6">
                                    <a
                                        href="/login"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </>
    )
}

export default Navbar;