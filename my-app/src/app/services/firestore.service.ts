import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  sendOrdeFireStore(order: any): Promise<any> {
    return this.firestore.collection('orders').add(order);
  }
}
