describe ('crear', function(){
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
        cy.get(".gh-nav-list a[href='#/tags/']").click();
        cy.wait(1000);
        cy.screenshot("screenshot2");
        cy.get(".gh-canvas-header a[href='#/tags/new/']").click();
        cy.wait(1000);
        cy.screenshot("screenshot3");
        cy.get('#tag-name').type('primer tag de prueba');
        cy.wait(2000);
        cy.screenshot("screenshot4");
        cy.get('#tag-description').type("descripcion para el primer tag");
        cy.wait(2000);
        cy.screenshot("screenshot5");
        cy.get(".view-actions button.gh-btn-primary").click();
        cy.wait(1000);
        cy.screenshot("screenshot6");
        cy.get(".gh-nav-list a[href='#/tags/']").click();
        cy.wait(1000);
        cy.screenshot("screenshot7");
    })
})