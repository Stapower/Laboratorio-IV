import { PrototipoTablaLucasPage } from './app.po';

describe('prototipo-tabla-lucas App', () => {
  let page: PrototipoTablaLucasPage;

  beforeEach(() => {
    page = new PrototipoTablaLucasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
