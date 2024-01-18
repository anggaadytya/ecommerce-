"use client";
import React, { useRef } from "react";
import { IMAGE_MENU } from "@/common/constant/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  return (
    <>
      <div className="bg-neutral-200/50 py-5 relative">
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="container mx-auto ">
          <div className="flex items-center justify-center mx-auto">
            <Carousel
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {IMAGE_MENU.map((item, index) => (
                  <CarouselItem key={index} className="">
                    <div className="flex items-center justify-center ">
                      <Image
                        src={item.img}
                        alt="image"
                        width={500}
                        height={500}
                        className="w-[70%] lg:w-[60%] bg-red-200 rounded-[30px]"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-neutral-600 h-8 w-8 md:h-14 md:w-14 lg:h-16 lg:w-16" />
              <CarouselNext className="bg-neutral-600 h-8 w-8 md:h-14 md:w-14 lg:h-16 lg:w-16" />
            </Carousel>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container mx-auto py-5 h-full">
        POPULAR
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 h-full">
          {Array.from({ length: 9 }).map((_, index) => (
            <Card
              key={index}
              className="flex gap-2 items-center justify-start cursor-pointer group hover:outline rounded-xl outline-yellow-500 p-1 w-full h-[4rem] md:h-[5rem] lg:h-[7.3rem] "
            >
              <CardContent className="h-[3rem] w-[3.5rem] md:h-[4rem] md:w-[4.5rem] lg:h-[6rem] lg:w-[7rem]">
                <Image
                  src={IMAGE_MENU[0].img}
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-xl w-full h-full object-cover"
                />
              </CardContent>
              <CardFooter className="">
                <div className="text-black ">
                  <p className="text-sm md:text-base font-medium">Title</p>
                  <p className="text-[10px] md:text-xs ">Description</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className="py-5 container mx-auto h-full">
        <div className="flex items-center gap-x-3 py-4 overflow-x-auto">
          {Array.from({ length: 5 }).map((_, index) => (
            <Button key={index} className="w-20 h-9 rounded-xl bg-yellow-500">
              Button
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 h-full">
          {Array.from({ length: 9 }).map((_, index) => (
            <Card
              key={index}
              className="relative cursor-pointer group hover:outline rounded-xl outline-yellow-500 h-[15rem] md:h-[16rem] lg:h-[17rem]"
            >
              <CardContent className="w-full h-full">
                <Image
                  src={
                    "https://res.cloudinary.com/ddugt5n5v/image/upload/v1703403483/about/certificate/certifNetwork_mqhfrc.png"
                  }
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-xl w-full h-full object-cover"
                />
              </CardContent>
              <CardFooter className="absolute bottom-0 w-full h-full rounded-xl bg-gradient-to-t from-neutral-800 to-neutral-300/10 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100">
                <div className="absolute bottom-5 text-neutral-400 transition-all ease-in-out">
                  <p className="text-base font-medium">Title</p>
                  <p className="text-xs ">Description</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
