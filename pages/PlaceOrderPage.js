exports.PlaceOrderPage =
class PlaceOrderPage {

    constructor(page) {
        this.page = page;
        this.cartLink = page.getByRole('link',{name:'Cart'});
        this.placerorderButton = page.getByRole('button',{name:'Place Order'});
        this.nameField = page.locator ('#name');
        this.countryField = page.locator ('#country');
        this.cityField = page.locator ('#city');
        this.cardField = page.locator ('#card');
        this.monthField = page.locator ('#month');
        this.yearField = page.locator ('#year');
        this.purchaseButton = page.locator ('button[onclick="purchaseOrder()"]');
    }

    async gotologinPage()
    {
        await this.page.goto('https://www.demoblaze.com');
        await this.cartLink.click();
    }

    async fillPlaceOrderForm(details) {
        await this.placerorderButton.click();
        await this.nameField.fill(details.name);
        await this.countryField.fill(details.country);
        await this.cityField.fill(details.city);
        await this.cardField.fill(details.card);
        await this.monthField.fill(details.month);
        await this.yearField.fill(details.year);
    }

    async purchase() {
        await this.purchaseButton.click()
    }
}





