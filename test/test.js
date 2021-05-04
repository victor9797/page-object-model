// Imports
const webdriver = require('selenium-webdriver')
const By = webdriver.By
const Key = webdriver.Key
const chai = require('chai')
const expect  = chai.expect

// Variables
let driver

before(async function () {
    driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build()

    await driver.get("https://google.com")
}); 

describe('UI testing not following Page Object Model pattern ', () => {

    it('Search box is not null', async function () {
        const input = await driver.findElement(By.name("q"))
        expect(input).not.to.be.null;
    });

    it('Search on Google passes', async  function() {
        let sendText = 'Hello world from selenium!'
        const input = await driver.findElement(By.name("q"))
        await input.sendKeys(sendText, Key.ENTER)
    })

    it('Get search box text passes', async  function() {
        let sendText = 'Hello world from selenium!'
        const input = await driver.findElement(By.name("q"))
        await input.sendKeys(sendText, Key.ENTER)


        console.log(input)

        console.log(await input.getAttribute('value'))
    })

    after(async () => {
        driver.quit()
    }); 

});


describe('UI testing following Page Object Model pattern ', () => {
    
});

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}