const MainPage = require('./../pageobjects/MainPage');
const TandCPage = require('./../pageobjects/TermsAndConditionsPage');
const PrivacyPage = require('./../pageobjects/PrivacyPage')
const Qxf2ServicesPage = require('./../pageobjects/Qxf2PageServices')
const { expect } = require('chai');

describe('Testing The greatest factorial calculator! functionality', () => {

    beforeEach(() => MainPage.open());
    
    it('Verify title and correct output of the calculator', async () => {
        
        expect(await MainPage.title.getText()).to.be.equal('The greatest factorial calculator!')
        expect(await MainPage.calculate(0), 'Result did not match expected result').to.be.equal('The factorial of 0 is: 1');
        expect(await MainPage.calculate(1), 'Result did not match expected result').to.be.equal('The factorial of 1 is: 1');
        expect(await MainPage.calculate(5), 'Result did not match expected result').to.be.equal('The factorial of 5 is: 120');
        expect(await MainPage.calculate(10), 'Result did not match expected result').to.be.equal('The factorial of 10 is: 3628800');
        expect(await MainPage.calculate(55), 'Result did not match expected result').to.be.equal('The factorial of 55 is: 1.2696403353658276e+73')

    });

    it('Verify that Terms and Condition link open the correct page', async() => {

        await MainPage.termsAndConditionsLink.click();
        expect(await TandCPage.termsAndConditionsText.getText(), 'Text did not match').to.be.equal('This is the terms and conditions document. We are not yet ready with it. Stay tuned!');
        expect(await browser.getUrl(),"URL for the Terms and Condition Page does not match").to.be.equal('https://qainterview.pythonanywhere.com/terms');
        
    });

    it('Verify that Privacy link open the correct page', async() => {

        await MainPage.privacyLink.click();
        expect(await PrivacyPage.privacyText.getText(), 'Text did not match').to.be.equal('This is the privacy document. We are not yet ready with it. Stay tuned!');
        expect(await browser.getUrl(), "URL for the Privacy Page does not match").to.be.equal('https://qainterview.pythonanywhere.com/privacy');
        
    });

    it('Verify that Qxf2 Services link open the correct page', async() => {

        await MainPage.qxf2ServicesLink.click();
        expect(await Qxf2ServicesPage.qxf2ServicesTitle.getText()).to.be.equal('QA for startups');
    });
})


