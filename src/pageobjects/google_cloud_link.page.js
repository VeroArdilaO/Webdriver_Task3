class GoogleSerchPage {

    get calculatorLink() { return $("//a[contains(@href, 'products/calculator') and contains(@class, 'gs-title')]"); } 

    async openCalculatorLink() {
        await this.calculatorLink.waitForExist({ timeout: 2000 })
        await this.calculatorLink.click()
        await browser.pause(500)
    }
}

module.exports = new GoogleSerchPage();







// class GoogleCloudLink {

//     get Link() { return $("//a[contains(@href, 'products/calculator') and contains(@class, 'gs-title')]") }
    

//     async openLink() {
//         await this.Link.waitForExist({ timeout: 2000 })
//         await this.Link.click()
//         await browser.pause(500)
//     }
// }

// module.exports = GoogleCloudLink;