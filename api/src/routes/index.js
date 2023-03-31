const { Router } = require('express');
const passport = require('passport');


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
const { putBankInfoController } = require('../controllers/PutBankInfoController');
const { putComunidadController } = require('../controllers/PutComunidadController');
const { putProjectController } = require('../controllers/PutProjectController');
const { putUserController } = require('../controllers/PutUserController');
const { deleteUserController } = require('../controllers/DeleteUserController');
const { deletebankInfoController } = require('../controllers/DeleteBankInfoController');
const { deleteComunidadController } = require('../controllers/DeleteComunidadController');
const { GoogleCallBackController } = require('../controllers/GoogleCallBackController')
const { ForgotPasswordController } = require("../controllers/ForgotPasswordController")    
const { ResetPasswordController } = require("../controllers/ResetPasswordController")
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
router.post('/donations', passport.authenticate('jwt', { failureRedirect: 'https://client-pf-seven.vercel.app/login', session: false }), createDonationController)
router.post('/create-payment', createPayment)
router.get('/execute-payment', executePayment)
router.get('/cancel-payment', cancelPayment)
//------------------------------------------------------------------------
//NUEVAS RUTAS PUT
router.put('/bankInfos', putBankInfoController)
router.put('/comunidads', putComunidadController)
router.put('/projects', putProjectController)
router.put('/users', putUserController)

//NUEVAS RUTAS DELETE
router.put('/users/delete', deleteUserController)
router.put('/bankInfos/delete', deletebankInfoController)
router.put('/comunidads/delete',deleteComunidadController)
router.put('/projects/delete', deleteProjectController)


//------------------------------------------------------------------------
router.post('/login', logInController);

//--------------------------------------------------------------------------------------------------------------
//google auth
router.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'], session: false }));

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: 'https://client-pf-seven.vercel.app/login', session: false }),
  GoogleCallBackController
);

router.get('/google/token', (req, res)=>{
  if (req.app.locals.GoogleToken){
    res.status(200).json({token:req.app.locals.GoogleToken, origin: "google"})
  }else{
    res.status(200).json({msg:"not logged with google"})
  }
})

router.get('/logOut/google', (req, res) => {
  req.app.locals.GoogleToken = null
  res.status(200).json({msg: "you are out"})
})
//--------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------
//passwordrecovery
router.post("/forgotPassword", ForgotPasswordController)
router.put("/reset", ResetPasswordController)

module.exports = router;
