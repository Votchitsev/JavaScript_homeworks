class Good {

    constructor(id, name, desctiption, sizes, price, available) {
        this.id = id;
        this.name = name;
        this.desctiption = desctiption;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }

    setAvailable (available) {
        this.available = available
    }
}

class GoodsList {

    #goods

    constructor (sortPrice, sortDir, filter) {
        this.#goods = [];
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }

    get list () {

        let l

        if (this.filter === undefined) {
            l = this.#goods.filter(good => good.available === true)    
        }
        else {
            l = this.#goods.filter(good => good.available === true && this.filter.test(good.name))
        }
        
        if (this.sortPrice === true) {
            if (this.sortDir === true) {
                return l.sort((a, b) => a.price - b.price);
            }
            else if (this.sortDir === false) {
                return l.sort((a, b) => b.price - a.price);
            }
        }
        else if (this.sortPrice === false) {
            return l;
        }
    }

    add (good) {
        return this.#goods.push(good);
    }

    remove (id) {
        let a = this.#goods.find(el => el.id === id);
        return this.#goods.splice(this.#goods.indexOf(a), 1);

    }
}


class BasketGood extends Good {

    constructor(good, amount) {
        super(good.id, good.name, good.desctiption, good.sizes, good.price, good.available);
        this.amount = amount;
    }
}


class Basket {

    constructor() {
        this.goods = []
    }

    get totalAmount() {
        let amount = 0;
        this.goods.forEach(el => amount += el.amount);
        return amount;
    }

    get totalSum() {

        return this.goods.map(el => el.price * el.amount).reduce((a, b) => a + b);
        
    }

    add(good, amount) {
        
        let position = this.goods.find(el => el.id ===good.id);
        
        if (position !== undefined) {
            return position.amount += amount;
        }

        else {
            let position = new BasketGood(good, amount);
            return this.goods.push(position);
        }
    }

    remove(good, amount) {
        let position = this.goods.find(el => el.id === good.id);

        if (position.amount === amount) {
            return this.goods.splice(this.goods.indexOf(position), 1);
        }
        else {
            return position.amount -= amount;
        }
        
    }

    clear() {
        return this.goods.splice(0);
    }

    removeUnavailable() {
        return this.goods.forEach(el => {
            if (el.available === false) {
                this.goods.splice(this.goods.indexOf(el), 1);
            }
        });
    }
}

let a = new Good(1, 'socks', 'the warmest socks', [39, 40, 41, 42, 43, 44], 50.00, true);
let b = new Good(2, 'shirt', 'Hawaiian', [40, 42], 600.00, true);
let c = new Good(3, 'pents', 'denim', [46, 50], 2000.00, true);
let d = new Good(4, 'hat', 'like Santas', [38, 40], 700.00, false);
let e = new Good(5, 'Blazer', 'brown', [44, 45], 2500.00, true);

let catalog = new GoodsList(true, true, /sock/i);

let basket = new Basket;

catalog.add(a);
catalog.add(b);
catalog.add(c);
catalog.add(d);


basket.add(a, 2);
basket.add(b, 10);
basket.add(c, 2);
basket.add(d, 5);
basket.add(a, 1);


basket.remove(b, 5);
basket.remove(c, 2);
basket.removeUnavailable();

console.log(basket.goods);
console.log(basket.totalAmount);
console.log(basket.totalSum);

basket.clear();
console.log(basket.goods);