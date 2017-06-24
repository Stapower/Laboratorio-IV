import { TPPage } from './app.po';

describe('tp App', () => {
  let page: TPPage;

  beforeEach(() => {
    page = new TPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
