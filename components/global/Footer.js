import { footerPaymentIcons, footerQuickLinks, footerSocialIcons } from "@/constants/constant";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="footerWrapper mx-auto max-w-7xl items-center justify-between mt-5 mb-5 md:px-6 px-4 lg:px-4 xl:px-0">
            <div className="border-1 border-[#43E1A9] footerInnerWrap grid grid-cols-12 gap-3 bg-[url(/images/footer-bg.png)] bg-cover bg-no-repeat rounded-2xl p-8">
                <div className="xl:col-span-4 lg:col-span-4 col-span-12 xl:pr-12 lg:pr-12 md:col-span-12 pr-0 pt-4">
                    <Link href="#" className="mt-12 text-white font-bold bg-[#43E1A9] rounded-2xl xl:text-3xl lg:text-lg xl:py-4 xl:px-13 lg:py-4 lg:px-7 md:py-4 md:px-4 py-4 px-4">Logo</Link>
                    <p className="mt-10 text-white text-[16px]">
                        Welcome to your private, secure cloud space
                    </p>
                    <p className="mt-4 text-white text-[16px]">
                        Upload, manage, and access your files with full control and end-to-end protection.
                    </p>
                    <div className="socialIcons flex gap-5 items-center mt-5">
                        {
                            footerSocialIcons.map((item) => (
                                <Link href={item.link} key={item.name}>
                                    <Image src={item.icon} width={500} height={500} className="w-8" alt={item.name} />
                                </Link>
                            ))
                        }
                    </div>
                    <div className="socialIcons flex gap-2 items-center mt-5">
                        {
                            footerPaymentIcons.map((item) => (
                                <div key={item.name} className="">
                                    <Image src={item.icon} width={500} height={500} className="w-17 h-17 object-contain" alt={item.name} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-span-6 xl:col-span-2 lg:col-span-2 text-center">
                    <p className="text-[#43E1A9] text-[16px]">Quick links</p>
                    <div className="footerLinks flex flex-col">
                        {
                            footerQuickLinks.map( (link) => (
                                <Link href={link.link} key={link.name}>{link.name}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className="col-span-6 lg:col-span-2 xl:col-span-2">
                    <p className="text-[#43E1A9] text-[16px]">Legal links</p>
                </div>
                <div className="border w-full col-span-12 lg:col-span-4 xl:col-span-4">FOoter</div>
            </div>
        </div>
    );
}