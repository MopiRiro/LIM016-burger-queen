import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  sendOrdeFireStore(order: Order): Promise<DocumentReference<any>> {
    return this.firestore.collection('orders').add(
      {clientName: order.clientName, table: order.table, products: JSON.parse(JSON.stringify(order.products)), date: JSON.parse(JSON.stringify(order.date))});
  }
}
