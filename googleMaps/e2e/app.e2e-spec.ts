import { GoogleMapsPage } from './app.po';

describe('google-maps App', function() {
  let page: GoogleMapsPage;

  beforeEach(() => {
    page = new GoogleMapsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
