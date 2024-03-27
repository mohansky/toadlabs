import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

const rootDirectory = path.join(process.cwd(), 'content', 'solutions')

export const getSolutionBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { frontmatter, content } = await compileMDX<{
    draft: boolean;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    youtubeID: string;
  }>({
    source: fileContent,
    options: { parseFrontmatter: true }
  })

  return { meta: { ...frontmatter, slug: realSlug }, content }
}

export const getAllSolutionsMeta = async () => {
  const files = fs.readdirSync(rootDirectory)

  let solutions = []

  for (const file of files) {
    const { meta } = await getSolutionBySlug(file)
    solutions.push(meta)
  }

  return solutions
}