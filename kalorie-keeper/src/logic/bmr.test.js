const calculateBMR = require('./calculateBMR');

test('calculate male BMR:  height 182cm, weight: 85kg, age: 34, equals 1909', () =>{

    expect(calculateBMR(85,182,34,'M')).toBe(1909);
});