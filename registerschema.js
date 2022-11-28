const mongoose=require("mongoose")

const newUserschema={
	username:String,
	password:String
}

const Register=mongoose.model("students",newUserschema)

module.exports=Register