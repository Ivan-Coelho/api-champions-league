import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statiscs-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper";


export const getPlayerService = async function(){
    
    const data = await PlayerRepository.findAllPlayers()
    let response = null

    if(data){
        response = await httpResponse.ok(data);
    } else{
        response = await httpResponse.noContent()
    }
    return response;
}

export const getPlayerByIdService = async (id:number) =>{

    const data = await PlayerRepository.findPlayerByID(id);
    let response =null

    if (data){
        response = httpResponse.ok(data);        
    }else{
        response = httpResponse.noContent();
    }
    return response
}

export const creatPlayerService = async(player:PlayerModel) =>{

    let response = null
    
    if(Object.keys(player).length !== 0){
        await PlayerRepository.insertPlayer(player)
       response = httpResponse.created();
    }else{
       response = httpResponse.badRequest()
    }
    return response;
};

export const deletePlayerService = async (id:number) =>{
    let response = null
    const isDelete = await PlayerRepository.deleteOnePlayer(id)

    if (isDelete){
        response = await httpResponse.ok({message: "deleted"})
    } else{
        response = await httpResponse.noContent();
    }
    
    return response
    
}

export const updatePlayerService = async (id:number, newStatistics:StatisticsModel) =>{
    let response = null
    let data = await PlayerRepository.updateOnePlayer(id, newStatistics)

    if(Object.keys(data).length ===0){
        response = await httpResponse.badRequest()
    }else{
        response = await httpResponse.ok(data)
    }    

    return response    
}