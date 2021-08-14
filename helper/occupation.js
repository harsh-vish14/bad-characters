const occupations = (values) => {
  if (!values || values.length == 0) {
    return "";
  }

  return values.join(", ");
};

export default occupations;
