import { gql } from "node_modules/@apollo/client/index";
import { client } from "@/lib/apollo";
import Head from "next/head";
import PageWrapper from "@/layout/PageWrapper";

export default function Post({ post }) {
  return (
    <PageWrapper title={post.title} blog={true} description={post.title}>
      <div>
        <Head>
          <title>{post.title}</title>
        </Head>
        <main>
          <br />
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </main>
      </div>
    </PageWrapper>
  );
}

const GET_POST = gql`
  query GetPostByURI($id: ID!) {
    post(id: $id, idType: URI) {
      title
      content
      date
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
