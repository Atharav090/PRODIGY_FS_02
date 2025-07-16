import jwt from "jsonwebtoken";

// generate token
export const generateToken = (userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET);
  return token;
};
