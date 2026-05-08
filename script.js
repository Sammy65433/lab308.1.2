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

// Part 2: Thinking Bigger
// The conservation area in which the garden is located has multiple other gardens. 
// Using the logic you have already created, determine:
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?

let plantsAfter10Weeks = startPlants * (2 ** 10);

let factor = 1;   // initialize a factor variable to keep track of the growth multiplier
for (let i = 0; i < 10; i++) {   // loop for 10 weeks
  factor *= 2;        // multiply by 2 each iteration
}
// let plantsAfter10Weeks = startPlants * factor // calculate the number of plants after 10 weeks 
// using the growth factor

console.log('Plants after 10 weeks: ', plantsAfter10Weeks)

let spaceRequired = plantsAfter10Weeks * PLANT_SPACE // calculate the total space required for 
// the plants after 10 weeks
console.log('Space required for 100 plants after 10 weeks: ', spaceRequired)

let newRadius = Math.sqrt(spaceRequired / PI) // calculate the new radius of the garden 
// based on the required space
console.log('New radius of the garden: ', newRadius)






// Part 3: Errors in Judgement
// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.

const INITIAL_PLANTS = 100;   // scientists ignore your advice and start with 100
const WEEKS_TO_GROW = 10;     // we look 10 weeks ahead

let growthFactor = 1;
for (let i = 0; i < WEEKS_TO_GROW; i++) {
    growthFactor = growthFactor * 2; // multiply by 2 each week
    // after the loop growthFactor will be 2^10, which is the growth multiplier after 10 weeks
}

let plantsAfter10WeeksWith100 = INITIAL_PLANTS * growthFactor; // calculate the number of plants after 10 weeks starting with 100 plants
let totalSpaceNeeded = plantsAfter10WeeksWith100 * PLANT_SPACE; 
//  102 400 * 0.8 = 81 920 square meters required after 10 weeks with 100 starting plants

try {   
    if (totalSpaceNeeded > AREA) {  // if the space needed exceeds the area of the original garden
        throw new Error('The amount of space required exceeds the available space in the original garden.'); // throw an error with an appropriate message
    } else {
        console.log('The plants can be accommodated within the original garden.'); // if the space needed does not exceed the area, log that it can be accommodated
    }
} catch (error) {
    console.error(error.message); // catch the error and log the error message
}

// Show Variables for debugging purposes
console.log('--- Debug info ---------------------------------------------------');
console.log('Initial plants           :', INITIAL_PLANTS);
console.log('Weeks of growth          :', WEEKS_TO_GROW);
console.log('Growth factor (2^10)     :', growthFactor);
console.log('Plants after 10 weeks    :', plantsAfter10Weeks);
console.log('Space needed (m²)       :', totalSpaceNeeded);
console.log('Garden area (m²)        :', AREA);


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


