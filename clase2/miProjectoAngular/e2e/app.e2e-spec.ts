import { MiProjectoAngularPage } from './app.po';

describe('mi-projecto-angular App', function() {
  let page: MiProjectoAngularPage;

  beforeEach(() => {
    page = new MiProjectoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello World!');
  });
});
