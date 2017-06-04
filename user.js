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
	mail:{
		type:String,
		required:true
	},

	mobile:{ //should match to db property
		type:String,
		required:true
	}
});

 var User=module.exports=mongoose.model("user",userSchema,"user")

//  module.exports.getUser=function(callback){
// 	return User.find(callback)
//  	//console.log(data)
//  }

// module.exports.createCustomer=function(customerobj,callback){
// 	return User.create(customerobj,callback)
//  }

  module.exports.editCustomer=function(userid,customerObj,callback){
 	console.log(customerObj);
  	return User.update({_id:userid},{$set:{

 		                               name:customerObj.name,
 		                               mail:customerObj.mail,
 		                               mobile:customerObj.mobile,
  		                               email:customerObj.email

	                                    }},callback)
 	 
  }


 //  module.exports.deleteuser=function(userid,customerObj,callback){
	// console.log(customerObj);
 // 	return User.remove({_id:userid},callback)
 	 
 // }

   module.exports.getElementById=function(userid,callback){
	
 	return User.findById({_id:userid},callback)
 	 
  }

 // module.exports.getElementById=function(name,callback){
	
 // 	return User.findOne({name:name},callback)
 	 
 // }