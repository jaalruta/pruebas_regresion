describe ('editar', function(){
    beforeEach(() => {
        cy.visit('http://localhost:3001/ghost')
        cy.wait(5000)
      })
    it ('login', function(){
        cy.visit("http://localhost:3001/ghost/#/signin");
        cy.get('#ember7').type(Cypress.config('usuario'));
        cy.get('#ember9').type(Cypress.config('pass'));
        cy.get('#ember11').click();
        cy.wait(2000);
        cy.screenshot("screenshot1");
        cy.get(".gh-nav-body a[href='#/members/']").click();
        cy.wait(1000);
        cy.screenshot("screenshot2");
        cy.get(".gh-canvas-header a[href='#/members/new/']").click();
        cy.wait(1000);
        cy.screenshot("screenshot3");
        cy.get('.gh-cp-member-email-name.ember-text-field.gh-input.ember-view.member-name').type("miembroborrado"); 
        cy.wait(2000);
        cy.screenshot("screenshot4");
        cy.get('#member-email').type("pruebasborrado@ghost.com");
        cy.wait(2000);
        cy.screenshot("screenshot5");
        cy.get('#member-note').type("Esta es una nota para ser borrada");
        cy.wait(2000);
        cy.screenshot("screenshot6");
        cy.get(".view-actions button.gh-btn-primary").click();
        cy.wait(1000);
        cy.screenshot("screenshot7");
        cy.get(".gh-nav-body a[href='#/members/']").click();
        cy.wait(1000);
        cy.screenshot("screenshot8");
        cy.get(".gh-main tr:nth-child(2) a:nth-child(1)").click();
        cy.wait(1000);
        cy.screenshot("screenshot9");
        cy.get(".view-actions .dropdown button.gh-btn-icon").click();
        cy.wait(1000);
        cy.screenshot("screenshot10");
        cy.get(".gh-member-actions-menu li:nth-child(2) button").click();
        cy.wait(1000);
        cy.screenshot("screenshot11");
        cy.get(".modal-footer .gh-btn-red").click();
        cy.wait(1000);
        cy.screenshot("screenshot12");
    })
})