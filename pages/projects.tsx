import Head from "next/head";
// import { GraphQLClient, gql } from "graphql-request";
import Layout from "../components/layout";
// import Project from "../components/project";
// import type { Repository } from "../lib/types";

// type Props = {
//   projects: Repository[];
// };
// export default function ProjectsPage({ projects }: Props) {
export default function ProjectsPage() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="My personal website built with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-fixed bg-cover bg-center bg-no-repeat rounded-md bg-[#F9FAFB] dark:bg-gray-900" style={{ backgroundImage: "url(../images/bluebackground.svg)" }}>
      <header>
        <h1 className="mx-auto mt-8 mb-8 max-w-6xl px-4 text-3xl font-bold text-gray-900 dark:text-gray-100 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
        <a className=" bg-white p-2 shadow-sm dark:border-0 dark:bg-gray-900 dark:text-gray-100 rounded-md "> Podcast </a>
        </h1>

      <ul className="mx-auto mb-16 max-w-5xl px-4">
        <li className="mx-auto mb-8 max-w-5xl px-4 text-2xl font-bold text-gray-900 dark:text-gray-100 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
        <a className=" bg-white p-2 shadow-sm dark:border-0 dark:bg-gray-900 dark:text-gray-100 rounded-md "> The Line Up </a>
        <iframe src="https://embed.acast.com/63d6855a93dfbe00116a43c6/644757ac2cc80100118b6dfc" frameBorder="0" width="100%" height="190px"></iframe>
        </li>
        {/* <li className="mx-auto mb-8 max-w-5xl px-4 text-2xl font-bold text-gray-900 dark:text-gray-100 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem] ">
          <a className=" bg-white p-2 shadow-sm dark:border-0 dark:bg-gray-900 dark:text-gray-100 rounded-md "> Books </a>
        </li>
        <li className="mx-auto mb-8 max-w-5xl px-4 text-2xl font-bold text-gray-900 dark:text-gray-100 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
        <a className=" bg-white p-2 shadow-sm dark:border-0 dark:bg-gray-900 dark:text-gray-100 rounded-md "> Videos </a>
        </li>
        <li className="mx-auto mb-8 max-w-5xl px-4 text-2xl font-bold text-gray-900 dark:text-gray-100 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
        <a className=" bg-white p-2 shadow-sm dark:border-0 dark:bg-gray-900 dark:text-gray-100 rounded-md "> Music </a>
        </li>
        <li className="mx-auto mb-8 max-w-5xl px-4 text-2xl font-bold text-gray-900 dark:text-gray-100 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
        <a className=" bg-white p-2 shadow-sm dark:border-0 dark:bg-gray-900 dark:text-gray-100 rounded-md "> Movies </a>
        </li> */}

    </ul>
      </header>
     
      {/* <section className="mx-auto mb-16 max-w-5xl px-4">
        <div className="grid auto-cols-max grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </section> */}
    
    </div>
    </Layout>
  );
}

export {}

// export async function getStaticProps() {
//   const endpoint = "https://api.github.com/graphql";

//   const client = new GraphQLClient(endpoint, {
//     headers: {
//       authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//     },
//   });

//   const query = gql`
//     {
//       viewer {
//         pinnedItems(first: 6) {
//           nodes {
//             ... on Repository {
//               id
//               name
//               description
//               url
//               primaryLanguage {
//                 color
//                 name
//               }
//               stargazerCount
//             }
//           }
//         }
//       }
//     }
//   `;

//   const {
//     viewer: {
//       pinnedItems: { nodes: projects },
//     },
//   } = await client.request(query);

//   return { props: { projects } };
// }
