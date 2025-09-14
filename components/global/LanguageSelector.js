import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import { useState } from 'react';

const flags = [
    {
        code: 'en',
        name: 'Eng',
        full_name: 'English',
        country: 'UK',
        src: '/flags/uk.png',
    },
    {
        code: 'ja',
        name: 'Jap',
        full_name: 'Japanese',
        country: 'Japan',
        src: '/flags/japan.png',
    },
    {
        code: 'zh',
        name: 'Chi',
        full_name: 'Chinese',
        country: 'China',
        src: '/flags/china.png',
    },
];

export default function LanguageSelector() {

    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const selectedFlag = flags.find((flag) => flag.code === selectedLanguage);
    const unselectedFlags = flags.filter((flag) => flag.code !== selectedLanguage);

    return (
        <>
            <div className='hidden lg:block'>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12 border-1 border-white rounded-2xl px-2 py-2">
                    <Popover className="relative">
                        <PopoverButton className="min-w-[145px] justify-between flex px-1.5 py-2 items-center gap-x-3 text-[1.375rem] font-bold text-[#fdfdfd] outline-0 uppercase">
                            <Image src={selectedFlag.src} width={500} height={500} alt='Flag Icon' className='w-9 h-6 object-cover' />
                            {selectedFlag.name}
                            <ChevronDownIcon aria-hidden="true" className="size-7 flex-none text-[#fdfdfd]" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute left-1/2 z-10 mt-3 w-screen max-w-[13rem] -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline-1 outline-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-4">
                                {unselectedFlags.map((flag) => (
                                    <div
                                        key={flag.name}
                                        className="group relative flex items-center p-2 text-[1.375rem]"
                                    >
                                        <div className="flex-auto">
                                            <span className="font-bold text-black cursor-pointer flex gap-2 items-center" onClick={() => setSelectedLanguage(flag.code)}>
                                                <Image src={flag.src} width={500} height={500} alt='Flag Icon' className='w-9 h-6 object-cover' />
                                                {flag.full_name}
                                                <span className="absolute inset-0" />
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>
                </PopoverGroup>
            </div>
            <div className='lg:hidden'>
                <a> Hello </a>
            </div>
        </>
    );
}