/**
 * Getting all characters data from the server
 * @return {Array}
 */
const getAll = async () => {
  const res = await fetch("https://breakingbadapi.com/api/characters").catch(
    (err) => console.error(err)
  );
  if (!res.ok) {
    console.error(res);
    return;
  }
  const data = await res.json().catch((err) => console.error(err));
  return data;
};

export default getAll;
