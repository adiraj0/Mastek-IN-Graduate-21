
const express = require('express');

const server = express();
const cors=require('cors');

const CORS_OPTIONS= {

    origin: 'http://localhost:4200',

    optionsSuccessStatus: 200 

  }

server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(cors(CORS_OPTIONS));

const port=3000;

const USERS = [{id:1,userName:"adiraj"},
{id:2,userName:"adi"}]

server.get("/",(req,resp)=>{

    resp.send("Welcome to BookStore");

});

server.get('/users/',(req,resp)=>{

    resp.setHeader("Content-Type","application/json")

    resp.send(USERS);

});



server.listen(port,()=>{

    console.log("http://localhost:3000 started ");

});