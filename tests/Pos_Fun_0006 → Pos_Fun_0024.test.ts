import { test, expect } from '@playwright/test';

// ----------------------------
// Pos_Fun_0001 - Convert a short daily greeting
// ----------------------------
test('Pos_Fun_0001 - Convert a short daily greeting', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'vanakkam!');
  await page.waitForTimeout(1500);
  const output = await page.inputValue('#transliterateTextarea');
  expect(output).toBe(output);
});

// ----------------------------
// Pos_Fun_0006 - Positive declarative (future)
// ----------------------------
test('Pos_Fun_0006 - Positive declarative (future)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'naan appadi seiven.');
  await page.waitForTimeout(1500);
  const output = await page.inputValue('#transliterateTextarea');
  expect(output).toBe(output);
});

// ----------------------------
// Pos_Fun_0007 - Negative declarative (present)
// ----------------------------
test('Pos_Fun_0007 - Negative declarative (present)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'naan appadi seiya maatten.');
  await page.waitForTimeout(1500);
  const output = await page.inputValue('#transliterateTextarea');
  expect(output).toBe(output);
});

// ----------------------------
// Pos_Fun_0008 - Compound sentence
// ----------------------------
test('Pos_Fun_0008 - Compound sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'naan velai mudichuttu vandhu sapiduven, apram konjam rest edukka poren.');
  await page.waitForTimeout(1500);
  const output = await page.inputValue('#transliterateTextarea');
  expect(output).toBe(output);
});

// ----------------------------
// Pos_Fun_0009 - Complex conditional sentence
// ----------------------------
test('Pos_Fun_0009 - Complex conditional sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'mazhai peiyalanna naama poovom; illatti naalai kalaila poalam.');
  await page.waitForTimeout(1500);
  const output = await page.inputValue('#transliterateTextarea');
  expect(output).toBe(output);
});

// ----------------------------
// Pos_Fun_0010 - Interrogative with time
// ----------------------------
test('Pos_Fun_0010 - Interrogative with time', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'neengal eppo varuveenga?');
  await page.waitForTimeout(1500);
  const output = await page.inputValue('#transliterateTextarea');
  expect(output).toBe(output);
});

// ----------------------------
// Pos_Fun_0011 - Informal phrasing (colloquial)
// ----------------------------
test('Pos_Fun_0011 - Informal phrasing (colloquial)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'sari bro, polam.');
  await page.waitForTimeout(1500);
  const output = await page.inputValue('#transliterateTextarea');
  expect(output).toBe(output);
});

// ----------------------------
// Pos_Fun_0012 - Pronoun variation (we)
// ----------------------------
test('Pos_Fun_0012 - Pronoun variation (we)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'naanga ippo veliya porom.');
  await page.waitForTimeout(1500);
  const output = await page.inputValue('#transliterateTextarea');
  expect(output).toBe(output);
});

// ----------------------------
// Pos_Fun_0013 - Plural noun usage
// ----------------------------
test('Pos_Fun_0013 - Plural noun usage', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'pasanga ground la vilayadraanga.');
  await page.waitForTimeout(1500);
  const output = await page.inputValue('#transliterateTextarea');
  expect(output).toBe(output);
});

// ----------------------------
// Pos_Fun_0014 - Tense: past
// ----------------------------
test('Pos_Fun_0014 - Tense: past', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'naan nethu veetukku poitten.');
  await page.waitForTimeout(1500);
  const output = await page.inputValue('#transliterateTextarea');
  expect(output).toBe(output);
});

// ----------------------------
// Pos_Fun_0015 - Present progressive (colloq.)
// ----------------------------
test('Pos_Fun_0015 - Present progressive (colloq.)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'avan padichiddu irukaan .');
  await page.waitForTimeout(1500);
  const output = await page.inputValue('#transliterateTextarea');
  expect(output).toBe(output);
});

// ----------------------------
// Pos_Fun_0016 - Tense: future
// ----------------------------
test('Pos_Fun_0016 - Tense: future', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'naalaikku kaalaiyila naanga varuvom');
  await page.waitForTimeout(1500);
  const output = await page.inputValue('#transliterateTextarea');
  expect(output).toBe(output);
});

// ----------------------------
// Pos_Fun_0017 - Mixed English term (brand)
// ----------------------------
test('Pos_Fun_0017 - Mixed English term (brand)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'innaiku Zoom meeting irukku.');
  await page.waitForTimeout(1500);
  const output = await page.inputValue('#transliterateTextarea');
  expect(output).toBe(output);
});

// ----------------------------
// Pos_Fun_0018 - Names/places and English words
// ----------------------------
test('Pos_Fun_0018 - Names/places and English words', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'ramesh Chennai la office ku late aagiduvaaru traffic athigama irukiirathala.');
  await page.waitForTimeout(1500);
  const output = await page.inputValue('#transliterateTextarea');
  expect(output).toBe(output);
});

// ----------------------------
// Pos_Fun_0019 - Abbreviations retained
// ----------------------------
test('Pos_Fun_0019 - Abbreviations retained', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'OTP vanduchaa? inbox check pannunga.');
  await page.waitForTimeout(1500);
  const output = await page.inputValue('#transliterateTextarea');
  expect(output).toBe(output);
});

// ----------------------------
// Pos_Fun_0020 - Punctuation variants
// ----------------------------
test('Pos_Fun_0020 - Punctuation variants', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'sari, "naan varreen"!');
  await page.waitForTimeout(1500);
  const output = await page.inputValue('#transliterateTextarea');
  expect(output).toBe(output);
});

// ----------------------------
// Pos_Fun_0021 - Currency, time, date
// ----------------------------
test('Pos_Fun_0021 - Currency, time, date', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'ticket rate Rs. 750; meeting 7.30 AM; date 2026-05-21.');
  await page.waitForTimeout(1500);
  const output = await page.inputValue('#transliterateTextarea');
  expect(output).toBe(output);
});

// ----------------------------
// Pos_Fun_0023 - Multiple spaces + line break
// ----------------------------
test('Pos_Fun_0023 - Multiple spaces + line break', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'naan veetukku pogiren. neenga varenjaa kooda varen.');
  await page.waitForTimeout(1500);
  const output = await page.inputValue('#transliterateTextarea');
  expect(output).toBe(output);
});

// ----------------------------
// Pos_Fun_0024 - Paragraph-style medium input
// ----------------------------
test('Pos_Fun_0024 - Paragraph-style medium input', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.click('#transliterateTextarea');
  await page.type('#transliterateTextarea', 'innaiku nalaiku rendu naalum velai busy; aana naalai evening kita kita paathukalaam, appuram WhatsApp la ping pannunga please.');
  await page.waitForTimeout(1500);
  const output = await page.inputValue('#transliterateTextarea');
  expect(output).toBe(output);
});
