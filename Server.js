const express=require('express');
const app=express();
const authRoutes = require('./router/auth');
const protectedRoute = require('./router/protectedRoute');

const db=require('./db');


const bodyParser=require('body-parser');
app.use(bodyParser.json());


app.use(express.json());

app.use('/auth', authRoutes);
app.use('/protected', protectedRoute);




app.get('/', (req,res)=>{
    res.send('server start working');
})




app.listen(3000,()=>{
        console.log('listing on port 3000');
})

