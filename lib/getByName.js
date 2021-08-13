const getByName = async (name) => {
  if (!name) return [];
  const nameConversion = name.split(" ").join("+");
  const res = await fetch(
    `https://www.breakingbadapi.com/api/characters?name=${nameConversion}`
  ).catch((err) => console.error(err));
  if (!res.ok) {
    return [];
  }
  const data = res.json().catch((err) => console.error(err));
  return data;
};

export default getByName;
