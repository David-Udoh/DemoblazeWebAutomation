import { expect } from '@playwright/test';

class HomePage {

    constructor(page) {
        this.page = page;
        this.welcome = page.locator('#nameofuser')
        this.loginHeader = page.getByRole('link', { name: 'Log in' });
        this.logOut = page.locator('#logout2');
    }        

    async verifyHeader()
    {
        await expect(this.loginHeader).toBeVisible()
    }

    async verifyWelcome()
    {
        await expect(this.welcome).toBeVisible()
    }

    async Logout() 
    {
        await this.logOut.click()
    }
}
export {HomePage};

// Adding assertions to pom HomePage for login and welcome message.