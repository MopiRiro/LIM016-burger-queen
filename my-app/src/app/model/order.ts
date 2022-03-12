export class Order {
  clientName: string;
  table?: number;
  products: Array<Product>;

  constructor(clientName: string, table: number, products: Array<Product>) {
    this.clientName= clientName;
    this.table = table;
    this.products = products;
  }

}

export class Product {
  amount: number;
  description: string;

  constructor(amount: number, description: string) {
    this.amount = amount;
    this.description = description;
  }

}
