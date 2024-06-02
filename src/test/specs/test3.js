const GoogleCloudPage = require('../../pageobjects/google_cloud.page')
const  GoogleSerchPage = require('../../pageobjects/google_cloud_link.page')

describe('Open google cloud page', () => {
    beforeEach(async () => {
        const GoogleSearchPage = new GoogleCloudPage();
        await GoogleSearchPage.open();
        
    })

    describe('Google cloud page', () => {
        
        it('Click Icon search and enter text Google Cloud Platform Pricing Calculator', async () => {
            // Click Icon search and enter text Google Cloud Platform Pricing Calculator
            const GoogleSearchPage = new GoogleCloudPage();
            await GoogleSearchPage.search('Google Cloud Platform Pricing Calculator');

            // Click link to refert to Google Cloud Platform Pricing Calculator
            await GoogleSerchPage.openCalculatorLink();
          });
        })
    })
 
