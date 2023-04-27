const express=require('express')
const app=express();
const https=require("https")
const notes=require("./data/notes.js")
const dotenv=require('dotenv')
const cors = require('cors');
const connectDB=require('./config/db.js')
const userRoutes=require('./routes/userRoutes.js');
const bodyParser=require('body-parser');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware.js');

connectDB();
app.use(express.json())
// Enable CORS
app.use(cors());
// Configure allowed origins, methods, and headers
app.options('*', cors());
//Dotenv
dotenv.config();                            


//API routes
app.get('/api/notes',(req,res)=>{
    res.json(notes);
})

app.get('/api/notes/:id',(req,res)=>{
    
    const id=req.params.id;
    const note=notes.find((note)=>note._id===id);
    res.send(note);
})

// Middleware=>Function that has access to req and res
//They are called in between the request and response
//They are executed in the order they are written

//Handling routes
app.use('/api/users',userRoutes);

//Handling errors
app.use(notFound)
app.use(errorHandler)


//Port
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Server started at port 3000");
})
