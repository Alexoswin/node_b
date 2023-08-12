

console.log("this is index.js")
function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum+=element;        
    });
    return sum / arr.length ;
}
module.exports = {
    avg: average,
    name: "oswin",
    roll: 4,
}
//module.exports= average

console.log(average([32,3]));