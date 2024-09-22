/// <reference types="cypress" />

import LoginPage from "../../support/LoginPage";

describe('Pagina de Login', () => {
   
   
    it('Realizando Login com Sucesso', () => {
        LoginPage.DadoQueAcessoLogin();
        LoginPage.ePreenchaOsCamposDeLogin("standard_user", "secret_sauce");
        LoginPage.clicarNoBotãoLogin();
        LoginPage.EntaoDeveRealizarOLogin();
        
  
    });
   
    it('Realizando Login com Usuário Inválido', () => {
        LoginPage.DadoQueAcessoLogin();
        LoginPage.ePreenchaOsCamposDeLogin("TESTE", "secret_sauce");
        LoginPage.clicarNoBotãoLogin();
        LoginPage.entaoDeveApareceerMsgErro('Epic sadface: Username and password do not match any user in this service');
        
  
    });

    it('Realizando Login com Sem Preencher Usuário', () => {
        LoginPage.DadoQueAcessoLogin();
        LoginPage.eNaoPreenchaOsCampoDeUsuario("secret_sauce");
        LoginPage.clicarNoBotãoLogin();
        LoginPage.entaoDeveApareceerMsgErro('Epic sadface: Username is required');
        
  
    });

    it('Realizando Login com Sem Preencher Senha', () => {
        LoginPage.DadoQueAcessoLogin();
        LoginPage.eNaoPreenchaOsCampoDeSenha("standard_user");
        LoginPage.clicarNoBotãoLogin();
        LoginPage.entaoDeveApareceerMsgErro('Epic sadface: Password is required');
        
  
    });

    it('Realizando Login e fechando mensagem de alerta', () => {
        LoginPage.DadoQueAcessoLogin();
        LoginPage.eNaoPreenchaOsCampoDeSenha("standard_user");
        LoginPage.clicarNoBotãoLogin();
        LoginPage.entaoDeveApareceerMsgErro('Epic sadface: Password is required');
        LoginPage.quandoClicarFecharMsgErro();
        LoginPage.entaoMsgErroDeveFechar();

        
  
    });
});