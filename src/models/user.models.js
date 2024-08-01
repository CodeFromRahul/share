import mongoose from "mongoose";

import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userCollection = new mongoose.Schema({
  _id:{
    type:objectId,
    required:true,
    unique:true,
  },

  
refressToken:{
  type:String
}








},{timestamps:true})



export const userCollections = mongoose.model("userCollections",userCollection)