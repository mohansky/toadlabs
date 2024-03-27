import { BackgroundBoxes } from "@/components/styled/bgboxes";
import { CardHoverEffect } from "@/components/styled/card-hover-effect";
import Partners from "@/components/styled/partners";
import { InfiniteMovingCardsDemo } from "@/components/styled/partners-v2";
import { ThreeDCard } from "@/components/styled/threeDcard";
import VideoSection from "@/components/styled/video-section";
import VideoSectionTwo from "@/components/styled/video-section-two";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <BackgroundBoxes />
      <VideoSection />
      <ThreeDCard />
      <VideoSectionTwo/>
      {/* <Partners/> */}
      <CardHoverEffect/>
      {/* <InfiniteMovingCardsDemo/> */}
    </main>
  );
}
