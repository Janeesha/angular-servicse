var express=require("express");
var app=express();

var router=express.Router();

var mongoose=require("mongoose");
var user=require("./user.js");

var bodyparser=require("body-parser");

// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost/techera",function(){
	console.log("sucessfully connected to mongodb")
})

router.get("/",function(request,response){
         reponse.json({name:"asha"})
})
router.get("/users",function(request,response){
         user.getUser(function(err,data){
         	if(err){
         		throw err;
         	}
         	console.log(data)
         	response.json(data)

         })
})

// router.post("/customer",function(request,response){
// 	var customerobj=request.body;
//          customer.createCustomer(customerobj,function(err,data){
//          	if(err){
//          		throw err;
//          	}
//          	response.json(data)

//          })
// })



app.use("/api",router)

var PORT=process.env.PORT || 4000;

app.listen(PORT,function(){
	console.log("server listing to port"+PORT)
})