/**
 * Creating dynamic url by name provided
 * @param {String} string
 * @return {String}
 */

const urlCreator = (string) => {
  return `/${string.split(" ").join("-").toLowerCase()}`;
};

export default urlCreator;
