"use strict";

require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3007;

app.use(cors());

app.use(bodyParser.json());

app.get("/rankings", (request, response) => {
  fs.readFile("test.txt", "utf8", (err, data) => {
    if (err) {
      response.send("Error with server");
    }
    const dataJSON = formatFile(data);
    response.json(dataJSON);
  });
});

app.listen(3007, () => {
  console.log(`App listening on ${PORT}`);
});

function formatFile(data) {
  let rankings = {};

  const gameResults = data.split("\n");

  gameResults.forEach(game => {
    const teams = game.split(",");
    let [teamOneName, teamOneScore] = teams[0].split(":");
    let [teamTwoName, teamTwoScore] = teams[1].split(":");

    if (teamOneScore === teamTwoScore) {
      //update points for each team by one
      teamOneScore = 1;
      teamTwoScore = 1;
    } else if (teamOneScore > teamTwoScore) {
      //team one won, so update their score by 3
      teamOneScore = 3;
      teamTwoScore = 0;
    } else {
      // team two won, update their score by 3
      teamOneScore = 0;
      teamTwoScore = 3;
      
    }
    rankings[teamOneName] = (rankings[teamOneName] || 0) + teamOneScore;
    rankings[teamTwoName] = (rankings[teamTwoName] || 0) + teamTwoScore;

  });

  rankings = Object.entries(rankings).map(([name, points]) => {
    return {name, points: parseInt(points)};
  });

  rankings.sort((teamA, teamB) => {
    if(teamB.points == teamA.points){
      if(teamB.name < teamA.name){
        return 1;
      } else {
        return -1;
      }
    }
    return teamB.points - teamA.points;
  });

  let rank = 1;
  for (let i = 0; i < rankings.length; i++){
    rankings[i].ranking = rank;
    
    if(i < rankings.length - 1 && rankings[i].points !== rankings[i + 1].points){
      rank = rank + 1;
    }

  }

  console.log(rankings);
  return rankings;
}