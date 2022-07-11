export class HomePage {

    happyBtnId = ':nth-child(1) > .thumbnail > .caption > .clearfix > .btn';
    sadBtnId = ':nth-child(2) > .thumbnail > .caption > .clearfix > .btn';
    angryBtnId = ':nth-child(3) > .thumbnail > .caption > .clearfix > .btn';
    cartBtnId = '#cart';

    purchaseHappyStickers() {
        cy.get(this.happyBtnId).click();
    }
    purchaseSadStickers() {
        cy.get(this.angryBtnId).click();
    }
    purchaseAngryStickers() {
        cy.get(this.angryBtnId).click();
    }
}