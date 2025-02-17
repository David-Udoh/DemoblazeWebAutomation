import { test, expect} from '@playwright/test'

test ('Product list', async ({ page}) => {

    await page.goto('https://www.demoblaze.com')

    await expect(page).toHaveTitle('STORE');

    // Fill in login details
    await page.click('id=login2');

    await page.fill('#loginusername','New-man');
    
    await page.fill('#loginpassword','#spirit_4@&');

    await page.getByRole('button', { name: 'Log in' }).click();

    // Verify number of products on page
    const productsNo = await page.$$('.hrefch')

    expect(productsNo).toHaveLength(9)
    console.log('Products number:', productsNo.length);

    // click on log out button 
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();

    await page.getByRole('link', { name: 'Log out' }).click();

    // List out the products
    await page.waitForSelector('div#tbodyid h4 a');

    let products = await page.$$("//div[@id='tbodyid']//h4//a");
    for( let product of products)

    {
        let  productName = await product.textContent();
        console.log(productName);
    }

    await page.close();
});
