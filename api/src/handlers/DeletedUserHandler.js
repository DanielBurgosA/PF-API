const { User } = require('../db')

const deleteUser = async(
    id
)=>{
        
        const usertoDelete = await User.findOne({where:{id}})

        usertoDelete.update({deleted:true});
        usertoDelete.save()

        return usertoDelete
}

module.exports = {deleteUser}