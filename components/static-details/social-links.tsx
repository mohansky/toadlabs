import Heading from "@/components/styled/heading"; 
import {
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link";

export const items = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/toadlabs",
    icon: <IconBrandFacebook className="w-10 h-10" />,
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com/channel/UCOpRzSwbHON9NGsmvr2yjoA",
    icon: <IconBrandYoutube className="w-10 h-10" />,
  },

  {
    title: "Instagram",
    href: "https://www.instagram.com/toadlabs_technology_inc/",
    icon: <IconBrandInstagram className="w-10 h-10" />,
  },

  {
    title: "aedin",
    href: "https://www.aedin.com/in/toadlabs-technology-inc-376593226/",
    icon: <IconBrandLinkedin className="w-10 h-10" />,
  },
];

export default function SocialLinks() {
  return (
    <>
    <Heading size="md" className="mb-5">Follow us on</Heading> 
      <div className="relative z-10 flex justify-start space-x-5">
        {items.map((item, index) => (
          <p key={index}>
            <Link
              className="hover:text-gray-300"
              data-bs-toggle="tooltip"
              title={item.title}
              href={item.href}
              target="_blank"
            > 

              {item.icon} 
            </Link>
          </p>
        ))}
      </div>
    </>
  );
}
