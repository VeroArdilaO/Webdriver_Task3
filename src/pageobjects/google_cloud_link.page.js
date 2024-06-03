class GoogleCloudLink {

    get calculatorLink() { return $("//a[contains(@class,'gs-title')]"); } 

    async openCalculatorLink() {
        await this.calculatorLink.waitForExist({ timeout: 2000 })
        await this.calculatorLink.click()
        await browser.pause(500)
    }
}

module.exports = GoogleCloudLink

