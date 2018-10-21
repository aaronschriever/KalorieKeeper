import calculateBMR from "./calculateBMR";

test('calculate male BMR:  height 182cm, weight: 85kg, age: 34, equals 1909', () =>{

    expect(calculateBMR(85,182,34,false)).toBe(1909);
});
test('calculate female BMR:  height 182cm, weight: 85kg, age: 34, equals 1639', () =>{

    expect(calculateBMR(85,182,34,true)).toBe(1639);
});
test('send error data: result "error incorrect data types" ', () =>{

    expect(calculateBMR(85,182,34,'W')).toBe("error incorrect data types");
});
test('send error (NaN) data: result "error incorrect data types" ', () =>{

    expect(calculateBMR('T',182,34,true)).toBe("error incorrect data types");
});
