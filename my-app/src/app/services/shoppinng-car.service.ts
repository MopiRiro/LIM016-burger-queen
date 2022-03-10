import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppinngCarService {
  @Output() disparadorShoppinngCar: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
