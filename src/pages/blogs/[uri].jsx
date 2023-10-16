import { gql } from "node_modules/@apollo/client/index";
import { client } from "@/lib/apollo";
import Head from "next/head";
import PageWrapper from "@/layout/PageWrapper";
import Parser from "html-react-parser";
import styles from "./uri.module.css";
import Image from "node_modules/next/image";

export default function Post({ post }) {
  console.log("post", post);

  return (
    <>
      <div className="mt-10 mb-1 mx-10">
        <Image
          loading="lazy"
          className="w-full  "
          src={post?.featuredImage?.node?.mediaItemUrl}
          width={1920}
          height={1080}
        />
      </div>

      <PageWrapper title={post.title} blog={true} description={post.title}>
        <div>
          <Head>
            <title>{post.title}</title>
          </Head>
          <main>
            <br />
            <h1 className="text-5xl my-7  font-semibold text-start">
              {post.title}
            </h1>
            <div className=" flex flex-row">
              <h1
                className="text-lg my-3 text-gray-500  font-normal
               text-left mr-4 capitalize"
              >
                {post.author.node.firstName} {post.author.node.lastName}
              </h1>

              <h1
                className="text-lg my-3 text-gray-500  font-normal
               text-left mr-4"
              >
                .
              </h1>
              {/* Date */}

              <h1
                className="text-lg my-3 text-gray-500  font-normal
               text-left mr-4"
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h1>
              <h1
                className="text-lg my-3 text-gray-500  font-normal
               text-left mr-4"
              >
                .
              </h1>
              <h1
                className="text-lg my-3 text-gray-500  font-normal
               text-left"
              >
                {post?.categories?.nodes[0]?.name}
              </h1>
            </div>

            <div
              className={styles.prose}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            {/* <div className="">{Parser(post.content)}</div> */}
          </main>
        </div>
      </PageWrapper>
    </>
  );
}

const GET_POST = gql`
  query GetPostByURI($id: ID!) {
    post(id: $id, idType: URI) {
      title
      categories {
        nodes {
          name
        }
      }
      content
      date
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      author {
        node {
          firstName
          lastName
        }
      }
    }
  }
`;

export async function getStaticProps({ params }) {
  //  the params argument for this function corresponds to the dynamic URL segments
  //  we included in our page-based route. So, in this case, the `params` object will have
  //  a property named `uri` that contains that route segment when a user hits the page
  const response = await client.query({
    query: GET_POST,
    variables: {
      id: params.uri,
    },
  });
  // const response = await getPostByUri(params.uri)
  const post = response?.data?.post;
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: "blocking",
  };
}
