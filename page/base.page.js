const {Builder, By, ExpectedConditions, until} = require('selenium-webdriver');


class BasePage {
    constructor(driver) {
        this.driver = null;
        this.ewait = null;

        this.exitBtnLocator = By.xpath("//span[@class='ui-button-text ui-c' and text()='Salir']");
        this.menuLocator = By.xpath("//span[@class='ui-button-icon-left ui-icon ui-c pi pi-bars']");
        this.returnLocator = By.xpath("//span[@class='ui-button-icon-left ui-icon ui-c pi pi-arrow-circle-left']");
        this.nextLocator = By.xpath("//span[@class='ui-button-icon-left ui-icon ui-c pi pi-arrow-circle-right']");
        this.titleSMSLocator = By.id("tituloApp");
    }


    async init() {
        this.driver = await new Builder().forBrowser('chrome').build();
        this.ewait = (condition) => {
            return this.driver.wait(condition);
        };
    }

   async findElement(locator) {
        return this.driver.findElement(locator);
    }

    async findElements(locator) {
        return this.driver.findElements(locator);
    }

   async getText(element) {
        return element.getText();
    }

    async getText(locator) {
        return this.driver.findElement(locator).getText();
    }

    async type(inputText, locator) {
        this.driver.findElement(locator).clear();
        this.driver.findElement(locator).sendKeys(inputText);
    }

    async click(locator) {
        //const  element =this.ewait.until(until.elementIsClickable(locator));
        const element = await this.findElement(locator);
        await element.click();

    }

    async isDisplayed(locator) {
        try {
            return this.driver.findElement(locator).isDisplayed();
        } catch (NoSuchElementError) {
            return false;
        }
    }
    async visit(url) {
        await this.driver.get(url);
    }

    async isHomePageDisplayed() {
        const locators = [this.exitBtnLocator, this.menuLocator, this.returnLocator, this.nextLocator];
        return locators.some(locator => this.isDisplayed(locator));
    }

    async getTitleSMS() {
        await this.getEwait().until(ExpectedConditions.visibilityOfElementLocated(this.titleSMSLocator));
        return this.getText(this.titleSMSLocator);
    }

    async goStep(title) {
        const newStep = `//span[@class='ui-steps-title' and text()='${title}']`;
        console.log(newStep);
        this.click(By.xpath(newStep));
    }
}

module.exports = BasePage;
