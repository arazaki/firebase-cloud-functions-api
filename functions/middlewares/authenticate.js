const FirebaseConfig = require("../FirebaseConfig");
const auth = FirebaseConfig.auth;

module.exports = async (req, res, next) => {
  const authorizationHeader = req.headers["authorization"];

  if (!authorizationHeader) {
    res.status(401).send("Missing Authorization Header");
    return;
  }

  try {
    await authorizeUser(authorizationHeader);
  } catch (error) {
    res.status(401).send(error.message);
    return;
  }
  next();
};

const authorizeUser = async (authorizationHeader) => {
  if (!authorizationHeader) {
    // eslint-disable-next-line no-throw-literal
    throw "no authorization provided!";
  }

  const token = authorizationHeader.split(" ")[1];

  try {
    const decodedToken = await auth.verifyIdToken(token);

    return decodedToken;
  } catch (error) {
    throw error;
  }
};
