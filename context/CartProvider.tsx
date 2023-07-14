import { Category, Meals, Product } from "models";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CartContext = createContext<
  | {
      cart: Array<Product>;
      setCart: React.Dispatch<React.SetStateAction<Product[]>>;
      category: Category;
      setCategory: React.Dispatch<React.SetStateAction<Category>>;
      meals: Array<Meals>;
    }
  | undefined
>(undefined);

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Array<Product>>([]);
  const [category, setCategory] = useState<Category>("makis");
  const [meals, setMeals] = useState<Meals[]>([]);

  useEffect(() => {
    fetch("/api/getItemsByCategory", {
      method: "POST",
      body: JSON.stringify({
        category: undefined,
      }),
    })
      .then((res) => res.json())
      .then(({ data }) => {
        const mealsArray = data.posts.nodes.map(
          ({
            content,
            featuredImage,
            title,
            tags,
            categories,
          }: {
            content: string;
            featuredImage: {
              node: { sourceUrl: string; altText: string };
            };
            title: string;
            tags: { nodes: Array<{ name: string }> };
            categories: { edges: Array<{ node: { name: string } }> };
          }) =>
            ({
              id: tags.nodes[0].name,
              img: featuredImage.node.sourceUrl,
              name: title,
              price: parseInt(
                content
                  .replaceAll("</p>", "")
                  .replaceAll("<p>", "")
                  .replaceAll("\n", "")
              ),
              type: categories.edges[0].node.name,
            } as Meals)
        );
        setMeals(mealsArray);
      });
  }, []);

  const value = {
    cart,
    setCart,
    category,
    setCategory,
    meals,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
