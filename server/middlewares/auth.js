import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: "No token" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      req.user = { id: tokenDecode.id };
      next();
    } else {
      res.json({ success: false, message: "Token does not match" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default userAuth;
