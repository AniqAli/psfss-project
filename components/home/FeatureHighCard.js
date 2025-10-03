import Image from "next/image";

export default function FeatureHighCard({ heading, text, icon }) {
    return (
        <>
            <div className="z-10 relative border-1 rounded-2xl xl:p-4 lg:p-2 p-3 border-[#43E1A9] text-[#fdfdfd] h-full flex flex-col justify-between overflow-hidden"
                style={{boxShadow: '-2.35px -2.35px 117.25px 0px #FFFFFF1A inset'}}>
                <div className="flex justify-content-between items-start lg:flex-row md:flex-col-reverse" style={{justifyContent: 'space-between'}}>
                    <div className="contentWrap flex flex-col gap-2 xl:w-[65%] lg:w-[66%] md:w-[100%] w-[70%]">
                        <span className="font-bold text-[#ffffff] lg:text-[1rem] xl:text-[1.8rem] leading-6" style={{lineHeight: '30px'}}>{heading}</span>
                        <span className="text-[#ffffff] xl:text-[1.2rem] lg:text-[1rem] md:text-[0.8rem] leading-5" style={{lineHeight: '20px'}}>{text}</span>
                    </div>
                    <div className="iconWrap lg:w-[30%] w-[30%] md:w-[50%]">
                        <Image src={icon} width={500} height={500} className="object-contain scale-110" style={{marginTop: '-15px'}} alt="Icon" />
                    </div>
                </div>
            </div>
        </>
    );
}