import { TestBed } from '@angular/core/testing';

import { ShoppinngCarService } from './shoppinng-car.service';

describe('ShoppinngCarService', () => {
  let service: ShoppinngCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppinngCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
