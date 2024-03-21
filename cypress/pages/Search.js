import { searchPhrase } from '../fixtures/searchData.json';

class Search {
	get searchBox() {
		return cy.get('#search_query_top');
	}
	typeSearchPhrase() {
		this.searchBox.type(searchPhrase);
	}
	clearSearchPhrase() {
		this.searchBox.clear();
	}
	typeAndEnterSearchPhrase() {
	    this.searchBox.type("Tajson i Furia {enter}");
    }
    get alertText() {
        return cy.get('.alert');
    }
}

export default new Search();
