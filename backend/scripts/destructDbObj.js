const destructDbObj = (obj) => {
  const { userId, uri, ...result } = obj;
  return result;
};

module.exports = destructDbObj;
