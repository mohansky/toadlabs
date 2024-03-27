import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <>
      <section className="my-20">
        <h2 className="text-center font-bold text-4xl">OUR PARTNERS</h2>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </section>
    </>
  );
}
export const projects = [
  {
    title: "Dark Knight",
    description: "Dark Knight",
    link: "#",
    alt: "DK_Logo",
    image: "/images/partners/DK_Logo.png",
  },
  {
    title: "G Shock",
    description: "G Shock",
    link: "https://gshock.casio.com/in/",
    alt: "gshock",
    image: "/images/partners/gshock.png",
  },
  {
    title: "IIT-Guwahati",
    description: "IIT-Guwahati",
    link: "https://www.iitg.ac.in/",
    alt: "IIT-Guwahati",
    image: "/images/partners/IIT-Guwahati.png",
  },
  {
    title: "JK Cement ltd",
    description: "JK Cement ltd",
    link: "https://www.jkcement.com/",
    alt: "jk-cement-ltd",
    image: "/images/partners/jk-cement-ltd.png",
  },
  {
    title: "Pepsi MTV",
    description: "Pepsi MTV",
    link: "http://www.pepsimtvindies.com/",
    alt: "Pepsi-MTV",
    image: "/images/partners/Pepsi-MTV.png",
  },
  {
    title: "Rolling Stone",
    description: "Rolling Stone",
    link: "https://www.rollingstone.com/",
    alt: "rollingstone",
    image: "/images/partners/rollingstone.png",
  },
];
