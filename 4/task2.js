const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = Math.floor(Math.random() * 1000);

attempt = 1;

function engine(){
    readline.question(`Попытка № ${attempt}, Введите число: `, answer => check(answer));
}

function check(number) {
    if (number > n) {
        console.log('Меньше ...');
        attempt++
        return engine();
    }
    else if (number < n) {
        console.log('Больше ...');
        attempt++
        return engine();
    }
    else {
        console.log(`Угадал c ${attempt} попыток!`);
        return readline.close();
    }
}

engine();