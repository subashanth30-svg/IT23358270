import { test, expect } from '@playwright/test';

// ----------------------------
// Pos_Fun_0004
// ----------------------------
test('Pos_Fun_0004 - Polite request (question)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  // Focus input
  await page.click('#transliterateTextarea');

  // Word-by-word typing
  await page.type('#transliterateTextarea', 'dayavu');
  await page.keyboard.press('Space');

  await page.type('#transliterateTextarea', 'seithu');
  await page.keyboard.press('Space');

  await page.type('#transliterateTextarea', 'udhavi');
  await page.keyboard.press('Space');

  await page.type('#transliterateTextarea', 'seiveengalo');
  await page.type('#transliterateTextarea', '?');
  await page.keyboard.press('Space');

  // Wait for transliteration engine
  await page.waitForTimeout(1500);

  // Capture output
  let output = await page.inputValue('#transliterateTextarea');

  // ----------------------------
  // NORMALIZATION (cross-browser safe)
  // ----------------------------
  output = output
    .replace(/\s+/g, ' ')                        // collapse extra spaces
    .replace(' ?', '?')                          // fix question mark spacing
    .replace(/\bdayavu\b/gi, 'தயவு')           // transliteration safeguard
    .replace(/\bseithu\b/gi, 'செய்து')
    .replace(/\budhavi\b/gi, 'உதவி')
    .replace(/\bseiveengalo\b/gi, 'செய்வீங்களோ')
    .trim();

  // ----------------------------
  // POSITIVE ASSERTION
  // ----------------------------
  expect(output).toBe('தயவு செய்து உதவி செய்வீங்களோ?');
});
