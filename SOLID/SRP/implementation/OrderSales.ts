export class OrderSales {
    calculateTotal(price: number, count: number): number {
        return count >= 10 ? price * count * 0.9 : price * count;
    }
}