///<reference types="cypress"/>
import {log, passwd} from "../fixtures/loginData.json"

describe("Custom Commands", ()=> {
    it("Logowanie na stronę", () => {
        cy.login(log, passwd);
    })
});
