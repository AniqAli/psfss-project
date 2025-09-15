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

export default function LanguageSelector({ customClass }) {

    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const selectedFlag = flags.find((flag) => flag.code === selectedLanguage);
    const unselectedFlags = flags.filter((flag) => flag.code !== selectedLanguage);

    return (
        <>
            <div className={customClass}>
                <PopoverGroup className="lg:flex lg:gap-x-12 border-1 border-white rounded-2xl px-0 py-0 xl:px-2 xl:py-2 lg:px-2 lg:py-2 bg-[url(/images/button-bg.png)] bg-cover bg-no-repeat lg:min-h-[62px] xl:min-h-[69px] min-h-[auto] md:min-h-[50px] flex items-center justify-center">
                    <Popover className="relative ">
                        <PopoverButton className="xl:min-w-[145px] lg:min-w-[84px] min-w-[75px] justify-between flex px-1.5 sm:py-0 xm:px-0 py-2 items-center gap-x-3 xl:text-[1.375rem] lg:text-lg font-bold text-[#fdfdfd] outline-0 uppercase ">
                            <Image src={selectedFlag.src} width={500} height={500} alt='Flag Icon' className='xl:w-9 xl:h-6 lg:w-7 lg:h-5 w-8 h-5 object-cover rounded-md' />
                            <span className='hidden xl:block'>{selectedFlag.name}</span>
                            <ChevronDownIcon aria-hidden="true" className="size-7 flex-none text-[#fdfdfd]" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute left-1/2 z-10 xl:mt-5 lg:mt-5 md:mt-3 mt-1 w-screen max-w-[10rem] xl:max-w-[11rem] lg:max-w-[10rem] -translate-x-1/2 overflow-hidden rounded-3xl shadow-lg outline-1 outline-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in bg-[url(/images/header-bg.png)] bg-contain border-1 border-white backdrop-blur-[3px]"
                        >
                            <div className="p-2">
                                {unselectedFlags.map((flag) => (
                                    <div
                                        key={flag.name}
                                        className="group relative flex items-center p-2 lg:text-[1rem] xl:text-[1.375rem]"
                                    >
                                        <div className="flex-auto">
                                            <span className="font-bold text-white cursor-pointer flex gap-2 items-center" onClick={() => setSelectedLanguage(flag.code)}>
                                                <Image src={flag.src} width={500} height={500} alt='Flag Icon' className='w-9 h-6 object-cover rounded-md' />
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
        </>
    );
}