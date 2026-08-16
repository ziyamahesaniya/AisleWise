import { StoreId } from "../types";

export type Store = {
  id: StoreId;
  name: string;
  categoryOrder: string[];
};

export const STORES: Store[] = [
  {
    id: "walmart",
    name: "Walmart",
    categoryOrder: [
      "Produce",
      "Dairy & Eggs",
      "Meat",
      "Bakery",
      "International Foods",
      "Pantry",
      "Baking",
      "Frozen",
      "Snacks",
      "Drinks",
    ],
  },
  {
    id: "superstore",
    name: "Real Canadian Superstore",
    categoryOrder: [
      "Produce",
      "Bakery",
      "Dairy & Eggs",
      "Meat",
      "Pantry",
      "International Foods",
      "Baking",
      "Frozen",
      "Snacks",
      "Drinks",
    ],
  },
  {
    id: "saveonfoods",
    name: "Save-On-Foods",
    categoryOrder: [
      "Produce",
      "Meat",
      "Dairy & Eggs",
      "Bakery",
      "Pantry",
      "International Foods",
      "Baking",
      "Frozen",
      "Snacks",
      "Drinks",
    ],
  },
];

export const ALL_CATEGORIES = STORES[0].categoryOrder;

export function getStoreById(id: StoreId): Store {
  return STORES.find((s) => s.id === id) ?? STORES[0];
}