import Image from "next/image";

export default function GetStartedCards({ heading, text, icon }) {
    return (
        <>
            <div className="z-10 relative border-1 rounded-2xl xl:p-4 lg:p-2 border-[#43E1A9] text-[#fdfdfd] bg-[url(/images/home-page/get-started-bg.png)] bg-cover bg-no-repeat h-full flex flex-col justify-between">
                <div className="flex items-start">
                    <div className="contentWrap flex flex-col gap-2 xl:w-[65%] lg:w-[70%]">
                        <span className="font-bold xl:text-[1.25rem] lg:text-[1.15rem]">{heading}</span>
                        <span className="xl:text-[0.938rem]">{text}</span>
                    </div>
                    <div className="iconWrap w-[35%]">
                        <Image src={icon} width={500} height={500} className="w-[100px] h-[100px]" alt="Icon" />
                    </div>
                </div>
            </div>
        </>
    );
}