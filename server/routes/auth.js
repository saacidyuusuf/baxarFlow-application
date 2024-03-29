const router = require("express").Router();
const passport = require("passport");
const CLIENT_URL = "http://localhost:5173/choose";
const LOGOUT_URL = "http://localhost:5173";

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successful",
      user: req.user,
      //cookies: req.cookies
    });
  }
});
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout((err) =>{
    if(err){
      return (err)
    }
  });
  res.redirect(LOGOUT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: CLIENT_URL + "/login/failed",
  })
);

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));
router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: CLIENT_URL + "/login/failed",
  })
);

module.exports = router;
