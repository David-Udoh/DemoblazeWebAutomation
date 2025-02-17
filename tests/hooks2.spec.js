import { test, expect} from '@playwright/test'

// Log in with beforeEach for every test.
test.beforeEach ('Log in', async ({ page}) => {

    // Go to URL
    await page.goto('https://www.demoblaze.com')

    // Click on Log in link
    await page.click('id=login2')

    // Fill username and password fields.
    await page.fill('#loginusername','New-man')
    
    await page.fill('#loginpassword','#spirit_4@&')

    // click on Login button
    await page.getByRole('button', { name: 'Log in' }).click();
});

// Log out from every test with afterEach
test.afterEach( 'Log out', async ({page}) => {

    await page.getByRole('link', { name: 'Log out'}).click()
});

test ('Product length', async ({ page}) => {

    // Verify number of products on page to be 9
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9)
   
});

test ('Add to cart', async ({ page}) => {

    // Select product, sony xperia z5 to be added
    await page.getByRole('link', { name: 'Sony xperia z5' }).click()

    // Click Add to Cart
    await page.getByRole('link', { name: 'Add to cart' }).click()

    // Dialog
    page.on('dialog', async dialog=> {
        // expect(dialog.type()).toContain('confirm') //button name is confirmation
        expect(dialog.message()).toContain('Product added.')
        // using accept() means ok, await dialog.dismiss() means cancel 
        await dialog.accept();

    })   
    
});