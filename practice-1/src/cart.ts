import type { CartItem, Product } from "./types";

export const cart: CartItem[] = [];

export function addToCart(product: Product, quantity: number = 1) {
  const existingItem = cart.find((item) => item.product.id === product.id);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ product, quantity, discount: 0 });
  }
}

export function removeFromCart(productId: number) {
  const index = cart.findIndex((item) => item.product.id === productId);
  if (index !== -1) {
    cart.splice(index, 1);
  }
}

export function getCart() {
  return cart;
}

export function getCartItem(productId: number) {
    return cart.find((item) => item.product.id === productId);
}