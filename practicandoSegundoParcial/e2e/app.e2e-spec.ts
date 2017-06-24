import { PracticandoSegundoParcialPage } from './app.po';

describe('practicando-segundo-parcial App', () => {
  let page: PracticandoSegundoParcialPage;

  beforeEach(() => {
    page = new PracticandoSegundoParcialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
