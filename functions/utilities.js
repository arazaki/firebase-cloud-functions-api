const authorizeUser = async (authorizationHeader, firebaseAuth) => {
  if (!authorizationHeader) {
    // eslint-disable-next-line no-throw-literal
    throw "no authorization provided!";
  }

  const token = authorizationHeader.split(" ")[1];

  try {
    const decodedToken = await firebaseAuth.verifyIdToken(token);

    return decodedToken;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  authorizeUser,
};
