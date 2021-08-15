/**
 * Combining all occupations string to one string
 * @param {Array} values
 * @return {String}
 */

const occupations = (values) => {
  if (!values || values.length == 0) {
    return "";
  }

  return values.join(", ");
};

export default occupations;
