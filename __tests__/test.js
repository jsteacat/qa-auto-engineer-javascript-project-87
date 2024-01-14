import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiffs from '../src/index.js';

const getFixturePath = (directory, filename) => path.join(dirname(fileURLToPath(import.meta.url)), '__fixtures__', directory, filename);
const readFile = (directory, filename) => fs.readFileSync(getFixturePath(directory, filename), 'utf-8');
const expectedStylish = readFile('expected', 'stylish.txt');
const expectedPlain = readFile('expected', 'plain.txt');
const expectedJson = readFile('expected', 'json.txt');

test('test json files', () => {
  const file1 = getFixturePath('files', 'file1.json');
  const file2 = getFixturePath('files', 'file2.json');
  expect(genDiffs(file1, file2, 'stylish')).toEqual(expectedStylish);
  expect(genDiffs(file1, file2, 'plain')).toEqual(expectedPlain);
  expect(genDiffs(file1, file2, 'json')).toEqual(expectedJson);
});

test('test yml files', () => {
  const file1 = getFixturePath('files', 'file1.yml');
  const file2 = getFixturePath('files', 'file2.yml');
  expect(genDiffs(file1, file2, 'stylish')).toEqual(expectedStylish);
  expect(genDiffs(file1, file2, 'plain')).toEqual(expectedPlain);
  expect(genDiffs(file1, file2, 'json')).toEqual(expectedJson);
});
