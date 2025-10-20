import jwt from "jsonwebtoken";

export const protectRoute = (req, res, next) => {
  const token = req.cookies.token || "";
  if (!token)
    return res.status(400).json({
      success: false,
      error: true,
      message: "Unauthorized - No Token Provided",
    });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Unauthorized - Invalid Token",
      });
    }
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log("Error in Protect Route: ", error.message);
    return res.status(500).json({
      success: false,
      error: true,
      message: "Error in Validating the User",
    });
  }
};
