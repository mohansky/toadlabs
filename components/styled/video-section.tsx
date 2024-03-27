import React from "react";
import VideoCard from "./video-card";
import { P } from "../styled-tags/p";

export default function VideoSection() {
  return (
 
      <section className="my-10">
        <div className="grid md:grid-cols-2">
          <VideoCard video="/videos/tlvideo.mp4"/> 
          <div className="px-10 grid place-content-center">
            <h2 className="font-bold text-4xl mb-5">ADS IN THE AIR</h2>
            <P>
              3 Dimensional, slightly hypnotic holograms will soon replace two
              dimensional signages and ads. 3D Holograms will revolutionize the
              way business and brands talk to their potential customers. We
              create 3D Holographic and mixed reality display platforms for
              outdoor and indoor advertisements that display texts, animations,
              objects and anything that you can imagine free floating in the air
              that is demonstrative, dynamic, engaging, creates product
              retention, has a great recall value and an excellent revenue
              model.
            </P>
          </div>
        </div>
      </section> 
  );
}
