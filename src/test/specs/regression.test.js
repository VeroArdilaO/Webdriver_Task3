const GoogleCloudPage = require('../../pageobjects/google_cloud.page')
const GoogleCloudLink = require('../../pageobjects/google_cloud_link.page')
const GoogleCloudCalculator = require('../../pageobjects/google_cloud_add_estimate.page')
const EstimatedPage = require('../../pageobjects/google_cloud_estimate.page')
const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'dev';
dotenv.config({path: `./.env.${env}`});

const { testdata } = require(`../../pageobjects/Data/test.${env}`);

describe('Open google cloud page', () => {
    beforeEach(async () => {
        const GoogleSearchPage = new GoogleCloudPage();
        await GoogleSearchPage.open();
        
    })

    describe('Automation test', () => {
        
        it('Google Cloud Platform Pricing Calculator ', async () => {
            // Click Icon search and enter text Google Cloud Platform Pricing Calculator
            const GoogleSearchPage = new GoogleCloudPage();
            await GoogleSearchPage.search('Google Cloud Platform Pricing Calculator');
            // Click Open link Google Cloud Platform Pricing Calculator
            const GoogleOpenLink= new GoogleCloudLink();
            await GoogleOpenLink.openCalculatorLink();

            // Click link to refert to Google Cloud Platform Pricing Calculator
            const GoogleCalculator = new GoogleCloudCalculator();
            // Click to add estimate button
            await GoogleCalculator.addToEstimate();
            // Click on the "Compute engine" section button
            await GoogleCalculator.computeEngineClick();
            // Wait for the menu to be displayed
            await GoogleCalculator.SelectionMenue();
            //add the number of instances to 4
            await GoogleCalculator.numberOfInstancesOption(testdata.numberOfInstances);
            // Checking that the operating system is free
            await GoogleCalculator.softwareDropDownClick();
            // Click on the "regular" radio button
            await GoogleCalculator.regularRadioClick();
            // Click on the machine type and select n1-standard-8
            await GoogleCalculator.machineTypeClick();
            // Click on the "Add GPUs" button
            await GoogleCalculator.addGPUsButtonClick();
            // Interact with the GPU model dropdown
            await GoogleCalculator.gpuTypeDropdownClick();
            //the selection options for the dropdown and select the "2x375" option
            await GoogleCalculator.localSSDDropdownClick();
            // Open the region dropdown options by clicking on the dropdown opener
            await GoogleCalculator.regionDropdownClick();
            // Click on the Committed use "1 Year" button
            await GoogleCalculator.committedButtonSelect();
            // Check if the price is calculated in the correct section
            await GoogleCalculator.pagePricesTotal();
            // Press the share button and check the total price
            await GoogleCalculator.shareButtonOpener();
            // Open the Total estimated cost section
            await GoogleCalculator.OpenEstimatedCost();
            // Switch to the new window
            const GoogleEstimateSummary = new EstimatedPage();
            await GoogleEstimateSummary.OpenEstimatedWindow();
            // Verify the summary values
            await GoogleEstimateSummary.verifySummaryValues();
          });
        })
    })
 
