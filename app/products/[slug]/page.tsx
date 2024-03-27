import { P } from "@/components/styled-tags/p";
import Bounded from "@/components/styled/bounded";
import Heading from "@/components/styled/heading";
import { getProductBySlug } from "@/lib/mdx/products";
import Image from "next/image";

const getPageContent = async (slug: string) => {
  const { meta, content } = await getProductBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { meta } = await getPageContent(params.slug);
  return { title: meta.title };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { meta, content } = await getPageContent(params.slug);

  return (
    <Bounded width="marginxy">
      <div className="grid lg:grid-cols-2 gap-8">
        <Image
          src={meta.image}
          alt={meta.title}
          width={600}
          height={600}
          className="w-full"
        />
        <div>
          <Heading className="mb-5">{meta.title}</Heading>
          <Heading size="sm" className="mb-5">
            {" "}
            {meta.subtitle}
          </Heading>
          <P>{meta.description}</P>
          <div className="mt-5 prose">{content}</div>
        </div>
      </div>
      
    </Bounded>
  );
};

export default Page;
