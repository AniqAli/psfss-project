import Button from "@/components/global/Button";
import GetStartedCards from "@/components/home/GetStartedCards";
import Image from "next/image";

export default function Home() {

  const homePageContent = {
    banner_heading: 'Your Private Cloud. Secure, Simple, Yours.',
    banner_para1: 'Securely upload, share, and manage your files',
    banner_para2: 'with',
    banner_para3: 'no privacy compromise and seamless sync to your preferred device',
    banner_icon1: '/icons/home-page/banner-file.png',
    banner_icon2: '/icons/home-page/banner-lock.png',
    banner_button1: 'Start For Free',
    banner_button2: 'Explore Premium Features',
    powerfull_feature_heading: 'Powerful Features at Your Fingertips.',
    get_started_section_heading: 'Get Started in Minutes',
    get_started_section_para: 'Upload, manage, and access your files instantly—with built-in privacy and effortless control.',
    get_started_card_1_heading: 'Upload Your files',
    get_started_card_1_text: 'Drag and drop your file with secure encryption',
    get_started_card_1_icon: '/icons/home-page/get-started-1.png',
    get_started_card_2_heading: 'Share Securely',
    get_started_card_2_text: 'Instantly generate a secure link you can copy and send to anyone',
    get_started_card_2_icon: '/icons/home-page/get-started-2.png',
    get_started_card_3_heading: 'Control Access',
    get_started_card_3_text: 'Set password protection and privacy settings',
    get_started_card_3_icon: '/icons/home-page/get-started-3.png',
    get_started_card_4_heading: 'Sync to Your Device',
    get_started_card_4_text: 'Synced files are automatically updated on your chosen device',
    get_started_card_4_icon: '/icons/home-page/get-started-4.png',

  };

  return (
    <div className="home-page">
      {/* Banner Section Start */}
      <div className="bannerSection">
        <h1 className="mainHeading text-[#FDFDFD] font-extrabold text-center m-auto xl:max-w-[70%] xl:leading-[5.125rem] lg:leading-[5rem] md:leading-[4rem] leading-[2rem] xl:text-[5.125rem] lg:text-[5.125rem] md:text-[4rem] xs:text-[1rem] text-[2rem]">
          {homePageContent.banner_heading}
        </h1>
        {/*--<span className="flex items-center gap-2 font-bold text-[#FDFDFD] xl:text-3xl">
          {homePageContent.banner_para1}
          <Image src={homePageContent.banner_icon1} width={500} height={500} className="w-20" alt="File Icon" />
          {homePageContent.banner_para2}
          <Image src={homePageContent.banner_icon2} width={500} height={500} className="w-20" alt="Lock Icon" />
          {homePageContent.banner_para3}
        </span>*/}
        <div className="flex items-center justify-center xl:gap-20 lg:gap-15 md:gap-10 gap-5 xl:mt-10 lg:mt-10 md:mt-10 mt-5">
          <div className="xl:min-w-[240px] xl:max-w-[240px] lg:min-w-[230px] lg:max-w-[230px] md:min-w-[210px] md:max-w-[210px] w-auto flex "><Button link={'#'} text={homePageContent.banner_button1} /></div>
          <div className="xl:min-w-[240px] xl:max-w-[240px] lg:min-w-[230px] lg:max-w-[230px] md:min-w-[210px] md:max-w-[210px] w-auto flex"><Button link={'#'} text={homePageContent.banner_button2} /></div>
        </div>
      </div>
      {/* Banner Section End */}

      {/* Powerfull Features Start */}
      <div className="powerfullFeatures xl:mt-12 lg:mt-12 md:mt-10 mt-10">
        <h2 className="text-[#fdfdfd] font-extrabold text-center m-auto xl:leading-[4.2rem] lg:leading-[4.2rem] md:leading-[3.2rem] leading-[2.2rem] xl:max-w-[45%] lg:max-w-[55%] md:max-w-[55%] max-w-[80%] xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[2rem]">{homePageContent.powerfull_feature_heading}</h2>
      </div>
      {/* Powerfull Features End */}

      {/* Get Started Section Start */}
      <div className="GetStartedSection xl:mt-8 lg:mt-8 md:mt-6 mt-6">
        <h2 className="text-[#fdfdfd] font-extrabold text-center xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[2rem]">{homePageContent.get_started_section_heading}</h2>
        <p className="text-[#fdfdfd] text-center font-semibold m-auto xl:text-3xl lg:text-3xl md:text-2xl text-lg xl:max-w-[70%] lg:max-w-[90%]">{homePageContent.get_started_section_para}</p>
        <div className="CardsWrapper flex gap-3 items-stretch xl:mt-8 lg:mt-8 md:mt-6 mt-6">
          <div className="card1 card flex-1 flex flex-col">
            <div className="heading text-[#43E1A9] font-extrabold xl:text-8xl lg:text-8xl xl:mb-[-1.60rem] lg:mb-[-1.60rem] flex items-center w-full">
              01
              <Image src='/images/home-page/get-started-line.png' width={500} height={500} alt="line" className="xl:w-[200px] lg:w-[125px] object-cover" />
            </div>
            <GetStartedCards heading={homePageContent.get_started_card_1_heading} text={homePageContent.get_started_card_1_text} icon={homePageContent.get_started_card_1_icon} />
          </div>
          <div className="card2 card flex-1 flex flex-col">
            <div className="heading text-[#43E1A9] font-extrabold xl:text-8xl lg:text-8xl xl:mb-[-1.60rem] lg:mb-[-1.60rem] flex items-center w-full">
              02
              <Image src='/images/home-page/get-started-line.png' width={500} height={500} alt="line" className="xl:w-[200px] lg:w-[125px] object-cover" />
            </div>
            <GetStartedCards heading={homePageContent.get_started_card_2_heading} text={homePageContent.get_started_card_2_text} icon={homePageContent.get_started_card_2_icon} />
          </div>
          <div className="card3 card flex-1 flex flex-col">
            <div className="heading text-[#43E1A9] font-extrabold xl:text-8xl lg:text-8xl xl:mb-[-1.60rem] lg:mb-[-1.60rem] flex items-center w-full">
              03
              <Image src='/images/home-page/get-started-line.png' width={500} height={500} alt="line" className="xl:w-[200px] lg:w-[125px] object-cover" />
            </div>
            <GetStartedCards heading={homePageContent.get_started_card_3_heading} text={homePageContent.get_started_card_3_text} icon={homePageContent.get_started_card_3_icon} />
          </div>
          <div className="card4 card flex-1 flex flex-col">
            <div className="heading text-[#43E1A9] font-extrabold xl:text-8xl lg:text-8xl xl:mb-[-1.60rem] lg:mb-[-1.60rem] flex items-center w-full">
              04
            </div>
            <GetStartedCards heading={homePageContent.get_started_card_4_heading} text={homePageContent.get_started_card_4_text} icon={homePageContent.get_started_card_4_icon} />
          </div>
        </div>
      </div>
      {/* Get Started Section End */}
    </div>
  );
}
