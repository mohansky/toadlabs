"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import Bounded from "./bounded";

export function ThreeDCard() {
  const serviceItems = [
    {
      title: "Products",
      subtitle:
        "Products for your brand communication needs we offer the hardware like holo fans, holo boxes, projectors, etc.",
      image: "/images/services/products.jpg",
      href: "/products",
    },
    {
      title: "3D Solutions",
      subtitle:
        "We offer a wide range of 3D Solutions for your events or brand communications that will help you communicate your message.",
      image: "/images/services/3dsolutions.jpg",
      href: "/solutions",
    },
    {
      title: "Content Creation",
      subtitle:
        "Our team can create 2D/3D animations, 3D modeling, VFX and motion graphics integrating your brands message.",
      image: "/images/services/content1.jpg",
      href: "/",
    },
  ];
  return (
    <>
      <Bounded width="marginxy">
        <div className="grid lg:grid-cols-3 gap-4 ">
          {serviceItems.map((serviceItem: any, index: number) => (
            <CardContainer key={index}>
              <CardBody 
              className="bg-card relative group/card 
              dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
              w-auto h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-primary dark:text-primary"
                >
                  {serviceItem.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {serviceItem.subtitle}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={serviceItem.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={serviceItem.href}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Learn more →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </Bounded>
    </>
  );
}
