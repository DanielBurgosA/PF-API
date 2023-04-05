
const { issueJWT } = require("../authWithJWT/utils")

const GoogleCallBackController = (req, res) => {
    // Successful authentication, redirect home.
    console.log("controller");
    console.log(req.user.deleted);
    
    if(req.user.deleted){
        req.app.locals.deleted=req.user.deleted;
        console.log("banned");
    }
    else{
        req.app.locals.deleted=req.user.deleted;
        const token = issueJWT(req.user);
        req.app.locals.GoogleToken = token.token
        req.app.locals.user = {
            name: req.user.user_name,
            lastname: req.user.user_lastname,
            email: req.user.user_email,
            image: req.user.user_image
        };
        console.log("paso");
    }
    res.redirect('https://client-pf-seven.vercel.app/home');
    
}

module.exports = { GoogleCallBackController }
