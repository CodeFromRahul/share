
import mongoose  from "mongoose "
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const fileSchema = new mongoose.schema({
   
    userCollection:{
        "_id": ObjectId,
        
        "passwordHash": String, // Hashed password for user authentication
        "devices": [
          {
            "deviceId": String,
            "deviceType": String, // e.g., "laptop", "mobile"
            "lastActive": Date
          }
        ]
      }
      
  
   
  
},{
    timeStamps:true
})


export const FileSchema = mongoose.model("FileSchema",fileSchema)