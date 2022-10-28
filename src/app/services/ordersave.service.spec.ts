import { TestBed } from '@angular/core/testing';

import { OrdersaveService } from './ordersave.service';

describe('OrdersaveService', () => {
  let service: OrdersaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
