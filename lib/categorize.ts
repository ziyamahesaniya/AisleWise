import { PRODUCT_CATEGORY_MAP, DEFAULT_CATEGORY } from "../data/product-categories";

export function guessCategory(productName: string): string {
  const key = productName.trim().toLowerCase();
  if (!key) return DEFAULT_CATEGORY;

  if (PRODUCT_CATEGORY_MAP[key]) {
    return PRODUCT_CATEGORY_MAP[key];
  }

  const matches = Object.keys(PRODUCT_CATEGORY_MAP).filter((mapKey) => key.includes(mapKey));
  if (matches.length > 0) {
    matches.sort((a, b) => b.length - a.length);
    return PRODUCT_CATEGORY_MAP[matches[0]];
  }

  return DEFAULT_CATEGORY;
}