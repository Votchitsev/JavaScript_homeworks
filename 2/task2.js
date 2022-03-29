

const catalog = [
    {
        id: 1,
        name: "socks",
        description: "the warmest socks",
        sizes: [39, 40, 41, 42, 43, 44],
        price: 50.00,
        available: true,
    },
    {
        id: 2,
        name: "shirt",
        description: "Hawaiian", 
        sizes: [40, 42],
        price: 600.00,
        available: true,
    },
    {
        id: 3,
        name: "pents",
        description: "denim", 
        sizes: [46, 50],
        price: 2000.00,
        available: true,
    },
    {
        id: 4,
        name: "hat",
        description: "like Santa's", 
        sizes: [38, 40],
        price: 700.00,
        available: false,
    },
    {
        id: 5,
        name: "Blazer",
        description: "Brown", 
        sizes: [44, 45],
        price: 2500.00,
        available: true,
    }    

];

let basket = [
    {
        good: {
            id: 1,
            name: "socks",
            description: "the warmest socks",
            sizes: [39, 40, 41, 42, 43, 44],
            price: 50.00,
            available: true,
        },
        amount: 2,
    },
    {
        good: {
            id: 2,
            name: "shirt",
            description: "Hawaiian", 
            sizes: [40, 42],
            price: 600.00,
            available: true,
        },
        amount: 1,
    }
];


function addGoods (goodId, amount) {
    let a = catalog.find(el => el.id === goodId);
    newGood = {
        good: a,
        amount: amount,
    };
    basket.push(newGood);
}


function deleteGoods (goodId) {
    let a = basket.find(el => el.good.id === goodId);
    basket.splice(basket.indexOf(a), 1);
}

function deleteAllGoods () {
    basket.splice(0);
}

function OrderCounter () {
    let totalAmount = basket.reduce(
        (previousValue, currentValue) => previousValue.amount + currentValue.amount);
    let totalSumm = basket.reduce(
        (previousValue, currentValue) => (previousValue.amount * previousValue.good.price) + currentValue.amount * currentValue.good.price);
    return {
        totalAmount,
        totalSumm,
    };
}

deleteAllGoods();
addGoods(1, 5);
addGoods(2, 3);
addGoods(4, 1);
deleteGoods(1);
console.log(OrderCounter());