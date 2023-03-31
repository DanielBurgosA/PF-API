const {User} = require('../db')

const updateUser = async(
    user_name,
    user_lastname,
    id,
    user_email
)=>{
    let where = {}
    if(id){where.id=id}
    if(user_email){where.user_email=user_email}
    const usertoUpdate = await User.findOne({where})

    let infotoupdate = {}
    if(user_name){infotoupdate.user_name=user_name}
    if(user_lastname){infotoupdate.user_lastname=user_lastname}

    usertoUpdate.update(infotoupdate)
    usertoUpdate.save()

    return usertoUpdate

}

module.exports = {updateUser}