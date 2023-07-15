import { Category } from "models";
import supabase from "./supabase";

async function fetchAPI(query = "") {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(`${process.env.GQL_ENDPOINT || ""}`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
    }),
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

export const getAllItems = async () =>
  fetchAPI(
    `
    query GetAllItems {
      posts {
        nodes {
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
          tags {
            nodes {
              name
            }
          }
          title
          categories {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  `
  );

export const pushPayment = async (
  id: string,
  total: number,
  date: Date,
  shipping_details: string,
  name: string,
  phone: string,
  items: string
) => {
  await supabase.from("payments").insert({
    payment_id: id,
    total,
    date,
    address: shipping_details,
    phone,
    name,
    items,
  });
};
export const getPaymentById = async (id: string) =>
  await supabase.from("payments").select("*").eq("payment_id", id);
