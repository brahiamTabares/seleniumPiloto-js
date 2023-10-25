const { When, Then, And, Given, Before, After, World} = require("@cucumber/cucumber");
const { Builder } = require("selenium-webdriver");
const assert = require("assert");
const SignInPage = require('../../page/signin.page');


   let signInPage;
   let driver;

   Before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    signInPage = new SignInPage(driver);
    await signInPage.init();
   });
   After(async function () {

        const timestamp = new Date().getTime();
       await signInPage.driver.quit();

   });
    Given('Ya estoy registrado en el sms', async function () {
       await signInPage.visit('http://localhost:8080/')
    });



    When('Ingreso mi nombre de usuario {string} y mi contraseña {string} para ingresar al SMS1', async function (nombreUsuario,password) {

        await signInPage.signIn(nombreUsuario,password)
    });


    Then('Me muestra la pantalla principal del SMS-Builder y valido que se observe el sms', async function () {
        await assert(signInPage.isHomePageDisplayed(),"no inicio sesion ")
    });
