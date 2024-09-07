const policyMakerMiddleware = (req, res, next) => {
  if (req.user.role !== "Policy Maker") {
    return res
      .status(403)
      .json({
        msg: "Access denied. You are not authorized to perform this action.",
      });
  }
  next();
};

module.exports = policyMakerMiddleware;
