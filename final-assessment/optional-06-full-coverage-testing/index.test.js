import sum from './index.js';
import { strict as assert } from 'node:assert';
import test from 'node:test';

test('Testing sum function with positive numbers', () => {
  assert.equal(sum(5, 3), 8);  // 5 + 3 = 8
  assert.equal(sum(10, 20), 30);  // 10 + 20 = 30
});

test('Testing sum function with negative numbers', () => {
  assert.equal(sum(-5, 3), 0);  // Jika ada angka negatif, harus mengembalikan 0
  assert.equal(sum(5, -3), 0);  // Sama seperti di atas
  assert.equal(sum(-5, -3), 0);  // Kedua angka negatif, harus 0
});

test('Testing sum function with non-numeric values', () => {
  assert.equal(sum('5', 3), 0);  // Input bukan number
  assert.equal(sum(5, '3'), 0);  // Input bukan number
  assert.equal(sum('5', '3'), 0);  // Kedua input bukan number
  assert.equal(sum(null, 3), 0);  // null sebagai input
  assert.equal(sum(5, undefined), 0);  // undefined sebagai input
});

test('Testing sum function with zero values', () => {
  assert.equal(sum(0, 5), 5);  // 0 + 5 = 5
  assert.equal(sum(5, 0), 5);  // 5 + 0 = 5
  assert.equal(sum(0, 0), 0);  // 0 + 0 = 0
});
