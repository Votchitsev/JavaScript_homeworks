

function numberChecking (number) {

    let n = number;

    for (let i = 2; i < n; i++) {
        
        if (n % i === 0) {
            return false;
        }
        
    }

    return true;
};


function primeNumberMaker (number) {
   
    let counter = 1;
    
    let n = 2;

    let primeNumbers = [];

    while (counter !== number) {

        if (numberChecking (n)) {
            primeNumbers.push(n);
            n++;
            counter++;
        }
        else {
            n++;
        }
    }

    console.log(primeNumbers);
}


primeNumberMaker(+process.argv[2]);
