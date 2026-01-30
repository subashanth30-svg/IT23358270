import { test, expect } from '@playwright/test';

test('Pos_UI_0002 - Tamil output updates automatically in real-time', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'naan pazham saapiden');

  // Wait for Tamil output element
  const outputLocator = page.locator('#transliterateOutput'); // ← check the page for the correct id
  await outputLocator.waitFor({ state: 'visible', timeout: 10000 });

  const finalOutput = await outputLocator.textContent();

  // Regex check: contains Tamil characters
  expect(/[க-ௌ]/.test(finalOutput || '')).toBeTruthy();

  // Optional: exact match check
  const expectedOutput = 'நான் பழம் சாப்பிடேன்';
  expect(finalOutput).toContain(expectedOutput);
});
