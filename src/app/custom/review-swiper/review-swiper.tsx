import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './review-swiper.component.css';

// import required modules
import { Navigation } from 'swiper/modules';

const ReviewSwiper = () => {
  return (
    <>
      <Swiper
        navigation={false}
        modules={[Navigation]}
        loop
        className="max-w-5xl h-fit flex flex-col justify-center items-start"
      >
        <SwiperSlide className="flex flex-col justify-start items-center text-left">
          <div>
            <div className="font-extralight leading-relaxed">
              “I absolutely love the products I purchased from this boutique!
              The quality is exceptional, and my skin has never looked better.
              The packaging is also beautiful, making it a luxurious experience
              every time I use them. Highly recommend!”
            </div>
            <div className="mt-15 flex flex-row justify-start items-center text-left">
              <img
                src="../../assets/images/review-img01.png"
                alt=""
                className="w-18 max-w-18 h-18"
              />
              <div className="review-data mx-3">
                <h2 className="text-lg font-normal">Cody Fisher</h2>
                <p className="font-light text-sm">New York, USA</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-start items-center text-left font-extralight leading-relaxed">
          <div>
            <div className="font-extralight leading-relaxed">
              "I've been using this serum for a few weeks now and I can already
              see a difference in the texture and tone of my skin. It feels
              smoother and looks brighter. The serum is lightweight and absorbs
              quickly into my skin, so I don't feel like I have a heavy layer on
              my face".
            </div>
            <div className="mt-15 flex flex-row justify-start items-center text-left">
              <img
                src="../../assets/images/review-img02.png"
                alt=""
                className="w-18 max-w-18 h-18"
              />
              <div className="review-data mx-3">
                <h2 className="text-lg font-normal">Carol Danvers</h2>
                <p className="font-light text-sm">New York, USA</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-start items-center text-left font-extralight leading-relaxed">
          <div>
            <div className="font-extralight leading-relaxed">
              "I've been using this serum for over a month now and I can
              confidently say it's made a huge difference in my skin. My fine
              lines and wrinkles have visibly reduced, and my skin looks more
              hydrated and plump".
            </div>
            <div className="mt-15 flex flex-row justify-start items-center text-left">
              <img
                src="../../assets/images/review-img03.png"
                alt=""
                className="w-18 max-w-18 h-18"
              />
              <div className="review-data mx-3">
                <h2 className=" text-lg font-normal">Carol Danvers</h2>
                <p className="font-light text-sm">Chelyabinsk</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-start items-center text-left font-extralight leading-relaxed">
          <div>
            <div className="font-extralight leading-relaxed">
            "Shopping at this boutique is always a delight. The ambiance is
          inviting, and the staff is knowledgeable about the latest trends. They
          have an eye for selecting beautiful and high-quality items".
            </div>
            <div className="mt-15 flex flex-row justify-start items-center text-left">
              <img
                src="../../assets/images/review-img04.png"
                alt=""
                className="w-18 max-w-18 h-18"
              />
              <div className="review-data mx-3">
                <h2 className="text-lg font-normal">
                Natasha Romanoff</h2>
                <p className="font-light text-sm">New York, USA</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ReviewSwiper;