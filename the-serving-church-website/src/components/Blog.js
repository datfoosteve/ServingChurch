function BlogPost(props) {
    const { content, data } = matter(props.source)
  
    // Render the content and access the metadata through the data object
    return (
      <div>
        <h1>{data.title}</h1>
        <div>{content}</div>
      </div>
    )
  }
  
  export async function getStaticProps({ params }) {
    const source = await import(`../posts/${params.slug}.md`)
    return {
      props: {
        source: source.default
      }
    }
  }
  
  export async function getStaticPaths() {
    // ...
  }