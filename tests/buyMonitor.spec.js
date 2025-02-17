import { test, expect} from '@playwright/test';

test('homepage', async ({page}) => {
    await page.goto('https://www.demoblaze.com')

    await expect(page).toHaveTitle('STORE');

    // click on Login
    await page.click('id=login2');

    // fill username and password
    await page.fill('#loginusername','New-man');
    
    await page.fill('#loginpassword','#spirit_4@&');

    // click login
    await page.getByRole('button', { name: 'Log in' }).click();

    // click on monitors under categories
    await page.getByRole('link', { name: 'Monitors' }).click();

    // click on ASUS Full HD
    await page.getByRole('link', { name: 'ASUS Full HD' }).click();

    //Listener for a special message using dialongs
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });

    await page.getByRole('link', { name: 'Add to cart' }).click();

    page.close();
});