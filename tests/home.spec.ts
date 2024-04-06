import { test, expect } from '@playwright/test';

test('Homepage has title', async ({ page }) => {
    await page.goto('/');

    await expect(
        page.getByRole('heading', { name: 'Hello there! I am Greg 👋' })
    ).toBeVisible();
});

test('resume link is working', async ({ page }) => {
    await page.goto('/');
    const newTabPromise = page.waitForEvent('popup');

    await page.getByRole('link', { name: /resume/ }).click();
    const newTab = await newTabPromise;
    const newTabLocation = await newTab.evaluate('location.href');

    await expect(newTabLocation).toBe('https://grzegorzxpatyk.github.io/resume/');
});
