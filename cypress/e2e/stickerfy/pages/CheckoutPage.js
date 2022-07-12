import { CartPage } from '../pages/CartPage';

const cartPage = new CartPage();

export class CheckoutPage {
  checkOutBtnId = 'checkout';
  totalId = 'total';
  checkOutMssgId = '.col-sm-6 > :nth-child(3)';

  gotToCheckOut() {
    cartPage.goToCart();
    cy.get(this.checkOutBtnId).click();
  }
  getBillTotal() {
    cy.get(this.totalId);
  }

  getCheckOutMssg() {
    cy.get(this.checkOutMssgId).text();
  }
}
