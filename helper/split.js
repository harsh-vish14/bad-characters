/**
 * Splitting data as per range
 * @param {Array} data
 * @param {Number} range
 * @return {Array}
 */

const split = (data, range) => {
  if (!data || data.length == 0) {
    return [];
  }
  if (range == 0 || data.length < range) {
    return [data];
  }

  let result = [];

  while (data.length) {
    result.push(data.splice(0, range));
  }
  return result;
};

export default split;
