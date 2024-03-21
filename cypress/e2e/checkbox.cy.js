/// <reference types="cypress"/>

import Base from "../pages/Base";
import Women from "../pages/Women";
import Checkboxy from "../pages/Checkboxy";

describe('Test związany z zaznaczaniem checkboxów', () => {
	it('Kliknięcie w zakładkę Women', () => {
		Base.openHomePage();
		Women.womenTab.click();
		cy.url().should("include", "id_category=3&controller=category");
	});
	it('Zaznaczenie checkboxa w zakładce Women', () => {
		Checkboxy.checkTops()
		Checkboxy.topsCheckbox.should("be.checked");
		Checkboxy.checkDresses();
		Checkboxy.checkSize();
	});
});
