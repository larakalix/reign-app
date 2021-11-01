/// <reference types="cypress" />

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should find app title", () => {
    cy.get("h1").contains("Hacker News");
  });
});
