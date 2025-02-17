import {test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';

test.describe('LoginTest', ()=>{

test ('loginPass', async ({page }) =>{

   const login = new LoginPage(page)

   await login.gotoLoginPage() 

   await login.login('New-man', 'spirit_4@&')
})

test ('loginFail with null username,password', async ({ page }) => {
   const login = new LoginPage(page);

   // Listen for the dialog event
   page.on('dialog', async dialog => {
       expect(dialog.message()).toBe('Please fill out Username and Password.');
       await dialog.accept();
   });

   await login.gotoLoginPage();
  // Empty username and empty password
   await login.login('', '');

   // Optionally, you can add an assertion to check that the login failed.
   await expect(page.getByRole('link', { name: 'Welcome New-man' })).toBeHidden();
})

test ('loginFail with invalid username,valid password', async ({ page }) => {
   const login = new LoginPage(page);

   // Listen for the dialog event
   page.on('dialog', async dialog => {
       expect(dialog.message()).toBe('User does not exist.');
       await dialog.accept();
   });

   await login.gotoLoginPage();
   await login.login('spirit-man', 'femi4&');
})

test ('loginFail valid username, invalid password', async ({ page }) => {
   const login = new LoginPage(page);

   // Listen for the dialog event
   page.on('dialog', async dialog => {
       expect(dialog.message()).toBe('Wrong password.');
       await dialog.accept();
   });

   await login.gotoLoginPage();
   await login.login('femi-fresh', '#You@4');
   
})

})