import { BootstrapClassPage } from './app.po';

describe('bootstrap-class App', function() {
  let page: BootstrapClassPage;

  beforeEach(() => {
    page = new BootstrapClassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
