// arguments object - no longer bound with arrow function

const add = (a, b) => {
    //conslole.log(arguments)
    return a+b
}

console.log(add(7, 100));

// this keyword - no longer bound

const user = {
    name: 'David',
    cities: ['Heidenheim', 'Ulm', 'Graz'],
    //printPlacesLived: function()...
    printPLacesLived() {
        // this is referencing the parent element
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};

user.printPLacesLived();

//Task use map
const multiplier = {
    numbers: [2, 7],
    multiplyBy: 9,
    multiply() {
        return this.numbers.map((num) => this.multiplyBy*num);
    }
}
console.log(multiplier.multiply())