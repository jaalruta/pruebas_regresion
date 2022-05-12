describe ('editar', function(){
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost')
        cy.wait(5000)
      })
    it ('editar', function(){
        cy.visit("http://localhost:2368/ghost/#/signin");
        cy.get('#ember7').type(Cypress.config('usuario'));
        cy.get('#ember9').type(Cypress.config('pass'));
        cy.get('#ember11').click();
        cy.wait(2000);
        cy.screenshot("screenshot1");
        cy.get('.ember-view.gh-secondary-action.gh-nav-new-post').click();
        cy.wait(1000);
        cy.screenshot("screenshot2");
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type('POST DE PRUEBA');
        cy.wait(2000);
        cy.screenshot("screenshot3");
        cy.get('.koenig-editor__editor').type("PRUEBAS AUTOMATIZADAS MISO");
        cy.wait(2000);
        cy.screenshot("screenshot4");
        cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-editor.gh-publishmenu-trigger').click();
        cy.screenshot("screenshot5");
        cy.get('.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view').click();
        cy.screenshot("screenshot6");
        cy.get('.gh-btn.gh-btn-black.gh-btn-icon.ember-view').click();
        cy.wait(1000);
        cy.screenshot("screenshot7");
        cy.get('.ember-view.gh-editor-back-button').click();
        cy.screenshot("screenshot8");
        cy.get('.posts-list > :nth-child(2)').click();
        cy.wait(1000);
        cy.screenshot("screenshot9");
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(' EDITADO');
        cy.wait(2000);
        cy.screenshot("screenshot10");
        cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-editor.gh-publishmenu-trigger').click();
        cy.screenshot("screenshot11");
        cy.get('.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view').click();
        cy.screenshot("screenshot12");
        cy.get('.gh-btn.gh-btn-black.gh-btn-icon.ember-view').click();
        cy.screenshot("screenshot13");
        cy.get('.ember-view.gh-editor-back-button').click();
        cy.screenshot("screenshot14");
        

    

        
    })
})