export interface totalOrder {
  order_Details: order;
  Total: number;
}
export interface order {
  name: string;
  count: number;
  Price: number;
}
