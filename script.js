// Part 1: Growing Pains
// Your task is to create a program that advises a group of 
// environmental scientists how to handle the growth and spread of 
// a unique plant species under their supervision. 
// You must develop a growth control system that will monitor and 
// predict the plant growth, making decisions based on the available 
// space and potential growth.

// Here is the information you have been given:
// The area in which the plants are contained is circular, with a 
// radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied 
// by the radius, squared:

// const PI = 3.1415;

// const area = PI * radius * radius;

// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.
// Using this information, your objectives are to:
// Predict the plant growth after a specific number of weeks.
// Implement control flow to make decisions on whether the plants should be:
// Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
// Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.



const PI = 3.1415;
const RADIUS = 5;                          //ORIGNAL RADIUS = 5
const AREA = PI * RADIUS * RADIUS;          // MAX AREA 

// Each plant requires a minimum space of 0.8 square meters.
const PLANT_SPACE = 0.8;

// The area is starting with 20 plants.
const startPlants = 20;
const MAX_PLANTS = Math.floor(AREA / PLANT_SPACE);  //98

console.log('Area: ', AREA)
console.log('Max Plants: ', MAX_PLANTS)

// 80% of the max capacity  
const eigthyPercentOfMax = MAX_PLANTS * 0.8
console.log('80 percent of Max Cap: ', eigthyPercentOfMax)

// 50% of cap
const fiftyPercentofMAx = MAX_PLANTS * 0.5
console.log('50 percent of Max Cap: ', fiftyPercentofMAx)


// week 1 
let totalNumberofPlants = startPlants * 2
console.log('Total Number of Plants week 1: ', totalNumberofPlants)


if (totalNumberofPlants > eigthyPercentOfMax) {
console.log('Pruned. Too many plants...')


}else if (totalNumberofPlants >= fiftyPercentofMAx ) {
    console.log('Monitor')
}else {

    console.log('Planted')
}



// after 2 weeks

totalNumberofPlants = totalNumberofPlants * 2
console.log('Total Number of Plants week 2: ', totalNumberofPlants)
if (totalNumberofPlants > eigthyPercentOfMax) {
console.log('Pruned. Too many plants...')


}else if (totalNumberofPlants >= fiftyPercentofMAx ) {
    console.log('Monitor')
}else {

    console.log('Planted')
}

// after 3 weeks
totalNumberofPlants = totalNumberofPlants * 2
console.log('Total Number of Plants week 3: ', totalNumberofPlants)

if (totalNumberofPlants > eigthyPercentOfMax) {
console.log('Pruned. Way too many plants...')


}else if (totalNumberofPlants >= fiftyPercentofMAx ) {
    console.log('Monitor')
}else {

    console.log('Planted')
}


// https://github.com/Sammy65433/lab308.1.2


// growth - Plants doubled 
// function plantsAfterWeeks(start, weeks)  {
    // return start * Math.pow(2, weeks);
// }
// console.log(plantsAfterWeeks(1, 2, 3)); 



// Percentage of plants 
// function recommend(count) {
//     const pct = (count / MAX_PLANTS) * 100;

//     if (pct > 80) return 'Pruned';
//     if (pct >= 50 && pct <= 80) return 'Monitored';
//     return 'Planted';
// }

// console.log(recommend(40)); // Planted
// console.log(recommend(85)); // Monitored
// console.log(recommend(90)); // Pruned


