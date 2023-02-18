class MainPage {

    open () {return browser.url(`/`)}

    get textBox() {return $('#number')};
    get calculateBtn() {return $('#getFactorial')};
    get resultText() {return $('#resultDiv')};
    get title() {return $('//h1[contains(text(), "The greatest factorial calculator!")]')};
    get termsAndConditionsLink() {return $('a[href="/privacy"]')};
    get privacyLink() {return $('a[href="/terms"]')};
    get qxf2ServicesLink() {return $('a[href*="qa-interview')};

    async calculate(number){
        await this.textBox.setValue(number);
        await this.calculateBtn.click();
        return this.resultText.getText();
    };



}
module.exports = new MainPage();
