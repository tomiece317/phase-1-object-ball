function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }
  
  console.log(gameObject());

  function homeTeamName() {
    return gameObject().away.teamName
}
console.log(homeTeamName());

const numPointsScored = playerName => gameObject().home.players[playerName].points || gameObject().away.players[playerName].points
debugger
console.log(numPointsScored("Mason Plumlee"))

const shoeSize = playerName => gameObject().home.players[playerName].shoe || gameObject().away.players[playerName].shoe
debugger
console.log(shoeSize("Mason Plumlee"))

const teamColor = name => name == gameObject().home.teamName ? gameObject().home.colors : ( name == gameObject().away.teamName ? gameObject().away.colors : undefined) 
debugger
console.log(teamColor("Charlotte Hornets"))

const playerStats = name => gameObject().home.players[name] || gameObject().away.players[name]
debugger
//console.log(playerStats("Bismak Biyombo"))

function bigShoeRebounds(){
    const object  = gameObject()
    let maxSizeHome = -1
    let playerMaxHome = ""
    for (let player in object.home.players){
        if (object.home.players[player].shoe > maxSizeHome){
            maxSizeHome = object.home.players[player].shoe
            playerMaxHome = player
        }
    }
    let maxSizeAway = -1
    let playerMaxAway = ""
    for (let player in object.away.players){
        if (object.away.players[player].shoe > maxSizeAway){
            playerMaxAway = player
            maxSizeAway = object.away.players[player].shoe
        } 
    }
    if (maxSizeAway > maxSizeHome)
        return object.away.players[playerMaxAway]
    else
        return object.home.players[playerMaxHome]
}
console.log(bigShoeRebounds())

function mostPointsScored(){
    const object  = gameObject()
    let maxPointHome = -1
    let maxPlayerPointHome = ""
    for (let player in object.home.players){
        if (object.home.players[player].points > maxPointHome){
            maxPlayerPointHome = player
            maxPointHome = object.home.players[player].points
        }
    }
    let maxPointAway = -1
    let maxPlayerPointAway = ""
    for (let player in object.away.players){
        if (object.away.players[player].points > maxPointAway){
            maxPlayerPointAway = player
            maxPointAway = object.away.players[player].points
        }
    }
    console.log(maxPlayerPointAway)
    if( maxPointAway > maxPointHome)
        return maxPlayerPointAway, object.away.players[maxPlayerPointAway]
    else
        return  maxPlayerPointHome, object.home.players[maxPlayerPointHome]
}

console.log(mostPointsScored())

function winningTeam(){
    const object = gameObject()
    let homePoints = 0
    for (let player in object.home.players){
        homePoints += object.home.players[player].points
    }
    let awayPoints = 0
    for (let player in object.away.players){
        awayPoints += object.away.players[player].points
    }
    if( awayPoints > homePoints)
        return object.away
    else
        return object.home
}
console.log(winningTeam())

function playerWithLongestName(){
    const object = gameObject()
    let maxLengthName = ""
    for (let player in object.home.players){
        if (player.length > maxLengthName.length){
            maxLengthName = player
        }
    }
    for (let player in object.away.players){
        if (player.length > maxLengthName.length){
            maxLengthName = player
        }
    }
    return maxLengthName
}
console.log(playerWithLongestName())
  