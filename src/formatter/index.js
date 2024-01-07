import jsonFormatter from './json.js';
import plainFormatter from './plain.js';

const formatter = {
  json: jsonFormatter,
  plain: plainFormatter,
};

export default (tree, format = 'plain') => {
  if (!formatter[format]) {
    throw new Error(`Unknown format: ${format}`);
  }
  return formatter[format](tree);
};
