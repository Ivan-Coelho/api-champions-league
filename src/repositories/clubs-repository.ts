import { ClubModel } from "../models/clubs-model";
import fs from 'fs/promises'

// const dataBase: ClubModel[] = [
//     {
//       id: 1,
//       team: 'Real Madrid',
//       country: 'Spain',
//       titles: 14,
//       stadium: 'Santiago Bernabéu',
//     },
//     {
//       id: 2,
//       team: 'Bayern Munich',
//       country: 'Germany',
//       titles: 6,
//       stadium: 'Allianz Arena',
//     },
//     {
//       id: 3,
//       team: 'Barcelona',
//       country: 'Spain',
//       titles: 5,
//       stadium: 'Camp Nou',
//     },
//     {
//       id: 4,
//       team: 'Manchester City',
//       country: 'England',
//       titles: 1,
//       stadium: 'Etihad Stadium',
//     },
//     {
//       id: 5,
//       team: 'Liverpool',
//       country: 'England',
//       titles: 6,
//       stadium: 'Anfield',
//     },
//     {
//       id: 6,
//       team: 'Juventus',
//       country: 'Italy',
//       titles: 2,
//       stadium: 'Allianz Stadium',
//     },
//     {
//       id: 7,
//       team: 'Paris Saint-Germain',
//       country: 'France',
//       titles: 0,
//       stadium: 'Parc des Princes',
//     },
//     {
//       id: 8,
//       team: 'Chelsea',
//       country: 'England',
//       titles: 2,
//       stadium: 'Stamford Bridge',
//     },
//     {
//       id: 9,
//       team: 'Manchester United',
//       country: 'England',
//       titles: 3,
//       stadium: 'Old Trafford',
//     },
//     {
//       id: 10,
//       team: 'AC Milan',
//       country: 'Italy',
//       titles: 7,
//       stadium: 'San Siro',
//     },
//     {
//       id: 11,
//       team: 'Borussia Dortmund',
//       country: 'Germany',
//       titles: 0,
//       stadium: 'Signal Iduna Park',
//     },
//     {
//       id: 12,
//       team: 'Atlético Madrid',
//       country: 'Spain',
//       titles: 0,
//       stadium: 'Wanda Metropolitano',
//     },
//     {
//       id: 13,
//       team: 'Inter Milan',
//       country: 'Italy',
//       titles: 3,
//       stadium: 'San Siro',
//     },
//     {
//       id: 14,
//       team: 'Tottenham Hotspur',
//       country: 'England',
//       titles: 0,
//       stadium: 'Tottenham Hotspur Stadium',
//     },
//     {
//       id: 15,
//       team: 'Arsenal',
//       country: 'England',
//       titles: 0,
//       stadium: 'Emirates Stadium',
//     },
//     {
//       id: 16,
//       team: 'RB Leipzig',
//       country: 'Germany',
//       titles: 0,
//       stadium: 'Red Bull Arena',
//     },
//     {
//       id: 17,
//       team: 'Porto',
//       country: 'Portugal',
//       titles: 2,
//       stadium: 'Estádio do Dragão',
//     },
//     {
//       id: 18,
//       team: 'Benfica',
//       country: 'Portugal',
//       titles: 2,
//       stadium: 'Estádio da Luz',
//     },
//     {
//       id: 19,
//       team: 'Ajax',
//       country: 'Netherlands',
//       titles: 4,
//       stadium: 'Johan Cruijff Arena',
//     },
//     {
//       id: 20,
//       team: 'Sevilla',
//       country: 'Spain',
//       titles: 6,
//       stadium: 'Ramón Sánchez Pizjuán',
//     }
// ]

export const findAllClubs = async():Promise<ClubModel[]> =>{

  //return dataBase;
  
  const data = await fs.readFile("./src/data/clubs.json", "utf-8")
  const clubs:ClubModel[] = JSON.parse(data)
  return clubs


};