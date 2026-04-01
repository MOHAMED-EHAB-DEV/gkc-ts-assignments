import type { IOrder } from "./types";
import { OrderService } from "./OrderService";
import { OrderNotification } from "./OrderNotification";
import { OrderSales } from "./OrderSales";

const orderService = new OrderService();
const orderNotification = new OrderNotification();
const orderSales = new OrderSales();

export class Order {
    constructor(public order: IOrder) {}

    createOrder() {
        const orderTotal = orderSales.calculateTotal(this.order.price, this.order.count);
        const order = orderService.saveToDB({
            total: orderTotal,
            ...this.order
        });
        orderNotification.sendNotification(this.order.owner._id, this.order.id);
        orderNotification.sendEmail(this.order.owner.email, this.order.id);

        setTimeout(() => console.log(`order with id :${this.order.id} processed`), 1500);
    }
}
