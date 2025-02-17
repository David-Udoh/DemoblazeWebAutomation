import {test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';

test ('Homepage', async ({ page }) => {

const login = new LoginPage(page)

// Navigate to login page 
await login.gotoLoginPage() 

// Perform login 
await login.login('New-man', 'spirit_4@&')

const homepage = new HomePage(page)

await homepage.verifyWelcome()

await homepage.Logout()

await homepage.verifyloginheader()
})