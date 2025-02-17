import { test, expect} from '@playwright/test'

test ('home page', async ({ page}) => {

    await page.goto('https://www.demoblaze.com')

    // await expect(page).toHaveTitle('STORE');

    await page.click('id=login2');

    await page.fill('#loginusername','femi-fresh');
    
    await page.fill('#loginpassword','femi4&');

    await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]');

    await page.waitForTimeout(2000); // Waits for 2 seconds

    // Assert number of products on page put in const variable
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9)

    // click on log out button 
    await page.getByRole('link', { name: 'Log out'}).click()

});

test ('Add cart', async ({ page}) => {

    await page.goto('https://www.demoblaze.com')

    // await expect(page).toHaveTitle('STORE');

    await page.click('id=login2');

    await page.fill('#loginusername','femi-fresh');
    
    await page.fill('#loginpassword','femi4&');

    await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]');

    await page.locator('//*[@id="tbodyid"]/div[6]/div/div/h4/a').click()

    await page.locator("//a[normalize-space()='Add to cart']").click()

    page.on('dialog', async dialog=> {
        // expect(dialog.type()).toContain('confirm') //button name is confirmation
        expect(dialog.message()).toContain('Product added.')
        // using accept() means ok, await dialog.dismiss() means cancel 
        await dialog.accept();

    })   
    
});