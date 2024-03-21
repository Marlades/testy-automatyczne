/// <reference types="cypress"/>

describe('Test związany z wybieraniem select', () => {
	it('Kliknięcie  w zakładkę Women', () => {
		cy.visit('/');
		cy.get(`a[title="Women"]`).click();
	});
	it('Wybranie opcji in stock', () => {
		cy.get('#selectProductSort').select('In stock');
		cy.get('#selectProductSort').should("have.value", "quantity:desc");
		cy.get('#selectProductSort').select('name:asc');
	});
});
