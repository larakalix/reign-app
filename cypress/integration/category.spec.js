/// <reference types="cypress" />

const categories = ['Reactjs', 'Angular', 'Vuejs'];

context("Categories", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    it("Check categories", () => {
        cy.get(".categories > a").each((item, index) => {
            cy.wrap(item).should("contain.text", categories[index])
        });
    });

    it("Categories dropdown can be open", () => {
        cy.contains("Select your news").click();
    });
});
