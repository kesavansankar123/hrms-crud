const jwt=require('jsonwebtoken')
const genaratetoken=(user) => jwt.sign({id : user.id},process.env.SECRET_KEY)

module.exports = genaratetoken

