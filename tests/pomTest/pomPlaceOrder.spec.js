import {test } from '@playwright/test';
import { PlaceOrderPage } from '../../pages/PlaceOrderPage';


test ('Checkout', async ({page }) =>{

    const placeOrder = new PlaceOrderPage(page)  

    await placeOrder.gotologinPage()

       // Fill in the checkout form
    const placeOrderDetails = {
        name: 'Femi Rudoh',
        country: 'Ghana',
        city: 'Tekoradi',
        card: '4321567890123456',
        month: '12',
        year: '2024'
    };

    await placeOrder.fillPlaceOrderForm(placeOrderDetails);

       // Complete the purchase
        await placeOrder.purchase();

    // Verify the purchase confirmation
    const confirmationMessage = await page.textContent('.sweet-alert h2');
    if (confirmationMessage.includes('Thank you for your purchase!')) {
        console.log('Purchase was successful.');
    } else {
        console.log('Purchase failed.');
    }

    // Close the page
    await page.close();
 })