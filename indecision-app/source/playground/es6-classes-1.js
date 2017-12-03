//most basic class
class Person {
    constructor(name = 'Anonymus', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGretting() {
        return `Hi. I am ${this.name} and I'm ${this.age} year(s) old.`
    }
}

//Studnet is a class of Person
class Stundent extends Person {
    constructor(name, age , major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getGretting() {
        let descripton = super.getGretting();

        if(this.hasMajor()) {
            descripton += `His major is ${this.major}.`
        }

        return descripton;
    }
}

//Traveler is a class of Person
class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    //check for homelocation
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGretting() {
        let gretting = super.getGretting();
        if(this.hasHomeLocation()) {
            gretting += `My homelocatin is ${this.homeLocation}`
        }
        return gretting;
    }

}

//Person
const me = new Person ('Chrissi', 21);
console.log(me.getGretting());
//Traveler
const traveler = new Traveler('David', 22, 'HDH')
console.log(traveler.getGretting());
