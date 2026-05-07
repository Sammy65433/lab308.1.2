
const PI = 3.1415;
const RADIUS = 5;                          //ORIGNAL RADIUS = 5
const AREA = PI * RADIUS * RADIUS;          // MAX AREA 

const PLANT_SPACE = 0.8;
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


