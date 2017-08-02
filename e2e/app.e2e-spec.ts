import { DesignsCorpPage } from './app.po';

describe('designs-corp App', () => {
  let page: DesignsCorpPage;

  beforeEach(() => {
    page = new DesignsCorpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
