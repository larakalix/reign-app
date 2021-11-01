/// <reference types="cypress" />

const tabs = ['All', 'My faves'];

context("Categories", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    it("Check tabs", () => {
        cy.get(".tabs > li").each((item, index) => {
            cy.wrap(item).should("contain.text", tabs[index])
        });
    });
});