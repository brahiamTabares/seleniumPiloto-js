const { By, until } = require('selenium-webdriver');
const BasePage = require('./base.page');

class SignInPage extends BasePage{
    constructor(driver) {
        super(driver);
        this.userLocator = By.name("nombreUsuario");
        this.passLocator = By.id("clave");
        this.signInBtnLocator = By.xpath("//span[@class='ui-button-text ui-c' and text()='Ingresar']");
        this.message = By.xpath("//div[@id='content']/span[contains(text(),'No tiene permiso para acceder a este recurso')]");
    }

    async signIn(usuario, password) {
       await this.type(usuario, this.userLocator);
        await this.type(password, this.passLocator);
        await this.click(this.signInBtnLocator);
    }

    async messageLogin() {
        await this.getEwait().until(ExpectedConditions.visibilityOfAllElementsLocatedBy(this.message));
        return this.getText(this.message);
    }


}

module.exports = SignInPage;