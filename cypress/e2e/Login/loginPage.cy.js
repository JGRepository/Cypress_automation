/// <reference types="cypress" />

import LoginPage from "../../support/loginPageResources";

describe('Pagina de Login', () => {
   beforeEach(() => {
    LoginPage.givenIAcessLoginPage();
   });
   
    it('Realizando Login com Sucesso', () => {
        LoginPage.andFillTheLoginInputs("standard_user", "secret_sauce");
        LoginPage.clickOnLoginBtn();
        LoginPage.thenShouldEnter();
        
  
    });
   
    it('Realizando Login com Usuário Inválido', () => {
        
        LoginPage.andFillTheLoginInputs("TESTE", "secret_sauce");
        LoginPage.clickOnLoginBtn();
        LoginPage.entaoDeveApareceerMsgErro('Epic sadface: Username and password do not match any user in this service');
        
  
    });

    it('Realizando Login com Sem Preencher Usuário', () => {
        LoginPage.eNaoPreenchaOsCampoDeUsuario("secret_sauce");
        LoginPage.clickOnLoginBtn();
        LoginPage.entaoDeveApareceerMsgErro('Epic sadface: Username is required');
        
  
    });

    it('Realizando Login com Sem Preencher Senha', () => {
        LoginPage.eNaoPreenchaOsCampoDeSenha("standard_user");
        LoginPage.clickOnLoginBtn();
        LoginPage.entaoDeveApareceerMsgErro('Epic sadface: Password is required');
        
  
    });

    it('Realizando Login e fechando mensagem de alerta', () => {
        LoginPage.eNaoPreenchaOsCampoDeSenha("standard_user");
        LoginPage.clickOnLoginBtn();
        LoginPage.entaoDeveApareceerMsgErro('Epic sadface: Password is required');
        LoginPage.quandoClicarFecharMsgErro();
        LoginPage.entaoMsgErroDeveFechar();

        
  
    });
});