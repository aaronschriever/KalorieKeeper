/*
BMR for Men = 66.47 + (13.7 * weight [kg]) + (5 * size [cm]) − (6.8 * age [years])
BMR for Women = 655.1 + (9.6 * weight [kg]) + (1.8 * size [cm]) − (4.7 * age [years])
*/
function checkDataTypes(weight, height, age, isFemale){
if (Number.isInteger(weight)&& Number.isInteger(height) && Number.isInteger(age) && typeof isFemale === 'string'){
    return true;
} else {
        return false;
    } 
}

function calculateBMR(weight, height, age, isFemale) {
  //  if (checkDataTypes(weight, height, age, isFemale)){

    
    if (isFemale === false) {

        let bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
        return Math.round(bmr);
    } else if (isFemale === true) {
        let bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
        return Math.round(bmr);
    } else {
        return "error";
    }
} /*else{
    return "error incorrect data types";
}
}*/
module.exports = calculateBMR;