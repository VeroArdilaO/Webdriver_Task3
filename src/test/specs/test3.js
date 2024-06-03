const GoogleCloudPage = require('../../pageobjects/google_cloud.page')
const GoogleCloudLink = require('../../pageobjects/google_cloud_link.page')
const GoogleCloudCalculator = require('../../pageobjects/google_cloud_add_estimate.page')
const EstimatedPage = require('../../pageobjects/google_cloud_estimate.page')
const { testdata } = require('../../pageobjects/Data/test.data');

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
            await GoogleCloudCalculator.addToEstimate();
            // Click on the "Compute engine" section button
            await GoogleCloudCalculator.computeEngineClick();
            // Wait for the menu to be displayed
            await GoogleCloudCalculator.SelectionMenue();
            //add the number of instances to 4
            await GoogleCloudCalculator.numberOfInstancesOption(testdata.numberOfInstances);
            // Checking that the operating system is free
            await GoogleCloudCalculator.softwareDropDownClick();
            // Click on the "regular" radio button
            await GoogleCloudCalculator.regularRadioClick();
            // Click on the machine type and select n1-standard-8
            await GoogleCloudCalculator.machineTypeClick();
            // Click on the "Add GPUs" button
            await GoogleCloudCalculator.addGPUsButtonClick();
            // Interact with the GPU model dropdown
            await GoogleCloudCalculator.gpuTypeDropdownClick();
            //the selection options for the dropdown and select the "2x375" option
            await GoogleCloudCalculator.localSSDDropdownClick();
            // Open the region dropdown options by clicking on the dropdown opener
            await GoogleCloudCalculator.regionDropdownClick();
            // Click on the Committed use "1 Year" button
            await GoogleCloudCalculator.committedButtonSelect();
            // Check if the price is calculated in the correct section
            await GoogleCloudCalculator.pagePricesTotal();
            // Press the share button and check the total price
            await GoogleCloudCalculator.shareButtonOpener();
            // Open the Total estimated cost section
            await GoogleCloudCalculator.OpenEstimatedCost();
            // Switch to the new window
            await EstimatedPage.OpenEstimatedWindow();
            // Verify the summary values
            await EstimatedPage.verifySummaryValues();
          });
        })
    })
 
