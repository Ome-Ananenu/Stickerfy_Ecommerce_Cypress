import { CheckoutPage } from '../pages/CheckoutPage';
const checkOut = new CheckoutPage();
describe('CheckoutPage Tests', () => {
  beforeEach(() => {
    cy.visit('https://stickerfy.herokuapp.com/');
  });

  it('checkout', () => {
    homePage.purchaseHappyStickers();
    homePage.purchaseAngryStickers();
    homePage.purchaseSadStickers();

      checkOut.gotToCheckOut();
      checkOut.getCheckOutMssg();
      checkOut.getBillTotal();
      
    cy.get('.badge').should('have.text', 3);
  });
});
