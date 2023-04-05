const {User} = require('../db')

const updateUserImage = async(id, user_image,)=>{
    console.log(user_image);
    console.log(id);

    const user = await User.findOne({ where: {id} })
    await user.update( { user_image } );

    return "image updated"

}

module.exports = {updateUserImage}