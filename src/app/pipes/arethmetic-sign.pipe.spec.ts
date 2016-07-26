import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { ArethmeticSign } from './arethmetic-sign.pipe';

describe('ArethmeticSign Pipe', () => {
  beforeEachProviders(() => [ArethmeticSign]);

  it('should transform the input', inject([ArethmeticSign], (pipe: ArethmeticSign) => {
      expect(pipe.transform(0)).toBe(null);
  }));
});
