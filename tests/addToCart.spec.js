import { test, expect} from '@playwright/test'

test ('Add cart', async ({ page}) => {

    await page.goto('https://www.demoblaze.com')

    // await expect(page).toHaveTitle('STORE');

    await page.click('id=login2');

    await page.fill('#loginusername','femi-fresh');
    
    await page.fill('#loginpassword','femi4&');

    await page.getByRole('button', { name: 'Log in' }).click();

    await page.locator('//*[@id="tbodyid"]/div[6]/div/div/h4/a').click()

    await page.locator("//a[normalize-space()='Add to cart']").click()

    page.on('dialog', async dialog=> {
        // expect(dialog.type()).toContain('confirm') //button name is confirmation
        expect(dialog.message()).toContain('Product added.')
        // using accept() means ok, await dialog.dismiss() means cancel 
        await dialog.accept();

    })   
    
});