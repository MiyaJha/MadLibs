const person = {
    name: "Jhamiya", 
    age: 31,
    genderClass: "woman"
};
const weatherType = "cold & stormy"
let houseType = "victorian mansion"
let wallTalk = "her deepest, darkest secrets"
let num1 = 10
let num2 = 7
let newMathResult = 5-2
const mathResult = num1 - num2
const booleanValue = mathResult == newMathResult







const story = `On a ${weatherType} night, ${person.name} ventured into the haunted ${houseType}. 
Despite being a ${person.age} year old ${person.genderClass} (who knows how these stories usually end),
${person.name} could not resist the chance to experience a real life scare!
 The creaking walls seemed to whisper ${wallTalk}, which sent chills down her spine. 
Suddenly, a ghost appeared, its glowing eyes piercing through the darkness. 
${person.name}'s heart raced as it silently floated towards her. Did you know ${num1} - ${num2} equals ${mathResult}? 
If you know anything about anything, you know this is a ${booleanValue} story!
Spooky, right?`

document.getElementById("madlibs-output").textContent = story;
console.log(story);