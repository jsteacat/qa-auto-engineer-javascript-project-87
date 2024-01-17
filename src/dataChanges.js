export default (obj1, obj2) => {
  // 1: get objects keys
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  function bubbleSort(arr) {
    for (let i = 0, endI = arr.length - 1; i < endI; i += 1) {
      let wasSwap = false;
      for (let j = 0, endJ = endI - i; j < endJ; j += 1) {
        if (arr[j].name > arr[j + 1].name) {
          const swap = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = swap;
          wasSwap = true;
        }
      }
      if (!wasSwap) break;
    }
    return arr;
  }

  // 2: get all unique keys
  const allKeys = bubbleSort(Array.from(new Set([...keys1, ...keys2])));

  return allKeys.map((key) => {
    if (!keys1.includes(key) && keys2.includes(key)) {
      return {
        key,
        type: 'added',
        value: obj2[key],
      };
    }
    if (keys1.includes(key) && !keys2.includes(key)) {
      return {
        key,
        type: 'deleted',
        value: obj1[key],
      };
    }
    if (obj1[key] !== obj2[key]) {
      return {
        key,
        type: 'changed',
        oldValue: obj1[key],
        value: obj2[key],
      };
    }
    return {
      key,
      type: 'unchanged',
      value: obj1[key],
    };
  });
};
