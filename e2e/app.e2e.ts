import { ApiClientPage } from './app.po';

describe('api-client App', function() {
  let page: ApiClientPage;

  beforeEach(() => {
    page = new ApiClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('api-client works!');
  });
});
