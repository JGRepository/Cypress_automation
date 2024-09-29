/// <reference types="cypress-xpath" />
const el = require('./elements').ELEMENTS
class Products {

  thenAllImgsShouldLoad() {
    cy.xpath(el.productsImg).should('be.visible')
  }

  productsPageObject(seletor) {
    cy.xpath(el.productObject).get(seletor).then($elements => {
      // Usar um loop for para mapear todos os elementos
      for (let i = 0; i < $elements.length; i++) {
        // Acessar cada elemento individualmente
        const element = $elements[i];

        // Exemplo: Imprimir o texto de cada elemento no console
        const text = element.innerText;
        cy.log(`Elemento ${i}: ${text}`);

        // Se precisar fazer assertivas ou interações com o elemento
        cy.wrap(element).should('be.visible'); // Exemplo de uma asserção
      }
    });
  }




  clickOnChartBtn() {
    cy.xpath(el.chart).click()
  }
  
  clickOnAddToChartBtn() {
    cy.get(el.firstProductItemButton).click()
  }

}

export default new Products();