import { P } from "@/components/styled-tags/p";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GradientHeading from "@/components/styled/gradient-heading";

export default function About() {
  return (
    <>
      <main>
        <section className=" m-20">
          <div className="mx-auto text-center mb-10">
            <GradientHeading as="h1" className="text-center mb-10">
              About Us
            </GradientHeading>
          </div>

          <Card className="relative w-full md:w-2/3 lg:w-1/2 mx-auto p-5">
            <CardHeader>
              <CardTitle>About Us</CardTitle>
            </CardHeader>

            <CardContent className="text-justify">
              <P className="indent-8 mb-5 ">
                We are a holographic/mixed reality solution company that
                enhances the connection between your business or organization
                and your consumers through cutting-edge 3D visualization
                technology in real-time. Our services include creating 3D
                holographic solutions for outdoor and indoor advertising,
                transforming glass windows into digital holographic screens,
                developing 3D life-size virtual avatars, and crafting
                holographic/mixed reality presentations, speeches, campaigns,
                and event holograms. Our vision is to revolutionize brand
                communication while ensuring accessibility to a wider audience.
              </P>

              <P className="indent-8 mb-5">
                Toadlabs Technology Inc. was established in 2015 by Rajat Bangia
                in Guwahati as a visual production and event management company.
                In 2021, we relocated our headquarters to Bangalore. Initially
                focusing on event organization and coverage, we recognized the
                potential of holographic technology to elevate branding
                experiences for our clients. Delving deeper into holography, we
                discovered innovative solutions that allow viewers to experience
                products and content in mesmerizing 3D without the need for
                glasses. We believe that this technology can fundamentally
                transform how brands engage with their audiences.
              </P>
              <P className="indent-8 mb-5 ">
                At Toadlabs, we offer tailor-made solutions such as holo boxes,
                holographic signage, billboards, mid-air projections,
                interactive holographic platforms, and mixed reality solutions.
                With our expertise, the creation of your brand&apos;s content is
                limited only by your imagination.
              </P>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
}
