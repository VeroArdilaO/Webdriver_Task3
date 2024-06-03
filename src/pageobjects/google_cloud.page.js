class GoogleCloudPage {

    get Textbox() { return $('.mb2a7b') }
    get SearchIcon() { return $('.YSM5S') }


    async open() {
        await browser.url('https://cloud.google.com/?hl=es')
    }

    async search(text) {
        await this.SearchIcon.click()
        await browser.pause(500)
        await this.Textbox.setValue(text)
        await browser.pause(500)
        await browser.keys('Enter')
        
    }
}

module.exports = GoogleCloudPage;
