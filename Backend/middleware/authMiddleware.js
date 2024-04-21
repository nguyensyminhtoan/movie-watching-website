
const authModel=require('../model/UserToken')


const authMiddleware=(req,res,next)=>{
  const token=req.query.token
  // Kiểm tra xem người dùng đã truyền token hay chưa
  if(!token){
    return res.status(401).json({message:"Unauthorized"})
  }
  const user=authModel(token)
  if(!user.userId){
   return res.status(user.error).json({message:user.message})
  }
 
  next()
 
}
module.exports=authMiddleware