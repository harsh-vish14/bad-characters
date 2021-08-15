/**
 * Getting filter data as per name
 * @param {Boolean} newPage
 * @param {String} name
 * @return {Array}
 */

const getByName = async (name, newPage = false) => {
  if (!name) return [];
  let nameConversion;
  if (newPage) {
    nameConversion = name.split("-").join("+");
  } else {
    nameConversion = name.split(" ").join("+");
  }
  const res = await fetch(
    `https://www.breakingbadapi.com/api/characters?name=${nameConversion}`
  ).catch((err) => console.error(err));
  if (!res.ok) {
    return [];
  }
  const data = await res.json().catch((err) => console.error(err));
  return data;
};

export default getByName;
