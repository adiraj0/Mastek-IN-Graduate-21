const express=require('express');
const server=express();
const port=3000;
const cors=require('cors');
const CORS_OPTIONS={origin:"http://localhost:4200"};
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(cors(CORS_OPTIONS));

//synchronzation db with server
const db=require('./db/models');
db.sequelize.sync();

//Main Url "http://localhost:3000/app"
server.get('/',(req,resp)=>{
    resp.send({message:"Welcome to express + postgre+ node"})
})

//App Url "http://localhost:3000/app"
require('./app/app-route')(server);

server.listen(port,()=>{
    console.log(`http://localhost:${port} started`);
})