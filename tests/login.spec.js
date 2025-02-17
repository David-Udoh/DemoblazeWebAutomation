import { test, expect} from '@playwright/test';

test('Login', async ({page}) => {
    await page.goto('https://www.demoblaze.com')

    // Click on the login button
    await page.click('id=login2');

    // Fill in the username
    await page.fill('#loginusername','New-man');
    
    // Fill in the password
    await page.fill('#loginpassword','#spirit_4@&');

    // Click on the login button
    await page.getByRole('button', { name: 'Log in' }).click();

    // Assert that the welcome message is visible with name of user
    await expect(page.getByRole('link', { name: 'Welcome New-man' })).toBeVisible();

    // Assert that the Log out button is visible
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();

}) 

test('changing text', async ({page}) => {
    
    await page.goto('https://www.demoblaze.com')

    await page.click('id=login2');

    await page.fill('#loginusername','New-man');
    
    await page.fill('#loginpassword','#spirit_4@&');

    await page.getByRole('button', { name: 'Log in' }).click();

    // ** #nameofuser keeps changing so we run assertion to verify visibility 
    const name = await page.locator("//a[@id='nameofuser']").textContent()

    await expect(await page.getByText(name)).toBeVisible()

    // check visibility of logo. clean codes.
    await expect(page.locator('//*[@id="nava"]/img')).toBeVisible()

    // check if Next button is enabled, you can also check for searchbox or textfields
    await expect(page.locator('#next2')).toBeEnabled();

    // Notice Next id,you can change to CSS by adding #
    await page.click('id=next2');

    await page.click('#logout2');

})  

