import { products } from "./database";
import type { Product } from "./types";

export function addProduct(productData: Product) {
	products.push(productData);
}

export function updateProduct(id: number, updateData: Partial<Product>) {
	const product = products.find((p) => p.id === id);
	if (product) {
		Object.assign(product, updateData);
	}
}

export function deleteProduct(id: number) {
	const index = products.findIndex((p) => p.id === id);
	if (index !== -1) {
		products.splice(index, 1);
	}
}