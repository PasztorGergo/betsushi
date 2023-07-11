import { Category } from "models";

async function fetchAPI(query = "") {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(`${process.env.GQL_ENDPOINT || ""}?query=${query}`, {
    headers,
    method: "GET",
  });

  const json = await res.json();
  return json.data;
}

export const getItemsByCategory = async (category: Category) =>
  await fetchAPI(`
  query GetItemsByCategory {
    categories(where: { name: "${category}" }) {
      nodes {
        posts {
          nodes {
            content
            title
            tags {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
        name
      }
    }
  }
`);
