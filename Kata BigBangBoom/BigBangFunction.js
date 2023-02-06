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
function test(number, expectedResult) {
    return BigBang(number) === expectedResult ? true : false;
}
function returnTestResult(number, expectedResult) {
    return (!test(number, expectedResult) ? 'test KO with ' + expectedResult : 'nextTest');
}
function allTests() {
    var testResult;
    testResult = returnTestResult(1, '1');
    if (testResult !== 'nextTest')
        return testResult;
    testResult = returnTestResult(2, '2');
    if (testResult !== 'nextTest')
        return testResult;
    testResult = returnTestResult(5, 'Big');
    if (testResult !== 'nextTest')
        return testResult;
    testResult = returnTestResult(7, 'Bang');
    if (testResult !== 'nextTest')
        return testResult;
    testResult = returnTestResult(11, 'Boom');
    if (testResult !== 'nextTest')
        return testResult;
    testResult = returnTestResult(22, 'Boom');
    if (testResult !== 'nextTest')
        return testResult;
    testResult = returnTestResult(35, 'BigBang');
    if (testResult !== 'nextTest')
        return testResult;
    testResult = returnTestResult(70, 'BangBig');
    if (testResult !== 'nextTest')
        return testResult;
    testResult = returnTestResult(55, 'BigBoom');
    if (testResult !== 'nextTest')
        return testResult;
    testResult = returnTestResult(110, 'BoomBig');
    if (testResult !== 'nextTest')
        return testResult;
    testResult = returnTestResult(77, 'BangBoom');
    if (testResult !== 'nextTest')
        return testResult;
    testResult = returnTestResult(385, 'BigBangBoom');
    if (testResult !== 'nextTest')
        return testResult;
    testResult = returnTestResult(770, 'BoomBangBig');
    if (testResult !== 'nextTest')
        return testResult;
    return "all tests are good";
}
console.log(allTests());
