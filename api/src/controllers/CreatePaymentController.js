const request = require('request');

const { CLIENT,SECRET } = process.env;


const PAYPAL_API = 'https://api-m.sandbox.paypal.com'; // Live https://api-m.paypal.com

const auth = { user: CLIENT, pass: SECRET }

let userId = null;

const createPayment = async (req, res) => {

    let userId = req.user.id;
    console.log(userId);

    const {amount, projectId} = req.body;
    console.log(amount);
    console.log(projectId);

    const {token} = req.query
    if (token !== undefined){
        res.status(201).json("Salio bien o mal")
    }
    const body = {
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD', //https://developer.paypal.com/docs/api/reference/currency-codes/
                value: '5'
            }
        }],
        application_context: {
            brand_name: `Linking future`,
            landing_page: 'NO_PREFERENCE', // Default, para mas informacion https://developer.paypal.com/docs/api/orders/v2/#definition-order_application_context
            user_action: 'PAY_NOW', // Accion para que en paypal muestre el monto del pago
            return_url: `http://localhost:3001/execute-payment`, // Url despues de realizar el pago
            cancel_url: `http://localhost:3001/cancel-payment` // Url despues de realizar el pago
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
    const {token} = req.query

    request.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {
        auth,
        body: {},
        json: true
    }, (err, response) => {
        res.json({ data: response.body })
    })
    res.status(201).json("Se realizo el pago correctamente")
}

const cancelPayment = async (req, res) => {
    res.status(201).json("Se cancelo el pago correctamente")
  
}

module.exports = {createPayment, executePayment, cancelPayment};