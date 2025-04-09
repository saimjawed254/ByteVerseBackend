
import { mongoose } from "mongoose";
import { config } from "dotenv";

config({ path: "../../config.env" });

mongoose.connect(process.env.mongodbConnect)

const volunteerSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
    },
    age : {
        type : String,
        required : true,
    },
    gender : {
        type : String,
        required : true,
    },
    mobileNumber : {
        type : Number,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    idPhoto: {
        data: Buffer,
        contentType: String
    },
})

export const Volunteer = mongoose.model("Volunteer", volunteerSchema)