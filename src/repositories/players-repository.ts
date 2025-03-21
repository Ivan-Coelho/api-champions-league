import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statiscs-model";


const dataBase:PlayerModel[] =  [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentinian",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 91,
            Passing: 89,
            Dribbling: 95,
            Defending: 38,
            Physical: 62
        }
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        club: "Manchester United",
        nationality: "Portuguese",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 87,
            Shooting: 93,
            Passing: 81,
            Dribbling: 87,
            Defending: 35,
            Physical: 77
        }
    },
    {
        id: 3,
        name: "Neymar Jr.",
        club: "Paris Saint-Germain",
        nationality: "Brazilian",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 92,
            Shooting: 85,
            Passing: 87,
            Dribbling: 91,
            Defending: 40,
            Physical: 69
        }
    },
    {
        id: 4,
        name: "Kylian Mbappé",
        club: "Paris Saint-Germain",
        nationality: "French",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 97,
            Shooting: 87,
            Passing: 84,
            Dribbling: 90,
            Defending: 30,
            Physical: 79
        }
    },
    {
        id: 5,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgian",
        position: "Midfielder",
        statistics: {
            Overall: 92,
            Pace: 82,
            Shooting: 85,
            Passing: 95,
            Dribbling: 86,
            Defending: 61,
            Physical: 71
        }
    },
    {
        id: 6,
        name: "Mohamed Salah",
        club: "Liverpool",
        nationality: "Egyptian",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 94,
            Shooting: 88,
            Passing: 80,
            Dribbling: 89,
            Defending: 45,
            Physical: 72
        }
    },
    {
        id: 7,
        name: "Robert Lewandowski",
        club: "FC Barcelona",
        nationality: "Polish",
        position: "Forward",
        statistics: {
            Overall: 92,
            Pace: 81,
            Shooting: 94,
            Passing: 75,
            Dribbling: 83,
            Defending: 47,
            Physical: 85
        }
    },
    {
        id: 8,
        name: "Luka Modrić",
        club: "Real Madrid",
        nationality: "Croatian",
        position: "Midfielder",
        statistics: {
            Overall: 89,
            Pace: 75,
            Shooting: 80,
            Passing: 91,
            Dribbling: 88,
            Defending: 60,
            Physical: 68
        }
    },
    {
        id: 9,
        name: "Sergio Ramos",
        club: "Paris Saint-Germain",
        nationality: "Spanish",
        position: "Defender",
        statistics: {
            Overall: 89,
            Pace: 72,
            Shooting: 80,
            Passing: 75,
            Dribbling: 70,
            Defending: 90,
            Physical: 85
        }
    },
    {
        id: 10,
        name: "Harry Kane",
        club: "Tottenham Hotspur",
        nationality: "English",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 76,
            Shooting: 91,
            Passing: 81,
            Dribbling: 74,
            Defending: 45,
            Physical: 78
        }
    },
    {
        id: 11,
        name: "Virgil van Dijk",
        club: "Liverpool",
        nationality: "Dutch",
        position: "Defender",
        statistics: {
            Overall: 90,
            Pace: 70,
            Shooting: 50,
            Passing: 80,
            Dribbling: 75,
            Defending: 92,
            Physical: 86
        }
    },
    {
        id: 12,
        name: "Eden Hazard",
        club: "Real Madrid",
        nationality: "Belgian",
        position: "Forward",
        statistics: {
            Overall: 88,
            Pace: 84,
            Shooting: 85,
            Passing: 84,
            Dribbling: 92,
            Defending: 43,
            Physical: 72
        }
    },
    {
        id: 13,
        name: "Gareth Bale",
        club: "Los Angeles FC",
        nationality: "Welsh",
        position: "Forward",
        statistics: {
            Overall: 85,
            Pace: 89,
            Shooting: 86,
            Passing: 80,
            Dribbling: 81,
            Defending: 40,
            Physical: 79
        }
    },
    {
        id: 14,
        name: "N'Golo Kanté",
        club: "Chelsea",
        nationality: "French",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 76,
            Shooting: 60,
            Passing: 80,
            Dribbling: 81,
            Defending: 88,
            Physical: 84
        }
    },
    {
        id: 15,
        name: "Kante",
        club: "Chelsea",
        nationality: "French",
        position: "Midfielder",
        statistics: {
            Overall: 87,
            Pace: 75,
            Shooting: 60,
            Passing: 80,
            Dribbling: 80,
            Defending: 90,
            Physical: 85
        }
    },
    {
        id: 16,
        name: "Thibaut Courtois",
        club: "Real Madrid",
        nationality: "Belgian",
        position: "Goalkeeper",
        statistics: {
            Overall: 90,
            Pace: 50,
            Shooting: 10,
            Passing: 80,
            Dribbling: 60,
            Defending: 92,
            Physical: 85
        }
    },
    {
        id: 17,
        name: "Alisson Becker",
        club: "Liverpool",
        nationality: "Brazilian",
        position: "Goalkeeper",
        statistics: {
            Overall: 89,
            Pace: 55,
            Shooting: 5,
            Passing: 80,
            Dribbling: 65,
            Defending: 90,
            Physical: 80
        }
    },
    {
        id: 18,
        name: "Joshua Kimmich",
        club: "Bayern Munich",
        nationality: "German",
        position: "Midfielder",
        statistics: {
            Overall: 90,
            Pace: 76,
            Shooting: 80,
            Passing: 85,
            Dribbling: 82,
            Defending: 85,
            Physical: 78
        }
    },
    {
        id: 19,
        name: "Jadon Sancho",
        club: "Manchester United",
        nationality: "English",
        position: "Forward",
        statistics: {
            Overall: 87,
            Pace: 90,
            Shooting: 80,
            Passing: 82,
            Dribbling: 89,
            Defending: 45,
            Physical: 70
        }
    },
    {
        id: 20,
        name: "Paul Pogba",
        club: "Juventus",
        nationality: "French",
        position: "Midfielder",
        statistics: {
            Overall: 86,
            Pace: 76,
            Shooting: 80,
            Passing: 83,
            Dribbling: 80,
            Defending: 78,
            Physical: 85
        }
    }
];

export const findAllPlayers = async():Promise<PlayerModel[]> =>{
    return dataBase;
};

export const findPlayerByID = async(id:number):Promise<PlayerModel | undefined> =>{
    return dataBase.find((player) => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) =>{
    dataBase.push(player)
}

export const deleteOnePlayer = async function(id:number){
    const index = dataBase.findIndex(player =>player.id === id);
    
    if(index !== -1){
        dataBase.splice(index, 1);
        return true
    }

    return false
}

export const updateOnePlayer = async function(id:number, newStatistics: StatisticsModel){
    const index = dataBase.findIndex(player =>player.id === id);
    
    if(index !== -1){
       dataBase[index].statistics = newStatistics
    }

    return dataBase[index];
}