const { When, Then, And, Given, Before, After, World} = require("@cucumber/cucumber");
const { Builder } = require("selenium-webdriver");
const assert = require("assert");
const SignInPage = require('../../page/signin.page');
const fs = require('fs');
const Hook = require("./hook");
const {Status} = require("cucumber");


   let signInPage;
   let driver;

   Before(async function () {
       driver = Hook.getDriver();
       signInPage = new SignInPage(driver);

   });



    Given('Ya estoy registrado en el sms', async function () {

    });



    When('Ingreso mi nombre de usuario {string} y mi contraseña {string} para ingresar al SMS1', async function (nombreUsuario,password) {

        await signInPage.signIn(nombreUsuario,password)
    });


    Then('Me muestra la pantalla principal del SMS-Builder y valido que se observe el sms', async function () {
        const salirLocator= await signInPage.isDisplayed(signInPage.exitBtnLocator)
        //await assert(signInPage.isHomePageDisplayed(),"no inicio sesion ")
        assert.strictEqual(salirLocator,true);

    });
