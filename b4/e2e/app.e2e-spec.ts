import { B4Page } from './app.po';

describe('b4 App', function() {
  let page: B4Page;

  beforeEach(() => {
    page = new B4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
