const calculateBMR = require('./calculateBMR');

test('calculate male BMR:  height 182cm, weight: 85kg, age: 34, equals 1909', () =>{

    expect(calculateBMR(85,182,34,'M')).toBe(1909);
});
test('calculate female BMR:  height 182cm, weight: 85kg, age: 34, equals 1639', () =>{

    expect(calculateBMR(85,182,34,'F')).toBe(1639);
});
test('send error data: result "error" ', () =>{

    expect(calculateBMR(85,182,34,'W')).toBe("error");
});
test('send error (NaN) data: result "error incorrect data types" ', () =>{

    expect(calculateBMR('E',182,34,'F')).toBe("error incorrect data types");
});
