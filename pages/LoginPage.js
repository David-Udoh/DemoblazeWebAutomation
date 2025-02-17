exports.LoginPage =
class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginLink = page.getByRole('link', { name: 'Log in' });
        this.usernameField = page.locator('#loginusername');
        this.passwordField = page.locator('#loginpassword');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
    }

    async gotoLoginPage(){
        await this.page.goto('https://www.demoblaze.com');
        await this.loginLink.click();
    }
    
    // Action methods for username and password not hardcoded for reusability so we pass the function
    async login(username, password) {
        // await this.loginLink.click();
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
        // await this.page.pause()
    }
}