///<reference types="cypress"/>
import Base from '../pages/Base';
import Search from '../pages/Search';
import { searchPhrase } from '../fixtures/searchData.json';

describe('Wpisywanie tekstu w wyszukiwarkę', () => {
	it('Wpisywanie tekstu', () => {
		Base.openHomePage();
		Search.typeSearchPhrase();
		Search.searchBox.should('have.value', searchPhrase);
		cy.wait(1000);
		Search.clearSearchPhrase();
		cy.wait(1000);
		Search.typeAndEnterSearchPhrase();
		Search.alert.should('be.visible').and("include.text", "results");
	});
});
