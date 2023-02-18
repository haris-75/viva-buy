import React from 'react';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function ProductCarousel() {
  return (
    <div className="flex flex-row gap-5">
      <div className="w-full rounded-[5px] lg:rounded-[20px]">
        <CarouselProvider
          //   naturalSlideWidth={100}
          //   naturalSlideHeight={125}
          totalSlides={5}
          visibleSlides={1}
        >
          <Slider>
            {[1, 2, 3, 4, 5]?.map((ele) => (
              <Slide index={ele} key={ele}>
                <div>
                  <img src={`/assets/featured/${ele}.png`} />
                  <p className="legend">Legend 1</p>
                </div>
              </Slide>
            ))}
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </div>
    </div>
  );
}
