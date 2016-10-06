import { TwCommon2Page } from './app.po';

describe('tw-common-2 App', function() {
  let page: TwCommon2Page;

  beforeEach(() => {
    page = new TwCommon2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
