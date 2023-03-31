
const { issueJWT } = require("../authWithJWT/utils")

const GoogleCallBackController = (req, res, next) => {
    // Successful authentication, redirect home.
    const token = issueJWT(req.user);
  
    req.app.locals.GoogleToken = token.token

    res.redirect('http://localhost:3000/home');
}

module.exports = { GoogleCallBackController }
