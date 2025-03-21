import express, { Request, Response } from "express"
import * as service from "../services/players-service"
import { noContent } from "../utils/http-helper";


export const getPlayer = async function (req: Request, res: Response) {
    
    const HttpResponse = await service.getPlayerService();
    res.status(HttpResponse.statusCode).json(HttpResponse.body);    
};

export const getPlayerById = async (req:Request, res: Response) =>{
    const id = parseInt(req.params.id)
    const HttpResponse = await service.getPlayerByIdService(id)

    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}

export const postPlayer = async (req:Request, res: Response) =>{
    
    const newPlayer = req.body    
    const httpResponse = await service.creatPlayerService(newPlayer)

    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }else{
        const response = await noContent()
        res.status(response.statusCode).json(response.body)
    }
   
}

export const deletePlayer = async (req:Request, res: Response) =>{
    
    const id = parseInt(req.params.id)    
    const httpResponse = await service.deletePlayerService(id)

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updatePlayer = async (req:Request, res: Response) =>{
    
    const id = parseInt(req.params.id)
    const updatePlayer = req.body    
    const httpResponse = await service.updatePlayerService(id, updatePlayer)

    res.status(httpResponse.statusCode).json(httpResponse.body)
}
