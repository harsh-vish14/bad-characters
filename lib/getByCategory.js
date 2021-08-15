/**
 * Getting filter data as per category from server
 * @param {String} categoryName
 * @return {Array}
 */

const getByCategory = async (categoryName) => {
  if (!categoryName) {
    return [];
  }
  const category = categoryName.split(" ").join("+");
  const res = await fetch(
    `https://www.breakingbadapi.com/api/characters?category=${category}`
  ).catch((err) => console.error(err));
  const data = await res.json().catch((err) => console.error(err));
  if (!res.ok) {
    console.error(res);
    return [];
  }
  return data;
};

export default getByCategory;
