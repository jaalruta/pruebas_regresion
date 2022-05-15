describe ('Invitar staff', function(){
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost')
        cy.wait(5000)
      })

    it ('invitar staff', function(){
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

        cy.get("body > div:nth-child(4) > div:nth-child(3) > nav:nth-child(1) > section:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(5) > a:nth-child(1)").click();
        cy.wait(2000);
        cy.screenshot("screenshot2");
        cy.screenshot("screenshot3");

        cy.get(".gh-btn.gh-btn-green").click();
        cy.wait(2000);

        cy.screenshot("screenshot4");

        cy.get('#new-user-email').type('invite3@ghost.com');
        cy.wait(2000);

        cy.screenshot("screenshot5");

        cy.get(".gh-btn.gh-btn-green.gh-btn-icon.ember-view").click();
        cy.wait(2000);
        cy.screenshot("screenshot6");
        cy.reload();
        cy.wait(5000);

        cy.get('h3').contains('invite3@ghost.com').should('exist')

    })
})