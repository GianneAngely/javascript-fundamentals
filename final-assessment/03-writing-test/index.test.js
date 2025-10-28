import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

// Pengujian pertama: sum dengan angka positif
test('sum of 1 and 2 should return 3', () => {
  assert.strictEqual(sum(1, 2), 3);
});

// Pengujian kedua: sum dengan angka negatif
test('sum of -1 and -2 should return -3', () => {
  assert.strictEqual(sum(-1, -2), -3);
});

// Pengujian ketiga: sum dengan angka nol
test('sum of 0 and 0 should return 0', () => {
  assert.strictEqual(sum(0, 0), 0);
});

// Pengujian keempat: sum dengan angka campuran
test('sum of -1 and 1 should return 0', () => {
  assert.strictEqual(sum(-1, 1), 0);
});
