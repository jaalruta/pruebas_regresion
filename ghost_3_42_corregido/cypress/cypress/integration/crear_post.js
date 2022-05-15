describe ('crear', function(){
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost')
        cy.wait(5000)
      })
    it ('login', function(){
        cy.visit("http://localhost:3001/ghost/#/signin");
        cy.get('#ember7').type(Cypress.config('usuario'));
        cy.get('#ember9').type(Cypress.config('pass'));
        cy.get('.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click();
        cy.wait(2000);
        cy.screenshot("screenshot1");
        cy.get('.ember-view.gh-secondary-action.gh-nav-new-post').click();
        cy.wait(1000);
        cy.screenshot("screenshot2");
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type('POST DE PRUEBA CREAR');
        cy.wait(2000);
        cy.screenshot("screenshot3");
        cy.get('.koenig-editor__editor').type("PRUEBAS AUTOMATIZADAS MISO");
        cy.wait(2000);
        cy.screenshot("screenshot4");
        cy.get('.gh-publishmenu.ember-view').click();
        cy.screenshot("screenshot5");
        cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
        cy.screenshot("screenshot6");
        cy.wait(2000);
        cy.get('.blue.link.fw4.flex.items-center.ember-view').click();
        cy.screenshot("screenshot7");
    })
})