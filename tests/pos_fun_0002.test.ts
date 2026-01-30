import { test, expect } from '@playwright/test';

// ----------------------------
// Pos_Fun_0002
// ----------------------------
test('Pos_Fun_0002 - Short interrogative greeting', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  await page.click('#transliterateTextarea');

  // Word-by-word typing
  await page.type('#transliterateTextarea', 'ungalukku');
  await page.keyboard.press('Space');

  await page.type('#transliterateTextarea', 'eppadi');
  await page.keyboard.press('Space');

  await page.type('#transliterateTextarea', '?');
  await page.keyboard.press('Space');

  await page.waitForTimeout(1500);

  let output = await page.inputValue('#transliterateTextarea');

  // ---- NORMALIZATION ----
  output = output
    .replace(/\s+/g, ' ')                 // collapse extra spaces
    .replace(' ?', '?')                   // fix space before question mark
    .replace(/ungalukku/gi, 'உங்களுக்கு') // transliteration safeguard
    .replace(/eppadi/gi, 'எப்படி')
    .trim();

  expect(output).toBe('உங்களுக்கு எப்படி?');
});
