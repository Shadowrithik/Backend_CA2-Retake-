const express=require('express');
const app=express();
const PORT=3000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to register")
});

app.post("/data",async(req,res)=>{
    const {email,password}=req.body;

    if(!email){
        res.status(400).json({error:"Email cannot be empty"});
    }
    if(!password){
        res.status(400).json({error:"password cannot be empty"});
    }

    const user={email,password};
    res.status(201).json({
        message:"data received",
        data:user
    });
})

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})