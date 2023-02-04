import { useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

const Post = ({ source, frontMatter }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <MDXProvider>
      <h1>{frontMatter.title}</h1>
      {source}
    </MDXProvider>
  )
}

export const getStaticProps = async ({ params }) => {
  const { default: source, frontMatter } = await import(`./posts/${params.slug}.mdx`)

  return {
    props: {
      source,
      frontMatter: {
        ...frontMatter,
        title: frontMatter.title || params.slug
      }
    }
  }
}

export const getStaticPaths = async () => {
  const blogSlugs = (await import('./posts/index.mdx')).frontMatter.posts.map(post => post.slug)

  return {
    paths: blogSlugs.map(slug => `/posts/${slug}`),
    fallback: false
  }
}

export default Post
