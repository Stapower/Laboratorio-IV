import { ArganarasTPPage } from './app.po';

describe('arganaras-tp App', function() {
  let page: ArganarasTPPage;

  beforeEach(() => {
    page = new ArganarasTPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
