import { test, expect } from '@playwright/test';

// ----------------------------
// Neg_Fun_0001 - Missing spaces + heavy slang
// ----------------------------
test('Neg_Fun_0001 - Missing spaces + heavy slang', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'epdienna');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);

  const output = (await page.inputValue('#transliterateTextarea')).replace(/\s+/g, ' ').trim();
  expect(output).toBe('எப்படி என்ன'); // fail case
});

// ----------------------------
// Neg_Fun_0002 - Mixed English + Tamil particles
// ----------------------------
test('Neg_Fun_0002 - Mixed English + Tamil particles', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type(
    '#transliterateTextarea',
    'indha weekend la family oda beach ku poitu evening la mall la shopping pannalaam nu plan'
  );
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1500);

  const output = (await page.inputValue('#transliterateTextarea')).replace(/\s+/g, ' ').trim();
  expect(output).toBe(
    'இந்த வீகெண்ட்ல ஃபாமிலியோட பீச்சுக்கு போயிட்டு ஈவ்னிங்ல மால்ல ஷாப்பிங் பண்ணலாம் னு பிளான்'
  ); // fail case
});

// ----------------------------
// Neg_Fun_0003 - English abbreviation breaks spacing
// ----------------------------
test('Neg_Fun_0003 - English abbreviation spacing issue', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'eta eppo?');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);

  const output = (await page.inputValue('#transliterateTextarea')).replace(/\s+/g, ' ').trim();
  expect(output).toBe('ETA எப்போ?'); // fail case
});

// ----------------------------
// Neg_Fun_0004 - Nested punctuation disrupts Tamil mapping
// ----------------------------
test('Neg_Fun_0004 - Nested punctuation', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'sari, "naan (ipo) varren"?');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);

  const output = (await page.inputValue('#transliterateTextarea')).replace(/\s+/g, ' ').trim();
  expect(output).toBe('சரி, “நான் (இப்போ) வர்றேன்”?'); // fail case
});

// ----------------------------
// Neg_Fun_0005 - Date + time + currency formatting errors
// ----------------------------
test('Neg_Fun_0005 - Date, time, currency', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'meeting 12/02/2026 7.30 PM; fee USD 15; room no 3B');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);

  const output = (await page.inputValue('#transliterateTextarea')).replace(/\s+/g, ' ').trim();
  expect(output).toBe('மீட்டிங் 12/02/2026 7.30 PM; fee USD 15; ரூம் நொ 3B'); // fail case
});

// ----------------------------
// Neg_Fun_0006 - Multiple excessive vowels
// ----------------------------
test('Neg_Fun_0006 - Excessive vowels', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'vaaannnakkam');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);

  const output = (await page.inputValue('#transliterateTextarea')).replace(/\s+/g, ' ').trim();
  expect(output).toBe('வணக்கம்'); // fail case
});

// ----------------------------
// Neg_Fun_0007 - Long joined compound word breaks segmentation
// ----------------------------
test('Neg_Fun_0007 - Long joined compound word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type(
    '#transliterateTextarea',
    'naanindhainagarthunagarbusstandkuchennailaeranguvOm'
  );
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1500);

  const output = (await page.inputValue('#transliterateTextarea')).replace(/\s+/g, ' ').trim();
  expect(output).toBe(
    'நான் இந்த நகர்த் து நகர்பஸ் ஸ்டாண்ட் கு சென்னைல இறங்குவோம்'
  ); // fail case
});

// ----------------------------
// Neg_Fun_0008 - Brand name + Tamil particle + hyphen
// ----------------------------
test('Neg_Fun_0008 - Brand + hyphen', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type(
    '#transliterateTextarea',
    'WhatsApp-la link share pannunga; Teams-oda meeting id send pannunga'
  );
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1500);

  const output = (await page.inputValue('#transliterateTextarea')).replace(/\s+/g, ' ').trim();
  expect(output).toBe(
    'WhatsApp-ல லிங்க் ஷேர் பண்ணுங்க; Teams-ஓட மீட்டிங் ஐடி செண்ட் பண்ணுங்க'
  ); // fail case
});

// ----------------------------
// Neg_Fun_0009 - Long paragraph with slang + repetitions
// ----------------------------
test('Neg_Fun_0009 - Long paragraph with slang', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type(
    '#transliterateTextarea',
    'inniku office la romba rush da… msg panren'
  );
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1500);

  const output = (await page.inputValue('#transliterateTextarea')).replace(/\s+/g, ' ').trim();
  expect(output).toBe('இன்னிக்கு ஆபீஸ்ல ரொம்ப ரஷ் டா…'); // fail case
});

// ----------------------------
// Neg_Fun_0010 - Units + numbers + "noon" token
// ----------------------------
test('Neg_Fun_0010 - Units, numbers, noon token', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'paal 500 ml, arisi 2 kg; 12.00 noon kulla vaanga');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1500);

  const output = (await page.inputValue('#transliterateTextarea')).replace(/\s+/g, ' ').trim();
  expect(output).toBe('பால் 500 ml, அரிசி 2 kg; 12.00 noon குள்ள வாங்க'); // fail case
});
