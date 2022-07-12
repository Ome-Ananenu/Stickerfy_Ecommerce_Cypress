export class CartPage {
  goToCartBtnId = '#cart';
  checkoutBtnId = '#checkout';
  cartItem1Id = '.list-group > :nth-child(1)';
  totalId = '.col-sm-6 > strong';
  optionsDropDownBtn = ':nth-child(1) > .btn-group > .btn';
  removeOneBtnId =
    ':nth-child(1) > .btn-group > .dropdown-menu > :nth-child(1) > a';
  removeAllBtnId =
    ':nth-child(1) > .btn-group > .dropdown-menu > :nth-child(2) > a';

  goToCart() {
    cy.get(this.goToCartBtnId).click();
  }

  checkOut() {
    cy.get(this.checkoutBtnId).click();
  }

  removeOneItem() {
    this.goToCart();
    this.viewCartItemOptions();
    cy.get(this.removeOneBtnId).click();
  }
  removeAllItems() {
    this.viewCartItemOptions();
    cy.get(this.removeAllBtnId).click();
  }

  viewCartItemOptions() {
    cy.get(this.optionsDropDownBtn).click();
  }
}
