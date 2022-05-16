describe ('editar zona horaria', function(){
  beforeEach(() => {
      cy.visit('http://localhost:2368/ghost')
      cy.wait(5000)
    })
  it ('login', function(){
      cy.visit("http://localhost:2368/ghost/#/signin");
      cy.get('#ember7').type(Cypress.config('usuario'));
      cy.get('#ember9').type(Cypress.config('pass'));
      cy.get('#ember11').click();
      cy.wait(2000);
      cy.screenshot("screenshot1");
      cy.get(".gh-nav-body a[href='#/settings/']").click();
      cy.wait(3000);
      cy.screenshot("screenshot2");
      cy.get(".view-container a[href='#/settings/general/']").click();
      cy.wait(3000);
      cy.screenshot("screenshot3");
      cy.get(':nth-child(2) > .gh-expandable > :nth-child(2) > .gh-expandable-header > .gh-btn > span').click();
      cy.wait(3000);
      cy.screenshot("screenshot4");
      cy.get('select').select('Pacific/Pago_Pago')
      cy.wait(2000);
      cy.screenshot("screenshot5");
      cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
      cy.wait(2000);
      cy.screenshot("screenshot6");

  })
})