const By = require('selenium-webdriver').By
const Key = require('selenium-webdriver').Key

class SearchPage {

    constructor() {
        this.queryName = "q"
        this.driver = null
    }

    async initialize(driver) {
        this.driver = driver
    }

    async cleanup() {
        await this.driver.quit()
    }

    async getInput() {
        return await this.driver.findElement(By.name(this.queryName));
    }

    async writeText(text) {
        const input = await this.getInput()
        await input.sendKeys(text, Key.ENTER)
    }

    async getText() {
        const input = await this.getInput()
        return await input.getAttribute('value')
    }

}

sp = new SearchPage();
module.exports.SearchPage = sp;