import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { of } from 'rxjs';

describe('DataService', () => {

  let serviceGet: DataService; let httpClientSpyGet: { get: jasmine.Spy };


  beforeEach(() => {
    httpClientSpyGet = jasmine.createSpyObj('HttpClient', ['get']);
    serviceGet = new DataService(httpClientSpyGet as any);
  });

  it('should be created', () => {
    expect(serviceGet).toBeTruthy();
  });

  it('Should be get users', (done: DoneFn) => {
    const mockUserResult = {
      id:"p01",
      description:"makis maracuya",
      precio : "23",
      img: "https://cdn.cuponidad.pe/images/Deals/akita-makis1.jpg",
      tipo: "principal",
      menu: ["Personal"]
  };
    httpClientSpyGet.get.and.returnValue(of(mockUserResult));
    serviceGet.getJSON().subscribe((res: any) => {
      expect(res).toEqual(mockUserResult);
    });
    done();
  });
});
