import { fetchAPI } from "./helper";
import { gql } from "@apollo/client";
import { client } from "@/lib/apollo";

export async function getPosts() {}

export const GET_POSTS = gql`
  query AllPosts {
    posts(first: 20) {
      edges {
        node {
          title
          id
          categories {
            edges {
              node {
                name
              }
            }
          }
          excerpt
          slug
          author {
            node {
              name
              firstName
              lastName
            }
          }
          featuredImage {
            node {
              mediaItemUrl
              link
              sizes
            }
          }
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
