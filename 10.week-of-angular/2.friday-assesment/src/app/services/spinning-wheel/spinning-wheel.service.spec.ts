import { TestBed } from '@angular/core/testing';

import { SpinningWheelService } from './spinning-wheel.service';

describe('SpinningWheelService', () => {
  let service: SpinningWheelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinningWheelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
