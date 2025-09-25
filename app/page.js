import Button from "@/components/global/Button";
import GetStartedCards from "@/components/home/GetStartedCards";
import HomeReviews from "@/components/home/Reviews";
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
    why_choose_us_heading: 'Why Users Choose Us',
    why_choose_us_para: 'Trusted by users who value privacy, security and simplicity',
  };

  const homePageReviews = [
    { review: 'OHHHH Thanks god !!!! Finally there is someone making it for  me to use on my projects. Love ya', name: 'John Williams', rating: '4.5', avatar: '/icons/home-page/avatar.png' },
    { review: 'OHHHH Thanks god !!!! Finally there is someone making it for  me to use on my projects. Love ya', name: 'John Williams', rating: '4', avatar: '/icons/home-page/avatar.png' },
    { review: 'OHHHH Thanks god !!!! Finally there is someone making it for  me to use on my projects. Love ya', name: 'John Williams', rating: '5', avatar: '/icons/home-page/avatar.png' },
    { review: 'OHHHH Thanks god !!!! Finally there is someone making it for  me to use on my projects. Love ya', name: 'John Williams', rating: '3.5', avatar: '/icons/home-page/avatar.png' },
    { review: 'OHHHH Thanks god !!!! Finally there is someone making it for  me to use on my projects. Love ya', name: 'John Williams', rating: '4', avatar: '/icons/home-page/avatar.png' },
    { review: 'OHHHH Thanks god !!!! Finally there is someone making it for  me to use on my projects. Love ya', name: 'John Williams', rating: '4.7', avatar: '/icons/home-page/avatar.png' },
  ];

  return (
    <div className="home-page">
      {/* Banner Section Start */}
      <div className="bannerSection">
        <h1 className="mainHeading text-[#FDFDFD] font-extrabold text-center m-auto xl:max-w-[70%] xl:leading-[5.125rem] lg:leading-[5rem] md:leading-[4rem] leading-[2rem] xl:text-[5.125rem] lg:text-[5.125rem] md:text-[4rem] xs:text-[1rem] text-[2rem]">
          {homePageContent.banner_heading}
        </h1>
        <div className="xl:max-w-[100%] text-center">
          <span className="text-[#FDFDFD] text-center font-bold inline-block m-auto xl:text-3xl lg:text-[1.750rem] md:text-[1.250rem] text-[1rem]">
            <p className="inline-block align-middle">{homePageContent.banner_para1}{""}</p>
            <Image
              src={homePageContent.banner_icon1}
              width={500}
              height={500}
              alt="icon"
              className="inline-block align-middle xl:w-30 lg:w-30 md:w-25 w-12 mt-[-18px] ml-[-20px]"
            />{" "}
            <p className="inline-block align-middle">{homePageContent.banner_para2}{""}</p><br className="hidden md:block lg:block xl:block" />
            <Image
              src={homePageContent.banner_icon2}
              width={500}
              height={500}
              alt="icon"
              className="inline-block align-middle xl:w-30 lg:w-30 md:w-25 w-12 xl:mt-[-5rem] lg:mt-[-5rem] md:mt-[-5rem]"
            />{""}
            <p className="inline-block align-middle xl:mt-[-3.5rem] lg:mt-[-3.5rem] md:mt-[-3.5rem]">{homePageContent.banner_para3}{""}</p>
          </span>
        </div>
        <div className="flex items-center justify-center xl:gap-20 lg:gap-15 md:gap-10 gap-5 xl:mt-5 lg:mt-5 md:mt-3 mt-5">
          <div className="xl:min-w-[240px] xl:max-w-[240px] lg:min-w-[230px] lg:max-w-[230px] md:min-w-[210px] md:max-w-[210px] w-auto flex "><Button link={'#'} text={homePageContent.banner_button1} /></div>
          <div className="xl:min-w-[240px] xl:max-w-[240px] lg:min-w-[230px] lg:max-w-[230px] md:min-w-[210px] md:max-w-[210px] w-auto flex"><Button link={'#'} text={homePageContent.banner_button2} /></div>
        </div>
      </div>
      {/* Banner Section End */}

      {/* Powerfull Features Start */}
      <div className="powerfullFeatures xl:mt-15 lg:mt-14 md:mt-10 mt-10">
        <h2 className="text-[#fdfdfd] font-extrabold text-center m-auto xl:leading-[4.2rem] lg:leading-[4.2rem] md:leading-[3.2rem] leading-[2.2rem] xl:max-w-[45%] lg:max-w-[55%] md:max-w-[55%] max-w-[80%] xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[1.9rem]">{homePageContent.powerfull_feature_heading}</h2>
      </div>
      {/* Powerfull Features End */}

      {/* Get Started Section Start */}
      <div className="GetStartedSection xl:mt-8 lg:mt-8 md:mt-6 mt-6">
        <h2 className="text-[#fdfdfd] font-extrabold text-center xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[1.9rem]">{homePageContent.get_started_section_heading}</h2>
        <p className="text-[#fdfdfd] text-center font-semibold m-auto xl:text-3xl lg:text-3xl md:text-2xl text-[1.1rem] xl:max-w-[70%] lg:max-w-[90%]">{homePageContent.get_started_section_para}</p>
        <div className="CardsWrapper flex gap-3 items-stretch xl:mt-9 lg:mt-9 md:mt-6 mt-6">
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

      {/* Why Users Choose Us Start */}
      <div className="xl:mt-15 lg:mt-14 md:mt-10 mt-10 xl:mb-20 lg:mb-20 md:mb-20 mb-13">
        <h2 className="text-[#fdfdfd] font-extrabold text-center m-auto xl:leading-[4.2rem] lg:leading-[4.2rem] md:leading-[3.2rem] leading-[2.2rem] xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[1.9rem]">{homePageContent.why_choose_us_heading}</h2>
        <p className="text-[#fdfdfd] text-center font-semibold m-auto xl:text-3xl lg:text-3xl md:text-2xl text-[1.1rem]">{homePageContent.why_choose_us_para}</p>
        <div className="xl:mt-10 lg:mt-10 md:mt-12 mt-6 relative">
          <Image src={'/images/home-page/left-pol.png'} width={500} height={500} alt="polygon" className="absolute xl:w-32 lg:w-32 md:w-32 w-16 xl:top-[-3rem] lg:top-[-3rem] md:top-[-3rem] top-[-1.5rem] left-[-1.4rem] xl:left-[-2.8rem] lg:left-[-2.8rem] md:left-[-2.8rem] z-10" />
          <div className="z-20 relative">
            <HomeReviews reviews={homePageReviews} />
          </div>
          <Image src={'/images/home-page/right-pol.png'} width={500} height={500} alt="polygon" className="absolute xl:w-32 lg:w-32 md:w-32 w-16 xl:bottom-[-3rem] lg:bottom-[-3rem] md:bottom-[-3rem] bottom-[-1.5rem] right-[-1.4rem] xl:right-[-2.8rem] lg:right-[-2.8rem] md:right-[-2.8rem] z-10" />
        </div>
      </div>
      {/* Why Users Choose Us End */}
    </div>
  );
}
