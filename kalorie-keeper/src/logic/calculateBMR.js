/*
BMR for Men = 66.47 + (13.7 * weight [kg]) + (5 * size [cm]) − (6.8 * age [years])
BMR for Women = 655.1 + (9.6 * weight [kg]) + (1.8 * size [cm]) − (4.7 * age [years])
*/

function calculateBMR(weight, height, age, gender) {
    if (gender === 'M') {

        let bmr = 66.47 + (13.7 * weight) + (5 * height) - (6.8 * age);
        return bmr;
    } else if (gender === 'F') {
        let bmr = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
        return bmr;
    } else {
        return "error";
    }
}
module.exports = calculateBMR;