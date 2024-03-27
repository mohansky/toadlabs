import React from "react";
import VideoCard from "./video-card";
import { P } from "../styled-tags/p";

export default function VideoSectionTwo() {
  return (
    <section className="my-10">
      <div className="grid grid-cols-2 gap-4">
        <div className="px-10">
          <h2 className="font-bold text-4xl mb-5">HOW WE WORK</h2>
          <ul>
            <li className="mb-5">
              <h4 className="font-bold text-2xl mb-2"> Storyboarding </h4>
              <P>
                We actively engage with our partners to establish a framework of
                their requirements. We use already existing assets or also
                create content which we then use to storyboard for 3D animations
                and more.
              </P>
            </li>
            <li className="mb-5">
              <h4 className="font-bold text-2xl mb-2"> Content creation </h4>
              <P>
                With the storyboard signed off on we then get to work on
                creating high-quality engaging 3D content which will bring your
                brand to life in 3D. Our team of professionals can create 2D/3D
                animations, 3D modeling, VFX and motion graphics integrating
                your brands message.
              </P>
            </li>
            <li className="mb-5">
              <h4 className="font-bold text-2xl mb-2">Installation </h4>
              <P>
                And finally our team will install the solution at the most
                visible area at your location.
              </P>
            </li>
          </ul>
        </div>
        <VideoCard video="/videos/all3techs.mp4" />
      </div>
    </section>
  );
}
