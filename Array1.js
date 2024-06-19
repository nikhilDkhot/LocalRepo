let eternal = []
console.log(eternal + "[]")

let team = ["virat","rohit","rahul","gill"]
console.log(team)
//for(i=0;i<team.length;i++)
//console.log(team[i]+ " from india")
console.log("****-----****")
let eternal1 = new Array()
console.log(eternal1)

let team1 = new Array("virat","rohit","rahul","gill");
console.log(team1)
console.log(team1[3]+" acceing element of team1 ")

let state = new Array(3)
state[0] = "goa"
state[1] = "panjab"
state[2] = "haryana"
console.log(state)
laststate = state[state.length]
laststate1 = state[state.length-1]

console.log("i am laststat "+ laststate + " and something went wrong ")
console.log("I am last state " + laststate1)

console.log("----------------###########------------------")
team.push("shreyash")
console.log("one player is push in team " + team)

team.unshift("bumarah")
console.log("one player add at start " + team)

console.log("----------------###########------------------")
state.pop()
console.log("after removing last element " + state)

state.shift()
console.log("after removing first element " + state)

/*team.splice(3,2)
console.log("removing 2 element starting from third index " + team)
*/
/*
team.length=10
console.log(team," after inc length")
*/
/*team.length = 3
console.log(team , " after decr length")*/

console.log("----------------###########------------------")
console.log("use of for each loop")
team.forEach(
    function myiteration(elements)
    {
        console.log(elements);
});

console.log("----------------###########------------------")
console.log("Array Concatenation")
let teamA = ["starc","head","cummins","johnson"]

let merge = team.concat(teamA)

console.log(merge)
console.log("----------------###########------------------")
console.log(merge.toString())




