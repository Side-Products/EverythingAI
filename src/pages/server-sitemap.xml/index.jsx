import { getServerSideSitemapLegacy } from "next-sitemap";
import mongoose from "mongoose";
import Category from "@/backend/models/category";
import Collection from "@/backend/models/collection";
import Tool from "@/backend/models/tool";
import { GET_POSTS } from "src/queries/getPosts"; // Import the GET_POSTS query

export async function getServerSideProps(context) {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    const BASE_URL = "https://everythingai.club";

    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const categories = await Category.find();
    const collections = await Collection.find();
    const tools = await Tool.find();
    const response = await client.query({ query: GET_POSTS });
    const posts = response?.data?.posts?.nodes;

    const fields = [];

    categories.map((category) =>
      fields.push({
        loc: `${BASE_URL}/categories/${category.name.toLowerCase()}`,
        lastmod: new Date().toISOString(),
      })
    );

    collections.map((collection) =>
      fields.push({
        loc: `${BASE_URL}/collections/${collection.slug}`,
        lastmod: new Date().toISOString(),
      })
    );

    tools.map((tool) =>
      fields.push({
        loc: `${BASE_URL}/tools/${tool.slug}`,
        lastmod: new Date().toISOString(),
      })
    );

    posts.map((post) =>
      fields.push({
        loc: `${BASE_URL}/blogs/${post.uri}`, // Add each blog post to the sitemap
        lastmod: new Date().toISOString(),
      })
    );

    return getServerSideSitemapLegacy(context, fields);
  } catch (error) {
    return { notFound: true, props: {} };
  }
}

export default function ServerSitemap() {}
