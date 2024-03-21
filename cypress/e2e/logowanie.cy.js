///<reference types="cypress"/>

describe('Logowanie użytkowanika', () => {
	it('Wejście na stronę główną', () => {
		cy.visit('/');
		cy.get('a.login').click();
		cy.get('#email').type('test@test.com');
		cy.get('#passwd').type('Hasło');
        cy.get("#SubmitLogin").click();
	});
});
