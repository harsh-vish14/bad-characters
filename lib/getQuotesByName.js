/**
 * Getting all quotes by names
 * @param {String} name
 * @return {Array}
 */

const getQuotesByName = async (name) => {
  if (!name || name.length === 0) {
    return [];
  }
  let nameConversion = name.split(" ").join("+");
  const res = await fetch(
    `https://www.breakingbadapi.com/api/quote?author=${nameConversion}`
  ).catch((err) => console.error(err));
  if (!res.ok) {
    return [];
  }
  const data = await res.json();
  return data;
};

export default getQuotesByName;
