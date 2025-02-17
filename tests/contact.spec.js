const { test, expect} = require ('@playwright/test');

test ('Locators', async ({ page})=> {
    //Go to URL
    await page.goto('https://www.demoblaze.com');

    //Click on Contact on header
    await page.getByRole('link', { name: 'Contact' }).click();

    //Fill in recipient email as requested
    await page.fill('#recipient-email', 'femi.freshtech@gmail.com');
    await expect(page.locator('#recipient-email')).toHaveValue('femi.freshtech@gmail.com')

    //Fill in recipient name as requested
    await page.fill('#recipient-name', 'femi-fresh');

    //Type in message
    await page.locator('#message-text').fill('We need the following phone for mobile app testing');

    //Click on send message button
    await page.getByRole('button', { name: 'Send message' }).click();

    page.close();
})