import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';
const cartPage = new CartPage();
const homePage = new HomePage();
describe('Cart Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://stickerfy.herokuapp.com/');
  });

  it('remove item from cart', () => {
    homePage.purchaseHappyStickers();
    homePage.purchaseAngryStickers();
    homePage.purchaseSadStickers();

    cartPage.removeOneItem();

    cy.get('a > .badge').should('have.text', 2);
  });
});
