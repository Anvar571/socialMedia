require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const db_connect = require("./module/db");
const routers = require("./router/routers");
const bodyParser = require("body-parser");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(bodyParser.json());

server()

async function server(){
    try {
        // db run
        await db_connect(); 
    } catch(err) {
        console.log(err);
    } finally {
        // server
        app.use("/api", routers)
    }
}


app.listen(process.env.PORT, () => {
    console.log(`server listen on ${process.env.PORT} port`);
})