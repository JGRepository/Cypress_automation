class Login {
  DadoQueAcessoLogin() {
    cy.visit("https://www.saucedemo.com/v1/")
  }

  ePreenchaComDadosValidosOUsuario() {}
}
export default new Login();
