import Heading from "@/components/styled/heading"; 
import { IconMapPin, IconPhone, IconMail } from "@tabler/icons-react";
import Link from "next/link";

export const items = [
  {
    text: [
      "#23, Muninarayanappa Complex,",
      "Bagaluru Main Road, Kothnur,",
      "New Airport Road",
      "Bengaluru- 560077 KA, India",
    ],
    href: "",
    icon: <IconMapPin className="address-icon mr-3" />,
  },
  {
    text: ["91 600 146 8694"],
    href: "tel:+916001468694",
    icon: <IconPhone className="address-icon mr-3" />,
  },
  {
    text: ["toadlabs@gmail.com"],
    href: "mailto:toadlabs@gmail.com",
    icon: <IconMail className="address-icon mr-3" />,
  },
];

export default function ContactDetails() {
  return (
    <>
    <Heading size="md" className="mb-5">Toadlabs</Heading> 
      <div className="relative z-10 space-y-5">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex hover:text-gray-300"
            title={item.href}
          >
            {item.icon}
            <div className="">
              {item.text.map((item, index) => (
                <p className="text-left" key={index}>
                  {" "}
                  {item}{" "}
                </p>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
