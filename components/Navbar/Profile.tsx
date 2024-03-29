import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { BsPersonCircle } from "@/assets/icons"
import { useSession, signIn, signOut } from "next-auth/react"

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}


function Profile() {
    const { data: session } = useSession()

    return (
        <>
            <Menu as="div" className="relative inline-block text-left ">
                <div>
                    <Menu.Button className="inline-flex w-full flex items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        <BsPersonCircle className="text-2xl" />
                        <ChevronDownIcon className='w-4 h-4' />
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
                    <Menu.Items className="absolute lg:right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {
                                session?.user?.email ? (
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                                onClick={() => signOut()}
                                            >
                                                sign out
                                            </a>
                                        )}
                                    </Menu.Item>
                                ) : (
                                    <>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/login"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Login
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/register"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Sign up
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </>
                                )
                            }

                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    )
}
export default Profile;