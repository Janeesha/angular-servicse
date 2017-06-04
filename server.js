var express=require("express");
var app=express();

var router=express.Router();

var mongoose=require("mongoose");
var user=require("./user.js");

var bodyparser=require("body-parser");

 app.use(bodyparser.json());
 app.use(bodyparser.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost/techera",function(){
	console.log("sucessfully connected to mongodb")
})

// router.get("/",function(request,response){
  //        reponse.json({name:"asha"})
// })
// router.get("/users",function(request,response){
//          user.getUser(function(err,data){
//          	if(err){
//          		throw err;
//          	}
//          	console.log(data)
//          	response.json(data)

//          })
// })

//  router.post("/customer",function(request,response){
//  	var customerobj=request.body;
//           customer.createCustomer(customerobj,function(err,data){
//          	if(err){
//           		throw err;
//           	}
//          	response.json(data)

//           })
// })


// router.put("/user/:id",function(request,response){
//       var userid=request.params.id; //parameter in url
//       var customerobj=request.body;
//       console.log(customerobj);
//      user.editCustomer(userid,customerobj,function(err,data){
//          if(err){
//             throw err;
//          }
//          response.json(data)
//       })
// })


// router.delete("/user/:id",function(request,response){
//       var userid=request.params.id; //parameter in url
//       var customerobj=request.body;
//       console.log(customerobj);
//      user.deleteuser(userid,customerobj,function(err,data){
//          if(err){
//             throw err;
//          }
//           response.json(data)
//       })
// })

 // router.get("/",function(request,response){
 //        reponse.json({name:"asha"})
 // })
//  router.get("/users/:id",function(request,response){
//    var userid=request.params.id;
//          user.getElementById(userid,function(err,data){
//             if(err){
//                 throw err;
//             }
//              console.log(data)
//            response.json(data)

//          })
// })


// router.get("/users/:name",function(request,response){
//    var userid=request.params.name;
//          user.getElementById(userid,function(err,data){
//             if(err){
//                 throw err;
//             }
//              console.log(data)
//            response.json(data)

//          })
// })


router.put("/user/:id",function(request,response){  //first we have to run get then goto put then send data
      var userid=request.params.id; //parameter in url
      var customerobj=request.body;//from database
     
     user.getElementById(userid,function(err,data){
            if(err){
                throw err;
            }
              console.log(data)
           
           
           response.json(data)


      
     console.log(data);
     console.log(customerobj)
     var bodyObj={              //to avoid getting null into database
      name:customerobj.name || data.name,//data from database
      email:customerobj.email || data.email,
      mail:customerobj.mail || data.mail,
      mobile:customerobj.mobile || data.mobile,
     }
      user.editCustomer(userid,bodyObj,function(err,data){
         if(err){
             throw err;
          }
          response.json(data)
       })
       });
 })



app.use("/api",router)

var PORT=process.env.PORT || 4000;

app.listen(PORT,function(){
	console.log("server listing to port"+PORT)
})