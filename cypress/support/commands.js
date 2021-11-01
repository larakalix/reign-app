// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fetchNews', ({
    query,
    page,
    hitsPerPage
}) => {
    cy.request("GET", `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}&hitsPerPage=${hitsPerPage}`)
        .then(response => {
            console.log('test log', response.body)
            localStorage.setItem('test news', response.body);
            cy.visit("http://localhost:3000/");
        });
});