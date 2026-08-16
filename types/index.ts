export type StoreId = "walmart" | "superstore" | "saveonfoods";

export type ShoppingItem = {
  id: string;
  user_id: string;
  name: string;
  quantity: string;
  category: string;
  completed: boolean;
  created_at: string;
};

export type PriceType = "regular" | "sale";

export type PriceRecord = {
  id: string;
  user_id: string;
  product_name: string;
  store: StoreId;
  price: number;
  price_type: PriceType;
  recorded_date: string;
  created_at: string;
};

export type RecurringItem = {
  id: string;
  user_id: string;
  name: string;
  category: string;
  default_quantity: string;
  created_at: string;
};