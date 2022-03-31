import { PipeOrderStatusPipe } from './pipe-order-status.pipe';
import { OrderData } from '../interfaces/order-data';


describe('PipeOrderStatusPipe', () => {

  const pipe = new PipeOrderStatusPipe();

  const arrayOrders: OrderData[] = [
    {id: 'XNoL0uWODbsaz7fhXsts', 
    data: {
    clientName: "Luz",
    date: [
      {hourMinutes: '12:32', 
      monthDateYear: '30/3/2022'}],
    products: [{
      description: 'Paquete 48 + 6 alitas',
      amount: 2}],
    readyTime: "18:16:44",
    startTime: 1648674623899,
    status: "Ready",
    table: 2
      }
    },
    {id: '98LCIeJdpvzqWy28hCZB', 
    data: {
      clientName: "Nadya",
      date: [{
        monthDateYear: '29/3/2022', 
        hourMinutes: '22:20'
      }],
      products: [{
        description: 'Promo: 2 Sandwich Furai', amount: 2}],
      readyTime: "00:24:20",
      startTime: 1648649840753,
      status: "Delivered",
      table: 2,
      }
    },
    {id: 'ImJKNWOvyFI61oZLGL50', 
    data: {
      clientName: "Luz Prueba",
      date: [{
        hourMinutes: '16:49', 
        monthDateYear: '24/3/2022'}],
      products: [
        {description: 'makis maracuya', amount: 1}, {description: 'makis california',amount: 1,}
      ],
      readyTime: "03:12:47",
      startTime: 1648662143994,
      status: "Ready",
      table: 5,
      }
    },
  ]


  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  //Debes retornar un array filtrado por estatus
  it('Debes retornar un array filtrado por estatus', () => {
    expect(pipe.transform(arrayOrders, 'Ready').length).toEqual(2);
  });
});
