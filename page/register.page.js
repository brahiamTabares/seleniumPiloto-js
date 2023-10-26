const { By, until } = require('selenium-webdriver');
const BasePage = require('./base.page');


class RegisterPage extends BasePage {

    constructor(driver) {
        super(driver);
         this.registerBtnLocator = By.xpath("//span[@class='ui-button-text ui-c' and text()='Registrarse']");
         this.userNameCompleteLocator = By.name("registro:nombre");
         this.userNameLocator = By.id("registro:nombreUsuario");
         this.passwordLocator = By.id("registro:clave");
         this.confirmPasswordLocator = By.name("registro:verificacionClave");
         this.acceptBtnLocator = By.xpath("//span[@class='ui-button-text ui-c' and text()='Aceptar']");
         this.confirMsgRegister = By.xpath("//div[@class='ui-growl-message']/span[@class='ui-growl-title']");


    }
    async registerUser(nombreC, nombreUsuario, password, confirmPassword) {
        await this.click(this.registerBtnLocator);
        await this.type(nombreC,this.userNameCompleteLocator);
        await this.type(nombreUsuario,this.userNameLocator);
        await this.type(password,this.passwordLocator);
        await this.type(confirmPassword,this.confirmPasswordLocator);
        await this.click(this.acceptBtnLocator);
    }

    async confirMRegister() {
        await this.getEwait().until(until.visibilityOfElementLocated(this.confirMsgRegister));
        return await this.getText(this.confirMsgRegister);
    }

}
module.exports = RegisterPage;
