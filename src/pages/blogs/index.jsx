import PageWrapper from "@/layout/PageWrapper";
import { getPosts } from "src/queries/getPosts";
import Image from "node_modules/next/image";
import BlogTile from "@/components/Blog/BlogTile";
import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";
import Link from "node_modules/next/link";

const Blogs = ({ posts }) => {
  console.log("posts", posts);
  return (
    <PageWrapper
      title={"Blogs| Everything AI"}
      description={
        "Browse 4,000+ AI tools in 70+ categories and subcategories like marketing, sales, content writing, coding, etc. Find the one for you on Everything AI."
      }
    >
      <h1 className="text-4xl my-7  font-semibold text-center">Blogs</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {posts.map((post) => (
          <>
            <Link href={`/blogs/${post.uri}`}>
              <div className="border-solid border-2   flex flex-col justify-center items-center rounded-sm bg-slate-50 shadow-lg my-5">
                <Image
                  className="w-full h-full object-fit"
                  src={post?.featuredImage?.node?.mediaItemUrl}
                  width={300}
                  height={300}
                />
                <h1 className="text-lg font-semibold my-4 text-center">
                  {post.title}
                </h1>
              </div>
            </Link>
          </>
        ))}
      </div>
    </PageWrapper>
  );
};

export async function getStaticProps() {
  // Paste your GraphQL query inside of a gql tagged template literal
  const GET_POSTS = gql`
    query AllPostsQuery {
      posts {
        nodes {
          title
          content
          date
          uri
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  `;
  // Here we make a call with the client and pass in our query string to the
  // configuration objects 'query' property
  const response = await client.query({
    query: GET_POSTS,
  });
  // Once we get the response back, we need to traverse it to pull out the
  // data we want to pass into the HomePage
  const posts = response?.data?.posts?.nodes;

  return {
    props: {
      posts,
    },
  };
}

export default Blogs;
