import { expect, test } from '@playwright/test'

test('home page loads', async ({ page }) => {
  const response = await page.goto('/')
  expect(response?.status()).toBe(200)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Look closer.')
})

test('home page has a link preview with an image', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /LUPA/)
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /opengraph-image/)
})

test('links to the GitHub releases', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('link', { name: /Watch releases on GitHub/ })).toHaveAttribute(
    'href',
    'https://github.com/lobatools/lupa'
  )
})

test('unknown pages show the 404 page', async ({ page }) => {
  const response = await page.goto('/this-page-does-not-exist')
  expect(response?.status()).toBe(404)
  await expect(page.getByRole('heading', { name: "This page doesn't exist" })).toBeVisible()
})

test('the LUPA logo in the header goes to the homepage', async ({ page }) => {
  await page.goto('/this-page-does-not-exist')
  await page.getByRole('banner').getByRole('link', { name: 'LUPA' }).click()
  await expect(page).toHaveURL('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Look closer.')
})
