function BigBang(number) {
    var result = "";
    if (number % 5 === 0) {
        result = isEven(number, result, 'Big');
    }
    if (number % 7 === 0) {
        result = isEven(number, result, 'Bang');
    }
    if (number % 11 === 0) {
        result = isEven(number, result, 'Boom');
    }
    if (result === "") {
        result = number.toString();
    }
    return result;
}
function isEven(number, currentString, action) {
    if (number % 2 === 0) {
        currentString = action + currentString;
    }
    else {
        currentString += action;
    }
    return currentString;
}
function allTests() {
    if (!test(1, '1'))
        return 'test KO with 1';
    if (!test(2, '2'))
        return 'test KO with 2';
    if (!test(5, 'Big'))
        return 'test KO with 5';
    if (!test(7, 'Bang'))
        return 'test KO with 7';
    if (!test(11, 'Boom'))
        return 'test KO with 11';
    if (!test(22, 'Boom'))
        return 'test KO with 22';
    if (!test(35, 'BigBang'))
        return 'test KO with 35';
    if (!test(70, 'BangBig'))
        return 'test KO with 70';
    if (!test(55, 'BigBoom'))
        return 'test KO with 55';
    if (!test(110, 'BoomBig'))
        return 'test KO with 110';
    if (!test(77, 'BangBoom'))
        return 'test KO with 77';
    if (!test(385, 'BigBangBoom'))
        return 'test KO with 385';
    if (!test(770, 'BoomBangBig'))
        return 'test KO with 770';
    return "all tests are good";
}
function test(number, expectedResult) {
    return BigBang(number) === expectedResult ? true : false;
}
console.log(allTests());
