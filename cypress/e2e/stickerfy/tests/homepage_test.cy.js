import { HomePage } from '../pages/HomePage';
const homePage = new HomePage();
describe('Homepage Tests', () => {
  beforeEach(() => {
    cy.visit('https://stickerfy.herokuapp.com/');
  });

  it('adds items to cart', () => {
    homePage.purchaseHappyStickers();
    homePage.purchaseAngryStickers();
    homePage.purchaseSadStickers();

    cy.get('.badge').should('have.text', 3);
  });
});
