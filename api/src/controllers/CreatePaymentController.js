const request = require('request');
const { createDonation } = require("../handlers/CreateDonationHandler")
const {Project} = require('../db')

const { CLIENT,SECRET } = process.env;

const PAYPAL_API = 'https://api-m.sandbox.paypal.com'; // Live https://api-m.paypal.com

const auth = { user: CLIENT, pass: SECRET }


const createPayment = async (req, res) => {

    const userId = req.user.id;
    const {amount, projectId} = req.body;
    const {token} = req.query

    const project = await  Project.findOne({where: {id:projectId}})
    const max = project.cost-project.curretAmount;

    const value = amount>max? max : amount;

    if (token !== undefined){
        res.status(201).json("Salio bien o mal")
    }
    const body = {
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD', //https://developer.paypal.com/docs/api/reference/currency-codes/
                value: value
            }
        }],
        application_context: {
            brand_name: `Linking future`,
            landing_page: 'NO_PREFERENCE', // Default, para mas informacion https://developer.paypal.com/docs/api/orders/v2/#definition-order_application_context
            user_action: 'PAY_NOW', // Accion para que en paypal muestre el monto del pago
            return_url: `http://localhost:3001/execute-payment?userId=${userId}&projectId=${projectId}&amount=${amount}`, // Url despues de realizar el pago
            cancel_url: `http://localhost:3000/cancel-payment` // Url despues de realizar el pago
        }
    }
    //https://api-m.sandbox.paypal.com/v2/checkout/orders [POST]
  
    request.post(`${PAYPAL_API}/v2/checkout/orders`, {
        auth,
        body,
        json: true
    }, (err, response) => {
        res.json({ data: response.body })
    })

  
}

const executePayment = async (req, res) => {
    const {token, userId, projectId, amount} = req.query

    request.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {
        auth,
        body: {},
        json: true
    }, (err, response) => {
        if(err){
            res.status(400).json({ error: 'Hay un error' });
        }
        else{
            const { status} = response.body;
            if (status === 'COMPLETED') {

                createDonation(amount,userId,projectId);

                res.redirect("http://localhost:3000/execute-payment");
            } else {
                res.status(400).json({ error: 'La transacción no se ha completado exitosamente' });
            }
        }
    })
    
}


module.exports = {createPayment, executePayment };