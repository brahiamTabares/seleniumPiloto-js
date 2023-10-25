#languaje:es
Feature: Iniciar sesion

  Scenario: Iniciar sesión correctamente
    Given Ya estoy registrado en el sms
    When Ingreso mi nombre de usuario "brahiam" y mi contraseña "1234" para ingresar al SMS1
    Then Me muestra la pantalla principal del SMS-Builder y valido que se observe el sms