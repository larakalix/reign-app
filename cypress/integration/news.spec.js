/// <reference types="cypress" />

describe("News", () => {
    beforeEach(() => {
        cy.fetchNews({query: 'reactjs', page: 0, hitsPerPage: 5});
        cy.visit("http://localhost:3000/");
    });

    it("News grid renders correctly", () => {
        cy.get("#news").should("exist");
      });

    it("Data can be fetch", () => {
        cy.get(".grid").children(".hit-row");
    });
});
