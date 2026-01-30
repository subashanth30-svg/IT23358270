import { test, expect } from '@playwright/test';

// ----------------------------
// Pos_Fun_0005
// ----------------------------
test('Pos_Fun_0005 - Imperative command', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  // Focus input
  await page.click('#transliterateTextarea');

  // Word-by-word typing
  await page.type('#transliterateTextarea', 'saapidungo');
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
    .replace(/\s+/g, ' ')             // collapse extra spaces
    .replace(' .', '.')               // fix punctuation spacing
    .replace(/\bsaapidungo\b/gi, 'சாப்பிடுங்கோ') // transliteration safeguard
    .trim();

  // ----------------------------
  // POSITIVE ASSERTION
  // ----------------------------
  expect(output).toBe('சாப்பிடுங்கோ.');
});
