Feature: eliminar etiqueta

@user1 @web
Scenario: Como usuario administrador inicio sesion y elimino una etiqueta

  Given I navigate to page "http://localhost:3001/ghost"

  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I clear ghost data
  And I wait for 2 seconds
  And I take a screenshot
  And I click tags
  And I wait for 2 seconds
  And I take a screenshot
  And I click new tag
  And I wait for 2 seconds
  And I take a screenshot
  And I enter tag name "Prueba borrado"
  And I wait for 2 seconds
  And I take a screenshot
  And I enter tag description "descripcion de prueba borrado"
  And I wait for 2 seconds
  And I take a screenshot
  And I click save 
  And I wait for 2 seconds
  And I take a screenshot
  And I click tags
  And I wait for 2 seconds
  And I take a screenshot
  And I select a tag borrado
  And I wait for 2 seconds
  And I take a screenshot
  And I click delete tag
  And I wait for 2 seconds
  And I take a screenshot
  And I click confirm delete
  And I wait for 2 seconds
  And I take a screenshot
  Then the tag "Prueba borrado" must be delete