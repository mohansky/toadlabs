import Image from "next/image";
import React from "react";

export default function Partners() {
  const partnersItems = [
    {
      name: "Dark Knight",
      alt: "DK_Logo",
      image: "/images/partners/DK_Logo.png",
    },
    {
      name: "G Shock",
      alt: "gshock",
      image: "/images/partners/gshock.png",
    },
    {
      name: "IIT-Guwahati",
      alt: "IIT-Guwahati",
      image: "/images/partners/IIT-Guwahati.png",
    },
    {
      name: "JK Cement ltd",
      alt: "jk-cement-ltd",
      image: "/images/partners/jk-cement-ltd.png",
    },
    {
      name: "Pepsi MTV",
      alt: "Pepsi-MTV",
      image: "/images/partners/Pepsi-MTV.png",
    },
    {
      name: "Rolling Stone",
      alt: "rollingstone",
      image: "/images/partners/rollingstone.png",
    },
  ];
  return (
    <section className="my-10">
        <h2 className="text-center font-bold text-4xl">OUR PARTNERS</h2>
        <div className="grid grid-cols-3 gap-4 my-10 max-w-6xl mx-auto">
          {partnersItems.map((partner, index) => {
            return (
              <div
                className="mx-auto"
                key={index}
              >
                <Image alt={partner.alt} src={partner.image} width={200} height={200} />
              </div>
            );
          })}
        </div> 
    </section>
  );
}
