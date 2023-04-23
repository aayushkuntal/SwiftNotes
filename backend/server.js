const express=require('express')
const app=express();
const https=require("https")
const notes=require('./data/notes')
const dotenv=require('dotenv')

//Dotenv
dotenv.config();

//Body-Parser
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}));

//Access static files
//Here public is the folder name
app.use(express.static("public"));

//Post request
app.post('/',(res)=>{
    console.log(res);
})

//Get Request
app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.get('/api/notes',(req,res)=>{
    res.json(notes);
})

app.get('/api/notes/:id',(req,res)=>{
    
    const id=req.params.id;
    const note=notes.find((note)=>note._id===id);
    res.send(note);
})


//Port
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Server started");
})