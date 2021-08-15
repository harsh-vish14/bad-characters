/**
 * Getting all category from data
 * @param {Array} data
 * @return {Array}
 */

const category = (data) => {
  if (!data) {
    return [];
  }
  let result = [];
  for (let i = 0; i < data.length; i++) {
    let split = data[i]["category"].split(", ");
    result.push(...split);
  }
  return [...new Set(result)];
};

export default category;
