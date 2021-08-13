const urlCreator = (string) => {
  return `/${string.split(" ").join("-").toLowerCase()}`;
};

export default urlCreator;
