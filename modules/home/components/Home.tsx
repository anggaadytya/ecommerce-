"use client";
import React, { Suspense, useRef, useState } from "react";
import { BUTTON_IMAGE, IMAGE_CARD, IMAGE_MENU } from "@/common/constant/home";
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
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const HomePage = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const [selectedCategory, isSelectedCategory] = useState("all");

  const handleCategory = (category: string) => {
    isSelectedCategory(category);
  };

  const filter_card =
    selectedCategory === "all"
      ? IMAGE_CARD
      : IMAGE_CARD.filter((item) => item.category === selectedCategory);

  return (
    <>
      {/* CAROUSEL */}
      <div className="bg-neutral-200/50 py-5 relative ">
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
              className="w-full md:w-[40rem] lg:w-[60rem] h-[7.5rem] md:h-[17.5rem] lg:h-[35.1rem] flex items-center justify-center"
            >
              <CarouselContent>
                {IMAGE_MENU.map((item, index) => (
                  <CarouselItem key={index} className="w-full h-full">
                    <div className="flex items-center justify-center w-full h-full ">
                      <Suspense
                        fallback={
                          <Skeleton className="w-[14rem] md:w-[27.4rem] lg:w-[47rem] h-[7.5rem] md:h-[14rem] lg:h-[27rem] rounded-[30px] shadow bg-neutral-600 overflow-x-hidden " />
                        }
                      >
                        <Image
                          src={item.img}
                          alt="image"
                          width={500}
                          height={500}
                          className="w-[70%] lg:w-[80%] rounded-[30px] shadow shadow-neutral-600"
                          loading="lazy"
                        />
                      </Suspense>
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
      {/* POPULAR */}
      <div className="container mx-auto py-5 h-full">
        <h1 className="text-white pb-5">POPULAR</h1>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 h-full">
          {Array.from({ length: 8 }).map((_, index) => (
            <Card
              key={index}
              className="flex gap-2 items-center justify-start cursor-pointer group hover:outline rounded-xl outline-yellow-500 p-1 w-full h-[4rem] md:h-[5rem] lg:h-[7.3rem] bg-neutral-600"
            >
              <CardContent className="h-[3rem] w-[3.5rem] md:h-[4rem] md:w-[4.5rem] lg:h-[6rem] lg:w-[7rem]">
                <Image
                  src={IMAGE_MENU[0].img}
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-xl w-full h-full object-cover shadow shadow-neutral-900"
                  loading="lazy"
                />
              </CardContent>
              <CardFooter className="">
                <div className="text-white">
                  <p className="text-sm md:text-base font-medium">Title</p>
                  <p className="text-[10px] md:text-xs ">Description</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      {/* PRODUCT */}
      <div className="py-5 container mx-auto h-full">
        <div className="flex items-center gap-x-3 py-6 overflow-x-auto text-white ps-1">
          {BUTTON_IMAGE.map((item, index) => (
            <Button
              key={index}
              className={cn(
                "w-20 h-9 rounded-xl bg-neutral-400",
                selectedCategory === item.category
                  ? "outline outline-yellow-500"
                  : ""
              )}
              onClick={() => handleCategory(item.category)}
            >
              {item.title}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 h-full transition-all duration-150 ease-in-out">
          {filter_card.map((item, index) => (
            <Card
              key={index}
              className="relative cursor-pointer group hover:outline rounded-xl outline-yellow-500 h-[15rem] md:h-[16rem] lg:h-[17rem]"
            >
              <CardContent className="w-full h-full">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={500}
                  height={500}
                  className="rounded-xl w-full h-full object-cover"
                  loading="lazy"
                />
              </CardContent>
              <CardFooter className="absolute bottom-0 w-full h-full rounded-xl bg-gradient-to-t from-neutral-800 to-neutral-300/10 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100">
                <div className="absolute bottom-5 text-neutral-400 transition-all ease-in-out">
                  <p className="text-base font-medium">{item.name}</p>
                  <p className="text-xs ">{item.description}</p>
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
