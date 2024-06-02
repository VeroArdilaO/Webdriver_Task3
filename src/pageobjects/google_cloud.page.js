class GoogleCloudPage {

    get Textbox() { return $('.mb2a7b') }
    get SearchIcon() { return $('.YSM5S') }
    async open() {
        await browser.url('https://cloud.google.com/?hl=es')
    }

    async search(text) {
        await this.SearchIcon.click()
        await browser.pause(2000)
        await this.Textbox.setValue(text)
        await browser.pause(5000)
        
    }
}

module.exports = GoogleCloudPage;
