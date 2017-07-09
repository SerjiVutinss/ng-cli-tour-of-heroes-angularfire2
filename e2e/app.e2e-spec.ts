import { NgCliTourOfHeroesAngularfire2Page } from './app.po';

describe('ng-cli-tour-of-heroes-angularfire2 App', () => {
  let page: NgCliTourOfHeroesAngularfire2Page;

  beforeEach(() => {
    page = new NgCliTourOfHeroesAngularfire2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
