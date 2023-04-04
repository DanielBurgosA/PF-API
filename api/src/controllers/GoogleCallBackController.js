
const { issueJWT } = require("../authWithJWT/utils")

const GoogleCallBackController = (req, res) => {
    // Successful authentication, redirect home.
    const token = issueJWT(req.user);


    req.app.locals.GoogleToken = token.token;

    req.app.locals.user = {
        name: req.user.user_name,
        lastname: req.user.user_lastname,
        email: req.user.user_email,
        image: req.user.user_image
    };

    res.redirect('http://localhost:3000/home');
}

module.exports = { GoogleCallBackController }
