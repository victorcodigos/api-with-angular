import { TestBed } from '@angular/core/testing';

import { OperatingSystemService } from './operating-systems.service';

describe('TodoService', () => {
  let service: OperatingSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperatingSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
