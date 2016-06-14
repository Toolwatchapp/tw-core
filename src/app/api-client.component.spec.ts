import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ApiClientAppComponent } from '../app/api-client.component';

beforeEachProviders(() => [ApiClientAppComponent]);

describe('App: ApiClient', () => {
  it('should create the app',
      inject([ApiClientAppComponent], (app: ApiClientAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'api-client works!\'',
      inject([ApiClientAppComponent], (app: ApiClientAppComponent) => {
    expect(app.title).toEqual('api-client works!');
  }));
});
