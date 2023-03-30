
const { issueJWT } = require("../authWithJWT/utils")

const GoogleCallBackController = (req, res, next) => {
    // Successful authentication, redirect home.
    const token = issueJWT(req.user);
    res.cookie("value", token.token, { httpOnly: false, maxAge: 1000 * 60 * 60, sameSite: "none", secure:"false" })
    res.cookie("success", "true", { httpOnly: false, maxAge: 1000 * 60 * 10, sameSite: "none", secure:"false"}) 
   
    res.redirect('http://localhost:3000/home');
}

module.exports = { GoogleCallBackController }
