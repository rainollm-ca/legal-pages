import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');
const normalizeWhitespace = (source) => source.replace(/\s+/g, ' ');

const relativeLuminance = (hex) => {
  const channels = hex
    .replace('#', '')
    .match(/.{2}/g)
    .map((channel) => parseInt(channel, 16) / 255)
    .map((channel) =>
      channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
    );

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
};

const contrastRatio = (foreground, background) => {
  const lighter = Math.max(relativeLuminance(foreground), relativeLuminance(background));
  const darker = Math.min(relativeLuminance(foreground), relativeLuminance(background));
  return (lighter + 0.05) / (darker + 0.05);
};

test('public product page exposes product, legal, support, and deletion links', async () => {
  const home = await read('pages/index.tsx');
  for (const required of ['/terms', '/privacy', '/support', '/data-deletion', 'RainoMotion Social']) {
    assert.match(home, new RegExp(required.replace('/', '\\/')));
  }
});

test('privacy policy names TikTok data and deletion controls', async () => {
  const privacy = await read('pages/privacy.tsx');
  for (const required of ['TikTok', 'access token', 'delete', 'support@rainomotion.com']) {
    assert.match(privacy, new RegExp(required, 'i'));
  }
});

test('canonical RainoMotion Social icon is visible and used as browser metadata', async () => {
  const layout = await read('components/Layout.tsx');

  assert.match(layout, /href="\/rainomotion-social-icon\.png"/);
  assert.match(layout, /src="\/rainomotion-social-icon\.png"/);
  assert.match(layout, /alt="RainoMotion Social"/);
});

test('terms identify the service and prohibit misuse', async () => {
  const terms = await read('pages/terms.tsx');
  for (const required of ['RainoMotion Social', 'TikTok', 'automated', 'intellectual property']) {
    assert.match(terms, new RegExp(required, 'i'));
  }
});

test('privacy and terms identify the Ontario operator and governing jurisdiction', async () => {
  const privacy = normalizeWhitespace(await read('pages/privacy.tsx'));
  const terms = normalizeWhitespace(await read('pages/terms.tsx'));
  const operator = /Rabiaa Alomar, operating under the RainoMotion name in Ontario, Canada/i;

  assert.match(privacy, operator);
  assert.match(terms, operator);
  assert.match(terms, /laws of Ontario and the applicable federal laws of Canada/i);
  assert.match(terms, /courts (?:located )?in Ontario/i);
});

test('small-text color tokens meet WCAG AA contrast on site backgrounds', async () => {
  const css = await read('styles/globals.css');
  const tokens = Object.fromEntries(
    [...css.matchAll(/--(paper|paper-deep|faint|ochre):\s*(#[0-9a-f]{6})/gi)].map(
      ([, name, value]) => [name, value]
    )
  );

  for (const foreground of ['faint', 'ochre']) {
    for (const background of ['paper', 'paper-deep']) {
      assert.ok(
        contrastRatio(tokens[foreground], tokens[background]) >= 4.5,
        `--${foreground} must reach 4.5:1 on --${background}`
      );
    }
  }
});
