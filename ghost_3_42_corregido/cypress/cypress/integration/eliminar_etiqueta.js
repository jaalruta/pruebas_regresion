describe ('borrar', function(){
    beforeEach(() => {
        cy.visit('http://localhost:3001/ghost')
        cy.wait(5000)
      })

    it ('login', function(){
        cy.visit("http://localhost:3001/ghost/#/signin");
        cy.get('#ember8').type(Cypress.config('usuario'));
        cy.get('#ember10').type(Cypress.config('pass'));
        cy.get('#ember12').click();
        cy.wait(1000);
        cy.screenshot("screenshot1");
        cy.get(".ember-view a[href='#/tags/']").click();
        cy.wait(1000);
        cy.screenshot("screenshot2");
        cy.get(".gh-canvas-header a[href='#/tags/new/']").click();
        cy.wait(1000);
        cy.screenshot("screenshot3");
        cy.get('#tag-name').type('PruebaBorrado');
        cy.wait(2000);
        cy.screenshot("screenshot4");
        cy.get('#tag-description').type("descripcion de prueba borrado");
        cy.wait(2000);
        cy.screenshot("screenshot5");
        cy.get(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click();
        cy.wait(2000);
        cy.screenshot("screenshot6");
        cy.get(".gh-nav-list a[href='#/tags/']").click();
        cy.wait(2000);
        cy.screenshot("screenshot7");
        cy.get("a.gh-tag-list-title[href='#/tags/pruebaborrado/']").click(); 
        cy.wait(2000);
        cy.screenshot("screenshot8");
        cy.get(".gh-btn-red").click(); 
        cy.wait(2000);
        cy.screenshot("screenshot9");
        cy.get(".modal-footer .gh-btn-red").click(); 
        cy.wait(2000);
        cy.screenshot("screenshot10");
        cy.get(".ember-view a[href='#/tags/']").click();
        cy.wait(1000);
        cy.screenshot("screenshot11");

    })
})