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
export const pushPayment = async (
  id: string,
  total: number,
  date: Date,
  shipping_details: string,
  name: string,
  phone: string
) => {
  await fetchAPI(`
    mutation PushPayment{
      createPost(
        input: {categories: {nodes: {name: "payment"}}, tags: {nodes: {name: "${shipping_details}"}}, content: "${name},${total},${phone}", date: "${date}", title: "${id}"}
      ) {
        post {
          content
          contentType {
            node {
              name
            }
          }
          date
          tags {
            nodes {
              name
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  `);
};
export const getPaymentById = async (id: string) =>
  fetchAPI(`
    query GetPayment{
      categories(where: {name: "payment"}) {
        nodes {
          posts(where: {title: "${id}"}) {
            nodes {
              date
              tags {
                nodes {
                  name
                }
              }
              title
              content
            }
          }
        }
      }
    }
  `);
