export class ApiClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('api-client-app h1')).getText();
  }
}
