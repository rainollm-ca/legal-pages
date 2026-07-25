import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

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

test('terms identify the service and prohibit misuse', async () => {
  const terms = await read('pages/terms.tsx');
  for (const required of ['RainoMotion Social', 'TikTok', 'automated', 'intellectual property']) {
    assert.match(terms, new RegExp(required, 'i'));
  }
});
