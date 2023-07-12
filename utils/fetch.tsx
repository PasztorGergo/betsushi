import { Category } from "models";

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
export const pushPayment = async (
  id: string,
  total: number,
  date: Date,
  shipping_details: string,
  name: string,
  phone: string
) =>
  await fetch(`${process.env.SUPABASE_URL}/graphql/v1`, {
    method: "POST",
    headers: {
      apikey: `${process.env.SUPABASE_ANON_KEY}`,
      authorization: `Bearer ${process.env.SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({
      query: `
        mutation PushPayment{
          insertIntopaymentsCollection(objects:{date: ${date}, phone: "${phone}", name:"${name}", total:${total}, address:"${shipping_details}", payment_id:"${id}"}){
            records{
              date,
              phone,
              name,
              total,
              address,
              payment_id
            }
          }
        }
      `,
    }),
  });
export const getPaymentById = async (id: string) =>
  await fetch(`${process.env.SUPABASE_URL}/graphql/v1`, {
    method: "POST",
    headers: {
      apikey: `${process.env.SUPABASE_ANON_KEY}`,
      authorization: `Bearer ${process.env.SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({
      query: `
      query GetPaymentByID{
        paymentsCollection(filter:{payment_id: {
          eq:"${id}"
        }}){
          edges{
            node{
              phone,
              name,
              total,
              address
            }
          }
        }
      }
    `,
    }),
  });
