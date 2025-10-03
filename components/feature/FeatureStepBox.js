import Image from "next/image";

export default function FeatureStepBox({ step, icon }) {
    return (
        <div className="step relative p-4 rounded-xl flex flex-col items-center justify-center">
            {/* Sharp border */}
            <div className="absolute inset-0 rounded-xl border border-green-400"></div>
            {/* Glow border */}
            <div className="absolute inset-0 rounded-xl border border-green-500 blur-md"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
                <Image
                    src={icon}
                    width={650}
                    height={500}
                    alt="Feature Banner Img"
                    className="block align-middle ml-auto"
                />
                <h2 className="mainHeading text-center text-[#43E1A9] mt-[15px] lg:mt-[30px] font-extrabold xl:leading-[4.25rem] lg:leading-[5rem] md:leading-[4rem] leading-[2rem] xl:text-[4rem] lg:text-[5.125rem] md:text-[4rem] xs:text-[1rem] text-[2rem]">
                    Step {step}
                </h2>
            </div>
        </div>
    )
}  