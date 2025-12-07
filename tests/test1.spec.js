import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/vue/dist/#/');
    await page.locator('html').click();
    await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
    await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('test');
    await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
    await expect(page.getByRole('textbox', { name: 'What needs to be done?' })).toBeVisible();
    await page.getByText('test').click();
    await expect(page.getByRole('main')).toContainText('test');
});