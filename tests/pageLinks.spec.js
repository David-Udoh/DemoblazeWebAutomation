import { test, expect } from '@playwright/test';

test ('All links', async ({ page }) => {
    // Go to demoblaze.com
    await page.goto('https://demoblaze.com/');

    // Function to get all links from the page
    const linkUrls = await page.$$eval('a', links => 
        links.map(link => link.href)
    );

    expect(linkUrls).toBeTruthy();
    console.log(linkUrls);
    
    // Check if each link is valid, and back to the original page after checking each link
    for (const url of linkUrls) {
        const response = await page.goto(url);
        if (response) {
            expect(response.status()).toBeLessThan(400);
        } else {
            console.error(`Failed to navigate to ${url}`);
        }
        await page.goBack(); 
    }
});

test ('Try-catch block links', async ({ page }) => {
    // Go to demoblaze.com
    await page.goto('https://demoblaze.com/');

    // Function to get all links from the page
    const linkUrls = await page.$$eval('a', links => 
        links.map(link => link.href)
    );

    expect(linkUrls).toBeTruthy();
    console.log(linkUrls);

    // Check if each link is valid, and back to the original page after checking each link
    for (const url of linkUrls) {
        try {
            const response = await page.goto(url, { timeout: 10000 });
            if (response) {
                expect(response.status()).toBeLessThan(400);
            } else {
                console.error(`Failed to navigate to ${url}`);
            }
        } catch (error) {
            console.error(`Error navigating to ${url}:`, error);
        }
        await page.goBack();
    }
});
