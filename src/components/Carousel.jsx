"use client";
import React from "react";
import { TypeAnimation } from 'react-type-animation';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import autoplay from "embla-carousel-autoplay";
import { profile } from "@/contants/appdata";
import { Card, CardContent } from "@/components/ui/card";
import { useSession } from "next-auth/react";

const Carousels = () => {

  return (
    <div className="">
      
      <Carousel
        plugins={[
          autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {profile?.map((slide, index) => (
            <CarouselItem
              key={index}
              style={{ backgroundImage: `url(${slide.video})` }}
              className="w-full h-auto md:h-auto sm:h-auto bg-cover bg-center bg-no-repeat relative pointer-events-none"
            >

              <div className="absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.6)] opacity-80"></div>
              <div className="">
                <div className="w-full h-[80%] md:h-[80%] flex sm:h-[100%] justify-center lg:justify-center items-center flex-col absolute">
                  <h3 className="w-[60%] mb-1 lg:mb-5 flex items-center gap-6 sm:text-3xl md:text-5xl lg:text-7xl">
                    <span className="text-third-color font-bold transition-[3s]">
                      {slide.title}
                    </span>
                  </h3>
                  <p className="w-[60%] text-white sm:text-xs md:text-xs text-start">
                    <span>
                      <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          'Drive Your Way, Anytime, Anywhere',
                          1000, // wait 1s before replacing "Mice" with "Hamsters"
                          'Your Journey, Our Wheels',
                          1000,
                          'Smooth Rides, Easy Rentals',
                          1000
                        ]}
                        wrapper="span"
                        speed={10}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={1}
                      />
                    </span>
                  </p>
                  {/* ------------- */}


                  {/* ------------------ */}
                </div>
                <video autoPlay muted loop>
                  <source src={slide.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </CarouselItem>

          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </div>
  );
};
export default Carousels;
