import express, {json, Request, Response} from "express"
import creatApp from "./app";

const app = creatApp();
const port = process.env.PORT;

app.listen(port, function(){
    console.log(`💻 server init at port ${port}` )
});