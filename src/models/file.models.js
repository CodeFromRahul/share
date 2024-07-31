
import mongoose  from "mongoose "


const fileSchema = new mongoose.schema({
    
  
    file:{
        type:string,
        required:true

    }
  
},{
    timeStamps:true
})


export const FileSchema = mongoose.model("FileSchema",fileSchema)