describe ('cambiar lenguaje', function(){
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost')
        cy.wait(5000)
      })

    it ('cambiar lenguaje', function(){
        cy.visit("http://localhost:2368/ghost/#/signin");
        cy.get('#ember8').type(Cypress.config('usuario'));
        cy.get('#ember10').type(Cypress.config('pass'));
        cy.get('#ember12').click();
        cy.wait(5000);

        cy.get(".ember-view a[href='#/settings/labs/']").click();
        cy.wait(3000);
        cy.get(".js-delete").click();
        cy.wait(3000);
        cy.get(".modal-footer .gh-btn-red").click();
        cy.visit("http://localhost:2368/ghost");

        cy.wait(2000);
        
        cy.screenshot("screenshot1");
        cy.get(".ember-view a[href='#/settings/general/']").click();
        cy.wait(2000);

        cy.screenshot("screenshot2");
        cy.wait(2000);


        cy.get("div[class='gh-setting-last'] div[class='gh-setting-action'] button[type='button']").click();
        cy.wait(2000);
        cy.screenshot("screenshot3");

        
        cy.get("input[type='text']").type('{selectall}{backspace}es');
        cy.screenshot("screenshot4");

        cy.get(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click();
        cy.wait(2000);
        cy.screenshot("screenshot5");
        cy.get("input[type='text']").should('have.value', 'es')
    })
})