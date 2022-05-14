Feature: borrar pagina

@user1 @web

Scenario: Como usuario administrador inicio sesion, creo un post y lo elimino 

  Given I navigate to page "http://localhost:2368/ghost"

  And I wait for 5 seconds

  When I enter email "<USERNAME>"

  And I wait for 2 seconds

  And I enter password "<PASSWORD>"

  And I wait for 2 seconds

  And I click next

  And I wait for 2 seconds
  
  And I take a screenshot

  And I click pages

  And I wait for 5 seconds

  And I take a screenshot

  And I click new pages

  And I wait for 5 seconds

  And I take a screenshot

  And I enter pages title "titulo de la pagina"

  And I wait for 2 seconds

  And I take a screenshot

  And I enter pages body "cuerpo de la pagina de prueba"
 
  And I wait for 2 seconds

  And I take a screenshot

  And I click publish menu

  And I wait for 2 seconds

  And I take a screenshot

  And I click publish
  
  And I wait for 2 seconds

  And I take a screenshot

  And I click pages menu 

  And I wait for 2 seconds

  And I wait for 2 seconds

  And I take a screenshot

  And I click pages edit

  And I wait for 2 seconds

  And I take a screenshot

  And I click page settings

  And I wait for 2 seconds

  And I take a screenshot

  And I click delete page

  And I wait for 2 seconds

  And I take a screenshot

  And I click confirm delete page
  
  And I wait for 2 seconds

  And I take a screenshot