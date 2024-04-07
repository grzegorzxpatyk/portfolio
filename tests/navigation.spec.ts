import { test, expect } from '@playwright/test';

test('test navigating between pages', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Grzegorz Patyk');
    await expect(page.getByRole('link', { name: 'home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'projects' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'photography' })).toBeVisible();

    await page.getByRole('link', { name: 'projects' }).click();
    await expect(page).toHaveTitle(/Projects/);

    await page.getByRole('link', {name: 'photography'}).click();
    await expect(page).toHaveTitle(/Photography/);
});
