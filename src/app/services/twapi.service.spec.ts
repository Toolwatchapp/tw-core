import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { TwAPIService } from './twapi.service';

describe('TWAPI Service', () => {
  beforeEachProviders(() => [TwAPIService]);

  it('should ...',
      inject([TwAPIService], (service: TwAPIService) => {
    expect(service).toBeTruthy();
  }));
});
