import { test, expect} from '@playwright/test';

test('Sign up', async ({page}) => {
    await page.goto('https://www.demoblaze.com')

    await expect(page).toHaveTitle('STORE');

    await page.getByRole('link', {name: 'Sign up'}).click()
    // await page.click(id='signin2')
    // using css as element starts with #
    // await page.locator('#signin2').click();

    await page.getByLabel('Username:').fill('New-man');
    
    await page.getByLabel('Password:').fill('#spirit_4@&');

    await page.getByRole('button', {name: 'Sign up'}).click();

    await page.close();
}); 