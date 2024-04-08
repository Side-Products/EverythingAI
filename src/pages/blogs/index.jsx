import PageWrapper from "@/layout/PageWrapper";
import { getPosts } from "src/queries/getPosts";
import { GET_POSTS } from "src/queries/getPosts";
import Image from "node_modules/next/image";
import BlogTile from "@/components/Blog/BlogTile";
import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";
import Link from "node_modules/next/link";

const Blogs = ({ posts }) => {
	console.log("length", posts.length);

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
					<BlogTile key={post.uri} post={post} />
				))}
			</div>
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const response = await client.query({
		query: GET_POSTS,
	});
	const posts = response?.data?.posts?.nodes;

	return {
		props: {
			posts,
		},
		revalidate: 60,
	};
}

export default Blogs;
