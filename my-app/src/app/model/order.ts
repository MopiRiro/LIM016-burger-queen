export class Order {
  clientName: string;
  table?: number;
  products: Array<Product>;
  date: Array<OrderDate>;

  constructor(clientName: string, table: number, products: Array<Product>, date: Array<OrderDate>) {
    this.clientName= clientName;
    this.table = table;
    this.products = products;
    this.date = date;
  }

}

export class Product {
  amount: number;
  description: string;
  aditional?: string;

  constructor(amount: number, description: string, aditional?: string) {
    this.amount = amount;
    this.description = description;
    this.aditional = aditional;
  }

}

export class OrderDate {
  monthDateYear: string;
  hourMinutes: string;

  constructor(monthDateYear: string, hourMinutes: string){
    this.monthDateYear = monthDateYear;
    this. hourMinutes= hourMinutes;
  }
}
