const destructUser = (obj) => {
  const { providerId, lastLoginAt, password, ...user } = obj;
  return user;
};

module.exports = destructUser;
