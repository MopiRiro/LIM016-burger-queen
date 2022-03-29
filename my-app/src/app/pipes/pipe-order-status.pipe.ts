import { Pipe, PipeTransform } from '@angular/core';
import { OrderData } from '../interfaces/order-data';

@Pipe({
  name: 'pipeOrderStatus'
})
export class PipeOrderStatusPipe  implements PipeTransform {

  transform(values: OrderData[], args: string): OrderData[] {
    let result: OrderData [] = [];
    if (args != '') {
      result = values.filter((e: OrderData) => e.data.status == args)
    }
    return result
  }


}
