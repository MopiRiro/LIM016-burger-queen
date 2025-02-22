import { OrderDate, Product } from "../model/order";

export interface OrderData {
    id: string;
    data : {
      clientName: string;
      table: number;
      products: Array<Product>;
      date: Array<OrderDate>;
      total?: number;
      status: string;
      startTime?: number;
      readyTime?: string;
    }

}
