// Imports
const webdriver = require('selenium-webdriver')
const By = webdriver.By
const Key = webdriver.Key
const chai = require('chai')
const expect  = chai.expect

// Variables
let driver
const sendText = 'Hello world from selenium!'

describe('UI testing not following Page Object Model pattern ', () => {

    before(async function () {
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build()
    
        await driver.get("https://google.com")
    });

    it('Search box is not null', async function () {
        const input = await driver.findElement(By.name("q"))
        expect(input).not.to.be.null;
    });

    it('Search on Google passes', async  function() {
        
        const input = await driver.findElement(By.name("q"))
        await input.sendKeys(sendText, Key.ENTER)
    })

    it('Get search box text passes', async  function() {
        const input = await driver.findElement(By.name("q"))
        const value = await input.getAttribute('value')
        expect(value).to.equal(sendText)
    })

    after(async () => {
        driver.quit()
    }); 

});

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}