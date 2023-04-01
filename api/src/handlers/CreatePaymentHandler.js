const request = require('request');

const { CLIENT,SECRET } = process.env;

const PAYPAL_API = 'https://api-m.sandbox.paypal.com'; // Live https://api-m.paypal.com

const auth = { user: CLIENT, pass: SECRET }

const createPaymentHandler = async (amount, userName, project, token) => {
    const xd = {
        amount: amount,
        userName: userName,
        project: project,
        token: token
    }

    console.log(xd)
    return xd

    if (token !== undefined){
        res.status(201).json("Salio bien o mal")
    }
    const body = {
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD', //https://developer.paypal.com/docs/api/reference/currency-codes/
                value: amount
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
  

module.exports = {createPaymentHandler};