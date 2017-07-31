import { CreativemindsPage } from './app.po';

describe('creativeminds App', () => {
  let page: CreativemindsPage;

  beforeEach(() => {
    page = new CreativemindsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
