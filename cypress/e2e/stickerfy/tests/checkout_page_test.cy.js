import { CheckoutPage } from '../pages/CheckoutPage';
import { HomePage } from '../pages/HomePage';
const homePage = new HomePage();
const checkOut = new CheckoutPage();
describe('CheckoutPage Tests', () => {
  beforeEach(() => {
    cy.visit('https://stickerfy.herokuapp.com/');
  });

  it('checkout on purchase of items', () => {
    homePage.purchaseHappyStickers();
    homePage.purchaseAngryStickers();
    homePage.purchaseSadStickers();

      checkOut.gotToCheckOut();
    //   checkOut.getCheckOutMssg();
    //   checkOut.getBillTotal();

    cy.get('.badge').should('have.text', 3);
  });
});
