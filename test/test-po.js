// Imports
const webdriver = require('selenium-webdriver')
const chai = require('chai')
const expect  = chai.expect
const searchPage = require("./page-objects/SearchPage.po").SearchPage

// Variables
const sendText = 'Hello world from selenium!'

describe('UI testing following Page Object Model pattern ', () => {
    
    before(async function () {
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build()
    
        await driver.get("https://google.com")
        searchPage.initialize(driver)
    });

    it('Search box is not null', async function () {
        const input = await searchPage.getInput();
        expect(input).not.to.be.null;
    });

    it('Search on Google passes', async  function() {
        await searchPage.writeText(sendText);
    })

    it('Get search box text passes', async  function() {
        const searchText = await searchPage.getText()
        expect(searchText).to.equal(sendText)
    })

    after(async () => {
        searchPage.cleanup()
    }); 
});

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}