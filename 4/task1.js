function getPasswordChecker(truePassword) {
    return function checkPassword(userPassword) {
        if (truePassword === userPassword) {
            return true;
        }
        else {
            return false;
        }
    }
}


const a = getPasswordChecker(123);
console.log(a(324));
console.log(a(123));