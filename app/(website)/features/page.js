import Image from "next/image";
import Button from "@/components/global/Button";
import GetStartedCards from "@/components/home/GetStartedCards";
import FeatureStepBox from "@/components/feature/FeatureStepBox";

export default function Features() {

    const homePageContent = {
        banner_icon1: '/icons/home-page/banner-file.png',
        banner_button1: 'Start for Free',
        banner_button2: 'Upgrade to Premium',
        get_started_card_1_heading: 'Easy to Use',
        get_started_card_1_text: 'Drag, drop, and done. No learning curve – simple & intuitive.',
        get_started_card_1_icon: '/icons/home-page/get-started-2.png',
        get_started_card_2_heading: 'Full File Control',
        get_started_card_2_text: 'Set permissions, restrict access, and manage every file on your terms.',
        get_started_card_2_icon: '/icons/file_icon.svg',
        get_started_card_3_heading: 'Sync to Selected Device',
        get_started_card_3_text: 'Choose which files go where. No forced sync. No surprises.',
        get_started_card_3_icon: '/icons/sync_device.svg',
        get_started_card_4_heading: 'Security & Privacy',
        get_started_card_4_text: 'Zero knowledge architecture, no third-party data access, end-to-end encryption keeps your files safe in transit and at rest.',
        get_started_card_4_icon: '/icons/secu_privacy.svg',
        get_started_card_5_heading: 'Cloud & Local Storage',
        get_started_card_5_text: 'Access files anywhere with secure cloud storage – or keep them local for offline availability. You choose where your data live.',
        get_started_card_5_icon: '/icons/cloud_storage.svg',
        get_started_card_6_heading: 'Confidential & Private',
        get_started_card_6_text: 'No ads, no tracking. Your data are yours – and stays that way.',
        get_started_card_6_icon: '/icons/conf_private.svg',
        like_try_it_button: 'Try It',
        like_what_button: 'Try It Free',
        why_choose_us_heading: 'Why Users Choose Us',
        why_choose_us_para: 'Trusted by users who value privacy, security and simplicity',
        bottom_section_heading1: 'Love the free version?',
        bottom_section_para1: 'You\'ll love Premium even more. More features. More freedom.',
        bottom_section_cta1: 'See What Premium Offers',
        bottom_section_heading2: 'Want total control and complete privacy?',
        bottom_section_para2: 'You\'re in the right place, we don\'t sell your personal data.',
        bottom_section_cta2: 'Start for Free',
    };

    return(
        <>
            <div className="home-page">
                {/* Banner Section */}
                <div className="bannerSection">
                    <div className="flex lg:flex-row flex-col gap-5 lg:gap-4 py-7">
                        <div className="grow banner_col1">
                            <h1 className="mainHeading text-[#FDFDFD] font-extrabold xl:leading-[4.25rem] lg:leading-[5rem] md:leading-[4rem] leading-[2rem] xl:text-[4rem] lg:text-[5.125rem] md:text-[4rem] xs:text-[1rem] text-[2rem]">
                                Built for Privacy. <br/>Total Control. Complete Peace of Mind.
                            </h1>
                            <span className="text-[#FDFDFD] font-bold xl:inline-block lg:inline-block md:inline-block hidden m-auto mt-4 xl:text-3xl lg:text-[1.750rem] md:text-[1.250rem] text-[1rem]">
                                <p className="inline-block align-middle">Choose where your files go, who sees them, and how <br/> they are stored – all in a secure, private environment.</p>
                            </span>
                            <div className="flex items-center lg:gap-15 md:gap-10 gap-5 xl:mt-5 lg:mt-5 md:mt-3 mt-5">
                                <div className="xl:min-w-[240px] xl:max-w-[240px] lg:min-w-[230px] lg:max-w-[230px] md:min-w-[210px] md:max-w-[210px] w-auto flex "><Button link={'#'} text={homePageContent.banner_button1} /></div>
                                <div className="xl:min-w-[240px] xl:max-w-[240px] lg:min-w-[230px] lg:max-w-[230px] md:min-w-[210px] md:max-w-[210px] w-auto flex"><Button link={'#'} text={homePageContent.banner_button2} /></div>
                            </div>
                        </div>
                        <div className="grow banner_col1">
                            <Image
                                src="/images/feature/hero-img.png"
                                width={650}
                                height={500}
                                alt="Feature Banner Img"
                                className="block align-middle ml-auto"
                            />
                        </div>
                    </div>
                </div>

                {/* Highlights Section */}
                <div className="bannerSection mt-0 lg:mt-[40px] py-7">
                    <h2 className="mainHeading text-center text-[#FDFDFD] font-extrabold xl:leading-[4.25rem] lg:leading-[5rem] md:leading-[4rem] leading-[2rem] xl:text-[4rem] lg:text-[5.125rem] md:text-[4rem] xs:text-[1rem] text-[2rem]">
                        Feature Highlights
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5 mt-[50px]">
                        <div className="flex-1">
                            <GetStartedCards heading={homePageContent.get_started_card_1_heading} text={homePageContent.get_started_card_1_text} icon={homePageContent.get_started_card_1_icon} />
                        </div>
                        <div className="flex-1">
                            <GetStartedCards heading={homePageContent.get_started_card_2_heading} text={homePageContent.get_started_card_2_text} icon={homePageContent.get_started_card_2_icon} />
                        </div>
                        <div className="flex-1">
                            <GetStartedCards heading={homePageContent.get_started_card_3_heading} text={homePageContent.get_started_card_3_text} icon={homePageContent.get_started_card_3_icon} />
                        </div>
                        <div className="flex-1">
                            <GetStartedCards heading={homePageContent.get_started_card_4_heading} text={homePageContent.get_started_card_4_text} icon={homePageContent.get_started_card_4_icon} />
                        </div>
                        <div className="flex-1">
                            <GetStartedCards heading={homePageContent.get_started_card_5_heading} text={homePageContent.get_started_card_5_text} icon={homePageContent.get_started_card_5_icon} />
                        </div>
                        <div className="flex-1">
                            <GetStartedCards heading={homePageContent.get_started_card_6_heading} text={homePageContent.get_started_card_6_text} icon={homePageContent.get_started_card_6_icon} />
                        </div>
                    </div>
                    <div className="mt-[50px] flex flex-wrap gap-4 lg:gap-6 items-center">
                        <h2 className="mainHeading text-center text-[#FDFDFD] font-extrabold xl:leading-[4.25rem] lg:leading-[5rem] md:leading-[4rem] leading-[2rem] xl:text-[4rem] lg:text-[5.125rem] md:text-[4rem] xs:text-[1rem] text-[2rem]">
                            Like it?
                        </h2>
                        <div className="max-h-[56px] min-w-[110px] max-w-[110px] md:min-w-[210px] md:max-w-[210px] flex"><Button link={'#'} text={homePageContent.like_try_it_button} /></div>
                        <h2 className="mainHeading text-center text-[#43E1A9] font-extrabold xl:leading-[4.25rem] lg:leading-[5rem] md:leading-[4rem] leading-[2rem] xl:text-[4rem] lg:text-[5.125rem] md:text-[4rem] xs:text-[1rem] text-[2rem]">
                            It’s Free !
                        </h2>
                    </div>
                </div>

                {/* Steps Section */}
                <div className="bannerSection py-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-0 lg:mt-[50px]">
                        {/* Step 1 */}
                        <div className="items-center">
                            {/* Box */}
                            <div p-4 className="flex flex-col items-center justify-center p-4 border-l border-r border-t border-green-400 rounded-t-xl">
                                <Image
                                    src="/images/feature/feature_step1.png"
                                    width={650}
                                    height={500}
                                    alt="step 1"
                                    className="block align-middle"
                                />
                                {/* Step Label */}
                                <h3 className="mainHeading text-center text-[#43E1A9] mt-[15px] lg:mt-[30px] font-extrabold xl:leading-[4.25rem] lg:leading-[5rem] md:leading-[4rem] leading-[2rem] xl:text-[4rem] lg:text-[5.125rem] md:text-[4rem] xs:text-[1rem] text-[2rem]">
                                    Step 01
                                </h3>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="items-center">
                            <div className="flex flex-col items-center justify-center pt-4 px-4 border-r border-b border-green-400 rounded-b-xl">
                                <h3 className="mainHeading text-center text-[#43E1A9] font-extrabold xl:leading-[4.25rem] lg:leading-[5rem] md:leading-[4rem] leading-[2rem] xl:text-[4rem] lg:text-[5.125rem] md:text-[4rem] xs:text-[1rem] text-[2rem]">
                                    Step 02
                                </h3>
                                <Image
                                    src="/images/feature/feature_step2.png"
                                    width={650}
                                    height={500}
                                    alt="step 1"
                                    className="block align-middle mt-[15px] lg:mt-[30px]"
                                />
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="items-center">
                            <div className="flex flex-col items-center justify-center p-4 border-r border-t border-green-400 rounded-t-xl">
                                <Image
                                    src="/images/feature/feature_step3.png"
                                    width={650}
                                    height={500}
                                    alt="step 1"
                                    className="block align-middle"
                                />
                                <h3 className="mainHeading text-center text-[#43E1A9] mt-[15px] lg:mt-[30px] font-extrabold xl:leading-[4.25rem] lg:leading-[5rem] md:leading-[4rem] leading-[2rem] xl:text-[4rem] lg:text-[5.125rem] md:text-[4rem] xs:text-[1rem] text-[2rem]">
                                    Step 03
                                </h3>
                            </div>
                        </div>

                        {/* Step 4 (no connector after) */}
                        <div className="items-center">
                            <div className="flex flex-col items-center justify-center p-4 border-r border-b border-green-400 rounded-b-xl">
                                <h3 className="mainHeading text-center text-[#43E1A9] font-extrabold xl:leading-[4.25rem] lg:leading-[5rem] md:leading-[4rem] leading-[2rem] xl:text-[4rem] lg:text-[5.125rem] md:text-[4rem] xs:text-[1rem] text-[2rem]">
                                    Step 04
                                </h3>
                                <Image
                                    src="/images/feature/feature_step4.png"
                                    width={650}
                                    height={500}
                                    alt="step 1"
                                    className="block align-middle mt-[15px] lg:mt-[30px]"
                                />
                            </div>
                        </div>
                    </div>
                    {/* <FeatureStepBox step="01" icon="/images/feature/feature_step1.png" /> */}
                </div>

                {/* shat you see section */}
                <div className="bannerSection mt-0 lg:mt-[40px] py-7 text-center">
                    <h2 className="mainHeading text-[#FDFDFD] font-extrabold xl:leading-[4.25rem] lg:leading-[5rem] md:leading-[4rem] leading-[2rem] xl:text-[4rem] lg:text-[5.125rem] md:text-[4rem] xs:text-[1rem] text-[2rem]">
                        Like <span className="text-[#43E1A9]">what you see</span>?
                    </h2>
                    <span className="text-[#FDFDFD] font-medium xl:inline-block lg:inline-block md:inline-block hidden m-auto mt-1 xl:text-3xl lg:text-[1.750rem] md:text-[1.250rem] text-[1rem]">
                        <p className="inline-block align-middle">Give it a try – it takes just a few seconds to get started</p>
                    </span>
                    <div className="flex justify-center mt-6">
                        <div className="max-h-[56px] min-w-[110px] max-w-[110px] md:min-w-[210px] md:max-w-[210px] flex"><Button link={'#'} text={homePageContent.like_what_button} /></div>
                    </div>

                    <h3 className="mainHeading text-[#E6EDF5] mt-[40px] lg:mt-[70px] font-extrabold lg:leading-[2.8rem] leading-[2.2rem] lg:text-[2.5rem] xs:text-[1rem] text-[2rem]">
                        Sync only what you choose, where you choose.
                    </h3>
                    {/* OS Images Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-[20px] lg:mt-[40px]">
                        <div className="p-5 border-[#43E1A9] border-1 rounded-xl">
                            <Image
                                src="/icons/windows.svg"
                                width={90}
                                height={75}
                                alt=""
                                className="block align-middle mx-auto"
                            />
                            <p className="inline-block align-middle mt-3 text-[1rem] lg:text-[1.5rem] text-[#E6EDF5] font-medium">Windows</p>
                        </div>
                        <div className="p-5 border-[#43E1A9] border-1 rounded-xl">
                            <Image
                                src="/icons/apple.svg"
                                width={78}
                                height={75}
                                alt=""
                                className="block align-middle mx-auto"
                            />
                            <p className="inline-block align-middle mt-3 text-[1rem] lg:text-[1.5rem] text-[#E6EDF5] font-medium">Apple</p>
                        </div>
                        <div className="p-5 border-[#43E1A9] border-1 rounded-xl">
                            <Image
                                src="/icons/android.svg"
                                width={78}
                                height={75}
                                alt=""
                                className="block align-middle mx-auto"
                            />
                            <p className="inline-block align-middle mt-3 text-[1rem] lg:text-[1.5rem] text-[#E6EDF5] font-medium">Android</p>
                        </div>
                        <div className="p-5 border-[#43E1A9] border-1 rounded-xl">
                            <Image
                                src="/icons/ios.svg"
                                width={120}
                                height={75}
                                alt=""
                                className="block align-middle mx-auto mt-5"
                            />
                            <p className="inline-block align-middle mt-5 text-[1rem] lg:text-[1.5rem] text-[#E6EDF5] font-medium">IOS</p>
                        </div>
                        <div className="p-5 border-[#43E1A9] border-1 rounded-xl">
                            <Image
                                src="/icons/linux.svg"
                                width={75}
                                height={75}
                                alt=""
                                className="block align-middle mx-auto"
                            />
                            <p className="inline-block align-middle mt-3 text-[1rem] lg:text-[1.5rem] text-[#E6EDF5] font-medium">Linux</p>
                        </div>
                    </div>
                </div>

                {/* Built for Privacy Section */}
                <div className="bannerSection border-[#43E1A9] border-1 rounded-xl mt-[40px] lg:mt-[90px]">
                    <div className="flex lg:flex-row flex-col gap-5 lg:gap-0 p-7">
                        <div className="flex-1 banner_col1">
                            <h2 className="mainHeading text-[#FDFDFD] font-extrabold xl:leading-[4.25rem] lg:leading-[5rem] md:leading-[4rem] leading-[2rem] xl:text-[4rem] lg:text-[5.125rem] md:text-[4rem] xs:text-[1rem] text-[2rem]">
                                Built for Privacy from the Ground Up
                            </h2>
                            <div className="flex gap-3 mt-5">
                                <Image
                                    src="/images/feature/built_count.svg"
                                    width={25}
                                    height={200}
                                    alt="Img"
                                    className="block"
                                />
                                <span className="text-[#FDFDFD] font-normal flex flex-col gap-4 lg:text-[1.5rem] md:text-[1.250rem] text-[1rem]">
                                    <p className="align-middle">Zero ads, zero tracking</p>
                                    <p className="align-middle">No data mining – ever</p>
                                    <p className="align-middle">Full transparency on storage and access logs</p>
                                </span>
                            </div>
                            <span className="text-[#fffff] font-bold border-[#43E1A9] border-1 rounded-xl px-6 py-3 mt-5 xl:inline-block lg:inline-block md:inline-block hidden m-auto mt-1 lg:text-[1.2rem] md:text-[1.250rem] text-[1rem]">
                                <p className="inline-block align-middle">We're committed to your security and <br/> satisfaction every step of the way.</p>
                            </span>
                        </div>
                        <div className="flex-1 banner_col1">
                            <Image
                                src="/images/feature/built_privacy_img.png"
                                width={650}
                                height={500}
                                alt="Built for Privacy from the Ground Up"
                                className="block align-middle ml-auto"
                            />
                        </div>
                    </div>
                </div>

                {/* Ready to take control section */}
                <div className="bg-[#45E1AA] mt-[40px] lg:mt-[100px] mb-[40px] lg:mb-[100px] rounded-xl text-center relative">
                    <div className="pt-[80px] pb-[30px] rounded-xl ml-[20px] mt-[-20px] blur-nano" style={{background: 'linear-gradient(136.71deg, rgba(67, 67, 67, 0.86) -24.05%, rgba(0, 0, 0, 0) 115.5%)', 
                            backdropFilter: 'blur(57.76389694213867px)'}}>
                        <h2 className="mainHeading text-[#FDFDFD] font-extrabold xl:leading-[4.25rem] lg:leading-[5rem] md:leading-[4rem] leading-[2rem] xl:text-[4rem] lg:text-[5.125rem] md:text-[4rem] xs:text-[1rem] text-[2rem]">
                            Ready to take control?
                        </h2>
                        <span className="text-[#ffffff] font-normal xl:inline-block lg:inline-block md:inline-block hidden m-auto mt-1 xl:text-3xl lg:text-[1.750rem] md:text-[1.250rem] text-[1rem]">
                            <p className="inline-block align-middle">Your files. Your rules.</p>
                        </span>
                        <div className="flex justify-center mt-6">
                            <div className="max-h-[56px] min-w-[110px] max-w-[110px] md:min-w-[210px] md:max-w-[210px] flex"><Button link={'#'} text={homePageContent.like_what_button} /></div>
                        </div>

                        <Image
                            src="/images/feature/take_control_left.png"
                            width={200}
                            height={200}
                            alt="Ready to take control"
                            className="align-middle absolute top-[15px] left-[15px]"
                        />
                        <Image
                            src="/images/feature/take_control_right.png"
                            width={200}
                            height={200}
                            alt="Ready to take control"
                            className="align-middle absolute bottom-[15px] right-[15px]"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}