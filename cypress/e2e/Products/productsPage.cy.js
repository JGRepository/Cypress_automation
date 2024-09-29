/// <reference types="cypress" />

import chartPageResources from "../../support/chartPageResources";
import LoginPage from "../../support/loginPageResources";
import ProductsPage from "../../support/productsPageResources";

describe('Testes da Página de Produtos', () => {
    beforeEach(() => {
        LoginPage.givenIAcessLoginPage();
        LoginPage.andFillTheLoginInputs("standard_user", "secret_sauce");
        LoginPage.clickOnLoginBtn();
        LoginPage.thenShouldEnter();
    });

    it('Visualização de Produtos', () => {
        ProductsPage.thenAllImgsShouldLoad();
    });

    it('Visualização de Produtos', () => {
        // ProductsPage.productsPageObject('img');
        ProductsPage.productsPageObject('div');
    });
    it.only('Inserindo item no carrinho', () => {
        ProductsPage.clickOnAddToChartBtn();
        ProductsPage.clickOnChartBtn();
        chartPageResources.validItemOnChart("1");
    });

});
