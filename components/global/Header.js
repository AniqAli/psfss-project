'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
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
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import LanguageSelector from './LanguageSelector'
import Link from 'next/link'
import { navLinks } from '@/constants/constant'
import { usePathname } from "next/navigation";

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname();

    return (
        <header className="bg-transparent">
            <nav aria-label="Global" className="mx-auto flex gap-3 max-w-7xl items-center justify-between mt-5 mb-5 md:px-6 px-4 lg:px-0 xl:px-0">
                <div className="flex lg:flex-1 w-full">
                    <Link href="/" className="bg-[#43E1A9] font-bold px-4 text-xl py-2 lg:px-13 lg:py-4 lg:text-3xl md:px-4 md:py-2 rounded-2xl text-white">
                        Logo
                    </Link>
                </div>
                <div className='lg:hidden'>
                    <LanguageSelector />
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-5.5 border-white border-1 rounded-2xl py-2 px-2 items-center">
                    {
                        navLinks.map((link) => {
                            const isActive = pathname === link.href;

                            if (link.subMenu) {
                                return (
                                    <Popover key={link.name} className="relative">
                                        <PopoverButton className="flex px-2.5 py-2 items-center gap-x-1 text-[1.375rem] font-bold text-[#FDFDFD] outline-0">
                                            {link.name}
                                            <ChevronDownIcon aria-hidden="true" className="size-7 flex-none text-[#FDFDFD]" />
                                        </PopoverButton>

                                        <PopoverPanel
                                            transition
                                            className="absolute left-1/2 z-10 mt-3 w-screen max-w-[12rem] -translate-x-1/2 overflow-hidden rounded-xl bg-white shadow-lg transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                                        >
                                            <div className="p-4">
                                                {link.subMenu.map((item) => (
                                                    <div
                                                        key={item.name}
                                                        className="group relative flex items-center p-2 text-[1.375rem]"
                                                    >
                                                        <div className="flex-auto">
                                                            <Link href={item.href} className="block font-bold text-black">
                                                                {item.name}
                                                                <span className="absolute inset-0" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </PopoverPanel>
                                    </Popover>
                                );
                            }

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-[1.375rem] font-bold px-2.5 py-2 text-[#FDFDFD] dark:text-white outline-0 ${isActive
                                        ? "active"
                                        : ""
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })
                    }
                </PopoverGroup>
                <div className='hidden lg:block'><LanguageSelector /></div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-[1.375rem] font-bold text-[#fdfdfd] border-white border-1 rounded-2xl px-6.5 py-4">
                        Log in
                    </a>
                </div>
            </nav>



            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden border">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto dark:hidden"
                            />
                            <img
                                alt=""
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto not-dark:hidden"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5">
                                        Product
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...products, ...callsToAction].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                                >
                                    Marketplace
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                                >
                                    Company
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
