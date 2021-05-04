const webdriver = require('selenium-webdriver')
const By = require('selenium-webdriver').By
const Key = require('selenium-webdriver').Key

function getChromeDriver() {
    return new webdriver.Builder()
        .forBrowser('chrome')
        .build()
}

async function startTest() {
    
    let driver = getChromeDriver()

    await driver.get("https://google.com")

    const input = await driver.findElement(By.name("q"))
    await input.sendKeys("Hello world from selenium!", Key.ENTER)
    
    driver.quit()
}

startTest()


//         "test:invoice": "ts-mocha -p ./tests/integ/tsconfig.json --opts ./tests/integ/mocha-mock.opts --grep='^ApprovalConfigInvoiceMockBAT Init tests should pass .*$'"
