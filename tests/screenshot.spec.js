import {test, expect} from '@playwright/test'

test ('shot', async ({ page}) =>{

    // Go to page url
    await page.goto('https://demoblaze.com/')
    
    // Create Screenshots folder under tests and copy path for screenshot, and include time
    await page.screenshot({path: 'tests/Screenshots/' +Date.now()+ 'NewPage.png'})  
    
    // await page.screenshot({path: 'tests/Screenshots/homePage.png'}) 
})


test ('fullshot', async ({ page}) =>{

    // // Go to page url
    await page.goto('https://demoblaze.com/')
    
    // Create folder and copy path for screenshot, including time and fullpage
    await page.screenshot({path: 'tests/Screenshots/' +Date.now()+ 'FullPg.png', fullPage: true})

    // const timestamp = 1727947848049;
    // const date = new Date(timestamp);
    // console.log(date.toLocaleString()); // This will print the date and time in a readable format

})

test ('elementshot', async ({ page}) =>{

    // Go to page url
    await page.goto('https://demoblaze.com/')
    
    // Create folder and copy path for screenshot, including time locator of element
    await page.getByRole('link', { name: 'PRODUCT STORE' }).screenshot({path: 'tests/Screenshots/' +Date.now()+ 'element.png'})

    // On playwright.config.js, you can set screenshot: 'on' to capture all files, or only-on-failure saved in test-results
})

test ('compare', async ({page}) =>{

    await page.goto('https://demoblaze.com/')

    // Take a screenshot of the current state of the homepage
    await page.screenshot({ path: 'tests/Screenshots/currentPage.png' });

    // Compare the screenshot with the reference image
    expect(await page.screenshot()).toMatchSnapshot('referencePage.png');
});

