import cors from "cors"
import express, { json, Request, Response } from "express"


import router from "./routes";

function creatApp() {
    const app = express()
    
    // const corsOptions = {
    //     origin: 'www.meusite.com',
    //     method: ["GET", "POST"]
    // }

    app.use(json());
    app.use("/api", router);
    app.use(cors())

    return app;
}

export default creatApp;
