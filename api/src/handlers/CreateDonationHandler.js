const { Donation, User, Project } = require('../db')
const {enviarCorreo} = require("../controllers/NotificationController")

const createDonation = async (
    monto,
    userid,
    projectid
    
)=>{
    try {
        const user = await  User.findOne({where: {id:userid}})
        const project = await  Project.findOne({where: {id:projectid}})
        let num_donationxuser = (await Donation.count({where:{userId:userid, projectId:projectid}})) +1
        const newDonation = await Donation.create({
            monto,
            num_donationxuser
        });

        newDonation.setUser(userid)
        newDonation.setProject(projectid)

        const currentAmount = parseFloat(project.currentAmount) + parseFloat(monto) ;
        
        await project.update({ currentAmount: currentAmount }, { where: { id: projectid }})
        if(project.cost - project.currentAmount<=0){
            await project.update({ completed: true }, { where: { id: projectid }})
        }
        console.log(project.completed);
        
        const mensaje = "Muchas gracias "+ user.user_name + " por tu donación \n\n" +
        "Tu donacion de " + monto +" para el proyecto " + project.name + " a quedado registrada\n\n" +

        enviarCorreo(user.user_email, "Donacion registrada", mensaje, "Donacion")

        return newDonation;

    } catch (error) {
        return {error: error.message}
    }
}

module.exports = {createDonation}