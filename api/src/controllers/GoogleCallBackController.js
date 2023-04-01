
const { issueJWT } = require("../authWithJWT/utils")

const GoogleCallBackController = (req, res) => {
    // Successful authentication, redirect home.
    const token = issueJWT(req.user);
  
    req.app.locals.GoogleToken = token.token

    res.redirect('https://client-pf-seven.vercel.app/home');
}

module.exports = { GoogleCallBackController }
