describe ('revocar invitacion staff', function(){
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost')
        cy.wait(5000)
      })

    it ('revocar invitacion staff', function(){
        cy.visit("http://localhost:2368/ghost/#/signin");
        cy.get('#ember7').type(Cypress.config('usuario'));
        cy.get('#ember9').type(Cypress.config('pass'));
        cy.get('#ember11').click();
        cy.wait(5000);

        cy.get(".gh-nav-body a[href='#/settings/']").click();
        cy.get(".view-container a[href='#/settings/labs/']").click();
        cy.get(".js-delete").click();
        cy.wait(3000);
        cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view").click();
        cy.visit("http://localhost:2368/ghost");
        cy.wait(2000);

        cy.screenshot("screenshot1");
        cy.get(".gh-nav-body a[href='#/settings/']").click();
        cy.wait(2000);
        cy.screenshot("screenshot2");
        cy.get(".view-container a[href='#/settings/staff/']").click();
        cy.wait(2000);
        cy.screenshot("screenshot3");
        cy.get(".view-actions button.gh-btn-primary").click();
        cy.wait(2000);
        cy.screenshot("screenshot4");
        cy.get('#new-user-email').type('invite6@ghost.com');
        cy.wait(2000);
        cy.screenshot("screenshot5");
        cy.get(".modal-footer button").click();
        cy.wait(2000);
        cy.screenshot("screenshot6");
        cy.reload();
        cy.wait(5000);
        cy.screenshot("screenshot7");
        cy.get("div[class='apps-grid'] div:nth-child(1) article:nth-child(1) div:nth-child(2) div:nth-child(1) a:nth-child(1)").click();
        cy.wait(2000);
        cy.screenshot("screenshot8");
        cy.get('h3').contains('invite6@ghost.com').should('not.exist')

    })
})