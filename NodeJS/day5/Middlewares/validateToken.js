function validateToken(req, res, next){
  if (req.headers.token && req.headers.token === "abc") {
    console.log("Books middleware function");
    next();
  }
};

export default validateToken;