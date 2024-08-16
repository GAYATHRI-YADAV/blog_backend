const express =require('express')
const cors = require('cors')
const morgan = require('morgan')
const MONGO_URL="mongodb+srv://21501a05c1:21501a05c1@cluster0.c4jeunx.mongodb.net/InnoTech?retryWrites=true&w=majority&appName=Cluster0"

const mongoose = require('mongoose');
const connenctDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://21501a05c1:21501a05c1@cluster0.c4jeunx.mongodb.net/InnoTech?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Monogodb is connected successfully")
    } catch(error){
        console.log(`mongodb is not connected ${error}`)
    }
}
connenctDB()

app.use(cors({
  origin: ['https://gayathri-yadav.github.io/blog_frontend/'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  headers: ['Content-Type', 'Authorization']
}));

//router import
const userRoutes = require('./routes/userRoutes')
const blogRoutes = require('./routes/blogRoutes')

const port = process.env.PORT || 8080;
const app = express()

//middelwares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/user',userRoutes);
app.use('/api/v1/blog',blogRoutes);

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})
