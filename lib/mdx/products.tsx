import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const rootDirectory = path.join(process.cwd(), 'content', 'products');

export const getProductBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX<{
    draft: boolean;
    weight: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
  }>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const getAllProductsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let products = [];

  for (const file of files) {
    const { meta } = await getProductBySlug(file);
    products.push(meta);
  }

  return products;
};
