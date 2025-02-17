import { test, expect} from '@playwright/test';

test('Place order', async ({ page}) => {
    // Go to URL
    await page.goto('https://www.demoblaze.com');

    // soft assertion allows for continuity even if it fails
    await expect.soft(page).toHaveTitle('STORE')

    //Ensure that the Cart link is enabled to be clicked.
    await expect(page.getByRole('link',{name:'Cart'})).toBeEnabled();

    // Click cart button
    await page.getByRole('link',{name:'Cart'}).click();

    // Assert that Place order button is visible
    await expect(page.getByRole('button',{name:'Place Order'})).toBeVisible();

    // Click the Place Order button
    await page.getByRole('button',{name:'Place Order'}).click()

    await page.waitForSelector('id=name'); //To get the form up. For testing purpose only

    // using id to fill name same from the wait for selector.
    await page.fill('id=name','New-man Spirit'); 

    // Fill country and city using CSS locator
    await page.fill('#country', 'Naija');
    await page.fill('#city', 'SoftTech');

    // Fill month and year using label.
    await page.getByLabel('Month:').fill('July');
    await page.getByLabel('Year:').fill('1990');

    page.on('dialog',async dialog => {
        // expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Please fill out Name and Creditcard.')
        await dialog.accept('OK')
    })
    // Click the purchase button
    await page.getByRole('button',{'name':'Purchase'}).click()

    // using getByText to fill card details
    await page.getByText('Card').fill('7037770696-');

    // Click on Purchase button
    await page.getByRole('button', { name: 'Purchase' }).click();

    await expect(page.getByText('Thank you for your purchase!', 'Id:', 'Amount:', 'Card Number:', 'Name:')).toBeVisible();

    await page.getByRole('button', { name: 'OK' }).click();
})
