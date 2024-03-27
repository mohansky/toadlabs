import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function BentoGridDemo({items}: any) {
  return (
    <BentoGrid className="max-w-7xl mx-auto">
      {items.map((item: any, i: number) => (
        <BentoGridItem
          key={i}
          title={item.title}
          subtitle={item.subtitle} 
          icon={item.icon}
          image={item.image}
          href={`solutions/${item.slug}`}
        />
      ))}
    </BentoGrid>
  );
}