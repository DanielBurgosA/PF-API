const { Router } = require('express');
const passport = require("passport");
const querystring = require("querystring");

require("dotenv").config();


const router = Router();
const {allProjectsController} = require("../controllers/AllProjectsController");
const {createProjectController} = require("../controllers/CreateProjectController");
const {deleteProjectController} = require("../controllers/DeleteProjectController");
const {createUserController} = require("../controllers/CreateUserController");
const { createAdminController } = require('../controllers/CreateAdminController');
const { createDonationController } = require('../controllers/createDonationController');
const { createComunidadController } = require('../controllers/CreateComunidadController');
const { createBankInfoController } = require('../controllers/CreateBankInfoController');
const { allAdminsController } = require('../controllers/AllAdminController');
const { allBankInfoController } = require('../controllers/AllbankInfosController');
const { allComunidadesController } = require('../controllers/AllComunidadesController');
const { allDonationsController } = require('../controllers/AllDonationsController');
const { allUsersController } = require('../controllers/AllUsersController');
const { createPayment, executePayment, cancelPayment } = require('../controllers/CreatePaymentController')
const { logInController } = require('../controllers/LogInController')
const { GoogleCallBackController } = require('../controllers/GoogleCallBackController')
    
//----------------------------------------------------
router.post('/users', createUserController)
router.get('/users', allUsersController)
router.get('/admins', allAdminsController)
router.get('/bankInfos', allBankInfoController)
router.get('/comunidads', allComunidadesController)
//----------------------------------------------------
router.put('/projects', deleteProjectController)
router.post('/projects', passport.authenticate('jwt', { session: false }), createProjectController)
//----------------------------------------------------
router.post('/admins', createAdminController)
router.post('/donations', createDonationController) 
router.post('/comunidads', createComunidadController)   
router.post('/bankInfos', createBankInfoController)
//----------------------------------------------------
router.get('/donations', allDonationsController)
router.get('/projects', allProjectsController)
//----------------------------------------------------
router.post('/donations', createDonationController)
router.post('/create-payment', createPayment)
router.get('/execute-payment', executePayment)
router.get('/cancel-payment', cancelPayment)
//------------------------------------------------------------------------
// auth with auth0
router.get('/login', passport.authenticate("auth0", {
    scope: "openid email profile"
  }),
  (req, res) => {
    res.send("hola");
  }
);

router.get("/callback", (req, res, next) => {
  passport.authenticate("auth0", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("http://localhost:3000/home");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      const returnTo = req.session.returnTo;
      delete req.session.returnTo;
      res.redirect(returnTo || "http://localhost:3000/home");
    });
  })(req, res, next);
});


router.get("/logout", (req, res) => {
  req.logOut();

  let returnTo = req.protocol + "://" + req.hostname;
  const port = req.connection.localPort;

  if (port !== undefined && port !== 80 && port !== 443) {
    returnTo =
      process.env.NODE_ENV === "production"
        ? `${returnTo}/`
        : `${returnTo}:${port}/`;
  }

  const logoutURL = new URL(
    `https://${process.env.AUTH0_DOMAIN}/v2/logout`
  );

  const searchString = querystring.stringify({
    client_id: process.env.AUTH0_CLIENT_ID,
    returnTo: returnTo
  });
  logoutURL.search = searchString;

  res.redirect(logoutURL);
});


//--------------------------------------------------------------------------

//-----------------------------------------------------------------------------

// router.get("/logout", (req, res) =>{
//   res.clearCookie("value");
//   res.clearCookie("success");
//   res.redirect("http://localhost:3000/login");
// })//ruta para limpiar las cookies
//------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------
//google auth
// router.get('/auth/google',
//   passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'] }));

// router.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: 'http://localhost:3000/home'}),
//   GoogleCallBackController
// );

//--------------------------------------------------------------------------------------------------------------


module.exports = router;
