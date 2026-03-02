import type { CartItem, PaymentMethod, Reciept } from "./types";

export function buildReciept(items: CartItem[], payment: PaymentMethod): Reciept {
	const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
	return {
		items,
		total,
		payment,
		status: "pending",
		data: new Date().toISOString(),
	};
}

export function printReciept(reciept: Reciept) {
	console.log(reciept);
}