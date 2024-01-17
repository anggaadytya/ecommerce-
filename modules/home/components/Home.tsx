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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

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
                        className="w-[65%] h-[70%] lg:w-[70%] lg:h-[70%] bg-red-200 rounded-[30px]"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-neutral-600 h-16 w-16" />
              <CarouselNext className="bg-neutral-600 h-16 w-16" />
            </Carousel>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="h-[50vh] py-5 container mx-auto">
        <h1 className="py-4">POPULAR</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card className="relative cursor-pointer group hover:outline rounded-xl outline-yellow-500">
            <CardContent>
              <Image
                src={IMAGE_MENU[0].img}
                alt="image"
                width={500}
                height={500}
                className="rounded-xl"
              />
            </CardContent>
            <CardFooter className="absolute bottom-0 w-full h-full rounded-xl bg-gradient-to-t from-neutral-800 to-neutral-300/10 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100">
              <div className="absolute bottom-5 text-neutral-400 transition-all ease-in-out">
                <p className="text-base font-medium">Title</p>
                <p className="text-xs ">Description</p>
              </div>
            </CardFooter>
          </Card>
          <Card className="relative cursor-pointer group hover:outline rounded-xl outline-yellow-500">
            <CardContent>
              <Image
                src={IMAGE_MENU[0].img}
                alt="image"
                width={500}
                height={500}
                className="rounded-xl"
              />
            </CardContent>
            <CardFooter className="absolute bottom-0 w-full h-full rounded-xl bg-gradient-to-t from-neutral-800 to-neutral-300/10 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100">
              <div className="absolute bottom-5 text-neutral-400 transition-all ease-in-out">
                <p className="text-base font-medium">Title</p>
                <p className="text-xs ">Description</p>
              </div>
            </CardFooter>
          </Card>
          <Card className="relative cursor-pointer group hover:outline rounded-xl outline-yellow-500">
            <CardContent>
              <Image
                src={IMAGE_MENU[0].img}
                alt="image"
                width={500}
                height={500}
                className="rounded-xl"
              />
            </CardContent>
            <CardFooter className="absolute bottom-0 w-full h-full rounded-xl bg-gradient-to-t from-neutral-800 to-neutral-300/10 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100">
              <div className="absolute bottom-5 text-neutral-400 transition-all ease-in-out">
                <p className="text-base font-medium">Title</p>
                <p className="text-xs ">Description</p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="h-[50vh]">ABOUT US</div>
    </>
  );
};

export default HomePage;
