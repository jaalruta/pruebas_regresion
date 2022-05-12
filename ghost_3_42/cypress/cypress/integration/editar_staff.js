describe ('editar staff', function(){
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost')
        cy.wait(5000)
      })

    it ('editar staff', function(){
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
        cy.get(".gh-active-users .apps-card-app").click();

        cy.screenshot("screenshot4");

        cy.get('#user-name').type('{selectall}{backspace}Pruebas modificacion staff');

        cy.screenshot("screenshot5");
        cy.get('#user-bio').type('{selectall}{backspace}Pruebas modificacion bio staff');
        cy.screenshot("screenshot6");
        cy.get(".view-actions button.gh-btn-primary").click();
        cy.screenshot("screenshot6");
        cy.get('#user-name').should('have.value', 'Pruebas modificacion staff');


    })
})