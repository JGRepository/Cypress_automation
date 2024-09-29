/// <reference types="cypress-xpath" />

const el = require('./elements').ELEMENTS

class Chart {

    validItemOnChart(value) {
        cy.get(el.firstItemQnt).invoke('text').then((GetItemQnt) => {
            expect(GetItemQnt).to.be.equal(value)

        });
        cy.get(el.itemDesc).invoke('text').then((getItemDesc) => {
            expect(getItemDesc).to.be.not.null
        });
        cy.get(el.itemName).invoke('text').then((getItemName) => {
            expect(getItemName).to.be.not.null

        });
        cy.get(el.itemValue).invoke('text').then((getItemValue) => {
            expect(getItemValue).to.be.not.null
        });
    }
    removeItemFromChart(){
        cy.get(el.removeBtn).click();
    }

}

export default new Chart();