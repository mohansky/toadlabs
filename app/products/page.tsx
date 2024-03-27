// "use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllProductsMeta } from "@/lib/mdx/products";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import GradientHeading from "@/components/styled/gradient-heading";
import Bounded from "@/components/styled/bounded";

const ProductsPage = async () => {
  const products = (await getAllProductsMeta()).sort((product1, product2) =>
    product1.weight > product2.weight ? 1 : -1
  );

  return (
    <Bounded width="marginxy">
      <div className="text-center mb-10">
        <GradientHeading>Products</GradientHeading>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        {products?.map((product) => (
          <Link href={`products/${product.slug}`} key={product.title}>
            <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={product.image}
                alt="jordans"
                height="600"
                width="600"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {product.title}
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {product.subtitle}
              </p>
              <Button className="mt-3 "> Read more </Button>
            </BackgroundGradient>
          </Link>
        ))}
      </div>
    </Bounded>
  );
};

export default ProductsPage;
