const { Builder, By, Key } = require('selenium-webdriver')

function getChromeDriver() {
    return new Builder()
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