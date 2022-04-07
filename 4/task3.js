const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const n = Math.floor(Math.random() * 1000);
attempt = 1;

function ask() {
    return new Promise((resolve, reject) => {
        readline.question(`Попытка № ${attempt}, Введите число: `, answer => resolve(answer)
    )}).then(check);
}

ask();

function check(result) {
    if (result > n) {
        console.log('Меньше ...');
        attempt++
        return ask();
    }
    else if (result < n) {
        console.log('Больше ...');
        attempt++
        return ask();
    }
    else {
        console.log(`Угадал c ${attempt} попыток!`);
        return readline.close();
    }
}
