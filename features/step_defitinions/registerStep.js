const {When, Then, And, Given, Before, After} = require("@cucumber/cucumber");
const RegisterPage = require('../../page/register.page');
const {faker} = require('@faker-js/faker');
const Hook = require("./hook");

let registerPage;
let driver;
Before(async function () {
    driver = Hook.getDriver();
    registerPage = new RegisterPage(driver);

});

Given('Estoy en la página SMS-Builder para registrarme', async function () {

});
When('Ingreso los datos para registrarme', async function () {
    const nombreC = faker.person.fullName()
    const usuario = faker.internet.userName()
    const password = faker.internet.password()

    await registerPage.registerUser(nombreC, usuario, password, password)
});
Then('Me muestra un mensaje de operacion completa por el registro', async function () {
    await registerPage.confirMsgRegister;
});
