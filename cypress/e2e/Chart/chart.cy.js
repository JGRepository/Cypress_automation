/// <reference types="cypress" />

import chartPageResources from "../../support/chartPageResources";
import LoginPage from "../../support/loginPageResources";
import ProductsPage from "../../support/productsPageResources";

describe('Testes da página de Carrinho', () => {
    beforeEach(() => {
        LoginPage.givenIAcessLoginPage();
        LoginPage.andFillTheLoginInputs("standard_user", "secret_sauce");
        LoginPage.clickOnLoginBtn();
        LoginPage.thenShouldEnter();
        ProductsPage.clickOnAddToChartBtn();
        ProductsPage.clickOnChartBtn();
        chartPageResources.validItemOnChart("1");

    });
    it('Removendo itens da página de Carrinho', () => {
        chartPageResources.removeItemFromChart();
    });
});