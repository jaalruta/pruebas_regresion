describe ('crear pagina', function(){
  beforeEach(() => {
      cy.visit('http://localhost:2368/ghost')
      cy.wait(5000)
    })
  it ('login', function(){
      cy.visit("http://localhost:2368/ghost/#/signin");
      cy.get('#ember8').type(Cypress.config('usuario'));
      cy.get('#ember10').type(Cypress.config('pass'));
      cy.get('#ember12').click();
      cy.wait(2000);
      cy.screenshot("screenshot1");
      cy.get(".ember-view a[href='#/pages/']").click();
      cy.wait(3000);
      cy.screenshot("screenshot2");
      cy.get(".gh-canvas-header a[href='#/editor/page/']").click();
      cy.screenshot("screenshot3");
      cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type('Pagina de prueba');
      cy.screenshot("screenshot4");
      cy.wait(2000);
      cy.get('.koenig-editor.w-100.flex-grow.relative.center.mb0.mt0.ember-view').type("Descripcion de pagina");
      cy.screenshot("screenshot5");
      cy.get(".gh-publishmenu.ember-view").click();
      cy.screenshot("screenshot6");
      cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
      cy.screenshot("screenshot7");
      cy.get(".ember-view a[href='#/pages/']").click();
      cy.screenshot("screenshot8");
      cy.wait(2000);


  })
})