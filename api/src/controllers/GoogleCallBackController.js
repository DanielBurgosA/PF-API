
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
        console.log("paso");
    }
    res.redirect('http://localhost:3000/home');
    
}

module.exports = { GoogleCallBackController }
