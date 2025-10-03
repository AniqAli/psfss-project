'use client'; // Mark the component as a client component
import { useEffect } from 'react';
import Image from 'next/image';

// Import Swiper styles
// import 'swiper/swiper-bundle.min.css';

export default function CommitedSwiper() {

  useEffect(() => {
    // Dynamically load Swiper after the component mounts
    const Swiper = require('swiper').default;

    // Initialize Swiper with options
    new Swiper('.default-carousel', {
      loop: true, // Enable looping
      pagination: {
        el: '.commited_swiper .swiper-pagination', // Pagination dots
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next', // Next button
        prevEl: '.swiper-button-prev', // Previous button
      },
      slidesPerView: 1, // Show one slide at a time
      spaceBetween: 10, // Space between slides
    });
  }, []);

  return (
    <div className="swiper default-carousel swiper-container commited_swiper mt-5 !mx-[0px] !w-[410px]">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <span className="relative text-[#fffff] font-bold border-[#43E1A9] border-1 rounded-xl px-6 py-6 xl:inline-block lg:inline-block md:inline-block hidden m-auto mt-1 lg:text-[1.2rem] md:text-[1.250rem] text-[1rem]">
              <Image
                  src="/icons/quote-left.svg"
                  width={40}
                  height={40}
                  alt="quote icon"
                  className="block absolute left-[14px] top-[13px]"
              />
              <p className="inline-block align-middle pl-6">
                  We're committed to your security and <br/> satisfaction every step of the way.
              </p>
              <Image
                  src="/icons/quote-left.svg"
                  width={40}
                  height={40}
                  alt="quote icon"
                  className="block absolute right-[20px] bottom-[22px] rotate-180"
              />
          </span>
        </div>
        <div className="swiper-slide">
          <span className="relative text-[#fffff] font-bold border-[#43E1A9] border-1 rounded-xl px-6 py-6 xl:inline-block lg:inline-block md:inline-block hidden m-auto mt-1 lg:text-[1.2rem] md:text-[1.250rem] text-[1rem]">
              <Image
                  src="/icons/quote-left.svg"
                  width={40}
                  height={40}
                  alt="quote icon"
                  className="block absolute left-[14px] top-[13px]"
              />
              <p className="inline-block align-middle pl-6">
                  We're committed to your security and <br/> satisfaction every step of the way.
              </p>
              <Image
                  src="/icons/quote-left.svg"
                  width={40}
                  height={40}
                  alt="quote icon"
                  className="block absolute right-[20px] bottom-[22px] rotate-180"
              />
          </span>
        </div>
        <div className="swiper-slide">
          <span className="relative text-[#fffff] font-bold border-[#43E1A9] border-1 rounded-xl px-6 py-6 xl:inline-block lg:inline-block md:inline-block hidden m-auto mt-1 lg:text-[1.2rem] md:text-[1.250rem] text-[1rem]">
              <Image
                  src="/icons/quote-left.svg"
                  width={40}
                  height={40}
                  alt="quote icon"
                  className="block absolute left-[14px] top-[13px]"
              />
              <p className="inline-block align-middle pl-6">
                  We're committed to your security and <br/> satisfaction every step of the way.
              </p>
              <Image
                  src="/icons/quote-left.svg"
                  width={40}
                  height={40}
                  alt="quote icon"
                  className="block absolute right-[20px] bottom-[22px] rotate-180"
              />
          </span>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}