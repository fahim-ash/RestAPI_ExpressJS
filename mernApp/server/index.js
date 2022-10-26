const express=require("express");
const app=express();
const mongoose=require("mongoose");
const UserModel=require('./models/Users');
const cors=require('cors')


app.use(express.json())
app.use(cors());

mongoose.connect("mongodb+srv://ash:<Password>@cluster0.tcuoysi.mongodb.net/mernDB?retryWrites=true&w=majority")


app.get("/getUsers",(req,res)=>{
    UserModel.find({},(err,result)=>{
        if(err){
            res.json(err);

        }else{
            res.json(result);
        }

    });

})

app.post("/createUser",async(req,res)=>{
    const user=req.body;
    const newUser=new UserModel(user);
    await newUser.save();

    res.json(user);



})


app.listen(3001,()=>{
    console.log("app is running on port 3001")

});