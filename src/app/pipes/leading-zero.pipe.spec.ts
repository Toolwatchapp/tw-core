import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { LeadingZero } from './leading-zero.pipe';

describe('LeadingZero Pipe', () => {
  beforeEachProviders(() => [LeadingZero]);

  it('should transform the input', inject([LeadingZero], (pipe: LeadingZero) => {
      expect(pipe.transform(9)).toBe("09");
  }));
});
