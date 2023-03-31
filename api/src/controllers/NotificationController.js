const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'linkingfutureh@gmail.com', // reemplaza con tu correo electrónico de Gmail
        pass: 'gfufsssuoyxdddrm', // reemplaza con tu contraseña de Gmail
    },
});

const enviarCorreo = async (destinatario, asunto, mensaje, origen) => {
    try {
        const info = await transporter.sendMail({
            from: 'linkingfutureh@gmail.com',
            to: destinatario,
            subject: asunto,
            text: mensaje,
        });
        console.log('Correo electrónico enviado: '+origen, info.messageId);
    } catch (error) {
        console.error('Error al enviar el correo electrónico: '+origen, error);
    }
}

module.exports = {enviarCorreo}