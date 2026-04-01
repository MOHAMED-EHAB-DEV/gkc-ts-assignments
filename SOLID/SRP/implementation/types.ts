export interface IOrder {
  id: number;
  title: string;
  price: number;
  count: number;
  owner: {
    _id: string;
    email: string;
  }
}

export interface IOrderWithTotal extends IOrder {
    total: number;
}