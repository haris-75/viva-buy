import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

{
  /* banner that contains the carousel */
}

export default function HeroBanner(props) {
  return (
    <div className="flex flex-row gap-5">
      <div className="w-full rounded-[5px] lg:rounded-[20px]">
        <Carousel
          dynamicHeight={true}
          autoPlay={true}
          emulateTouch={true}
          infiniteLoop={true}
          centerSlidePercentage={10}
          stopOnHover={true}
          labels={false}
        >
          <div className="h-full">
            <img src="http://react-responsive-carousel.js.org/assets/5.jpeg" />
            <p className="legend">Legend 1</p>
          </div>

          <div className="h-full">
            <img src="http://react-responsive-carousel.js.org/assets/1.jpeg" />
            <p className="legend">Legend 1</p>
          </div>
        </Carousel>
      </div>
      {/*<div className="hidden lg:block">
        <div className="flex h-[360px] w-[360px] items-center justify-center rounded-[20px] border-[1px] bg-white p-5 text-center xl:h-[400px] xl:w-[400px]">
          <div>
            <p className="font-sans text-[22px] font-bold leading-10 text-black xl:text-[28px]">
              Got your own brand to share with the community?
            </p>
            <p className="mt-5 font-sans text-[18px] leading-10 text-black xl:text-[22px]">
              Join as a seller today and sell your products{" "}
              <span className="font-bold">at zero cost</span> for 6 months!
            </p>
            <div className="mt-16">
              <button className="rounded-full bg-primary px-6 py-4 font-sans text-lg font-bold text-[#FFEFEF] lg:px-20 xl:text-2xl">
                Become a seller
              </button>
            </div>
          </div>
        </div>
      </div>
  */}
    </div>
  );
}
