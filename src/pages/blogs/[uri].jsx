import { GET_POST } from "src/queries/getPosts";
import { client } from "@/lib/apollo";
import Head from "next/head";
import PageWrapper from "@/layout/PageWrapper";
import styles from "./uri.module.css";
import Image from "node_modules/next/image";

export default function Post({ post }) {
  console.log("post", post);

  return (
    <>
      <PageWrapper title={post.title} blog={true} description={post.title}>
        <div className="mt-10 mb-1  ">
          <Image
            loading="lazy"
            className="w-full rounded-md "
            src={post?.featuredImage?.node?.mediaItemUrl}
            width={1920}
            height={1080}
          />
        </div>
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

export async function getStaticProps({ params }) {
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
