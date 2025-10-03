import Link from "next/link";

export default function ButtonTransparent({ link, text }) {
    return (
        <div className="relative cursor-pointer group w-[100%] xl:min-h-[56px] lg:min-h-[56px] min-h-[45px] md:min-h-[56px] rounded-full" style={{boxShadow: '-2px -2px 100px 0px #FFFFFF1A inset', background: 'linear-gradient(-125.48deg, rgba(255, 255, 255, 0.165) 1.99%, rgba(67, 225, 169, 1.165) 345.73%, rgba(255, 255, 255, 0) 189.99%)'}}>
            <div className="rounded-full absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <Link href={link} className="text-[#FDFDFD] relative font-bold border-1 border-[#43E1A9] rounded-full w-[100%] xl:min-h-[56px] lg:min-h-[56px] min-h-[45px] md:min-h-[56px] flex items-center justify-center z-20 xl:text-lg lg:text-lg md:text-[1rem] text-[0.8rem] xl:p-0 lg:p-0 md:p-0 px-4">
                {text}
            </Link>
        </div>
    );
}