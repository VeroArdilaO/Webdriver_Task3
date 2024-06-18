class ComputeEngine{

    get computeEngine() { return $('//div[contains(@class, "wrzENe")]//div[contains(@class, "d5NbRd-EScbFb-JIbuQc PtwYlf")]'); }
    get waitComponent(){return $('[class="wrzENe"]'); }

    async clickComputeEngine() {
        await this.waitComponent.waitForExist({timeout: 10000})
        await browser.pause(500)
        await this.computeEngine.waitForExist({ timeout: 10000 });
        await this.computeEngine.click();
    }
}

module.exports = new ComputeEngine()