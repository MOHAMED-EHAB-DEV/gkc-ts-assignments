import type { IOrderWithTotal } from "./types";

export class OrderService {
    saveToDB(order: IOrderWithTotal) {
        setTimeout(() => {
            console.log(`order : ${order} saved to DB`);
        }, 1000);
    }
}