/// <reference types="cypress-xpath" />

const el = require('./elements').ELEMENTS

class Login {
  givenIAcessLoginPage() {
    cy.visit("https://www.saucedemo.com/v1/")
  }

  andFillTheLoginInputs(username, password) {
    cy.get(el.username).type(username)
    cy.get(el.password).type(password)
  }
  eNaoPreenchaOsCampoDeUsuario(password) {
     cy.get(el.password).type(password)
  }

  eNaoPreenchaOsCampoDeSenha(username) {
    cy.get(el.username).type(username)
  }

  clickOnLoginBtn(){
    cy.get('#login-button').click()
  }
  thenShouldEnter(){
    cy.url().should('include', '/inventory.html')
  }

  entaoDeveApareceerMsgErro(textCompared){
    cy.get(el.errorMsg).should('be.visible').invoke('text').then((text) => {
    expect(text).to.be.equal(textCompared)
    })
    
}

entaoMsgErroDeveFechar(){
    cy.get(el.errorMsg).should('not.exist')
}
quandoClicarFecharMsgErro (){
    cy.xpath(el.btnErrorMsg).click()
}

}
export default new Login();
