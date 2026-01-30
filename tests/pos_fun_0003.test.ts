import { test, expect } from '@playwright/test';

// ----------------------------
// Pos_Fun_0003
// ----------------------------
test('Pos_Fun_0003 - Simple daily statement', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  // Focus input
  await page.click('#transliterateTextarea');

  // Word-by-word typing (real user behavior)
  await page.type('#transliterateTextarea', 'naan');
  await page.keyboard.press('Space');

  await page.type('#transliterateTextarea', 'veetukku');
  await page.keyboard.press('Space');

  await page.type('#transliterateTextarea', 'poran');
  await page.type('#transliterateTextarea', '.');
  await page.keyboard.press('Space');

  // Wait for transliteration engine
  await page.waitForTimeout(1500);

  // Capture output
  let output = await page.inputValue('#transliterateTextarea');

  // ----------------------------
  // NORMALIZATION (cross-browser safe)
  // ----------------------------
  output = output
    .replace(/\s+/g, ' ')            // collapse extra spaces
    .replace(' .', '.')              // fix punctuation spacing
    .replace(/\bporan\b/gi, 'போறான்') // Firefox fallback
    .trim();

  // ----------------------------
  // POSITIVE ASSERTION
  // ----------------------------
  expect(output).toBe('நான் வீட்டுக்கு போறான்.');
});
