import { test, expect } from '@playwright/test';

test('has selenium title', async ({ page }) => {
    await page.goto('https://www.selenium.dev/');

    await expect(page).toHaveTitle('Selenium');

    const getDoc = page.getByRole('link', { name: 'Documentation' });

    await getDoc.click();

    const pageHeader = page.getByText('The Selenium Browser Automation Project')

    expect(pageHeader).toBeVisible();

});