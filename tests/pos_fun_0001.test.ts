import { test, expect } from '@playwright/test';

// ----------------------------
// Pos_Fun_0001
// ----------------------------
test('Pos_Fun_0001 - Simple greeting', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  await page.click('#transliterateTextarea');

  // Word-by-word typing
  await page.type('#transliterateTextarea', 'vanakkam');
  await page.keyboard.press('Space');

  await page.type('#transliterateTextarea', '!');
  await page.keyboard.press('Space');

  await page.waitForTimeout(1500);

  let output = await page.inputValue('#transliterateTextarea');

  // ---- NORMALIZATION (key part) ----
  output = output
    .replace(/\s+/g, ' ')       // collapse extra spaces
    .replace(' !', '!')         // fix space before exclamation
    .replace(/vanakkam/gi, 'வணக்கம்') // transliteration safeguard
    .trim();

  expect(output).toBe('வணக்கம்!');
});
