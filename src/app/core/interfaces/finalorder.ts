export interface Finalorder {
  order: Order;
  details: Details;
}
interface Details {
  Clint_Name: string;
  Clint_Email: string;
  Clint_Phone: string;
  Clint_Address: string;
  Clint_Remarks: string;
}
export interface Order {
  order_Details: OrderDetail[];
  Total: number;
}
interface OrderDetail {
  name: string;
  count: number;
  Price: number;
}
