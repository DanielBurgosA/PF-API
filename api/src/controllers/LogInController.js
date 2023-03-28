const { User } = require("../db");
const { LogIn } = require("../handlers/LogInHandler");


const logInController = async (req, res, app) => {
    const { name, password } = req.body;

    try {
        const state = await LogIn(name, password);
        req.app.locals.token = state.token // con req.app.locals almaceno info para poder usarla en otro middleware
        console.log(req.app.locals)
        // res.cookie("value", "elpepe", { httpOnly: false, maxAge: 1000 * 60 * 10,  });
        // res.cookie("success","true", { httpOnly: false, maxAge: 1000 * 60 * 10,  });
        res.status(200).json(state);
    } catch (error) {
        console.log(error)
        res.status(400).json(error.message);
    }
}
module.exports = { logInController };