import { fetchAPI } from "./helper";
import { gql } from "@apollo/client";
import { client } from "@/lib/apollo";

export async function getPosts() {}

export const GET_POSTS = gql`
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

export const GET_POST = gql`
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

export async function getSinglePost(id) {
  const data = await fetchAPI(
    `
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
    `,
    { id }
  );

  return data?.post;
}
