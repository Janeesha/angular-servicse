var mongoose=require("mongoose");
var userSchema=mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	mobile:{ //should match to db property
		type:String,
		required:true
	}
});

var User=module.exports=mongoose.model("user",userSchema,"user")

module.exports.getUser=function(callback){
	return User.find(callback)
	//console.log(data)
}

// module.exports.createCustomer=function(customerobj,callback){
// 	return User.create(customerobj,callback)
// }