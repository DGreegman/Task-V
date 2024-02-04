const { Animal } = require('./Animal')

// all the child classes are here

class Mammals extends Animal{
    constructor(name, diet){
        super(name, 'Vertebrate', diet)

    }

    eat() {
        console.log(`${this.getName()} the mammal eats ${this.getDiet()}`);
      }
    
    move() {
        console.log(`${this.getName()} the mammal walks or runs`);
    }

}


class Aves extends Animal{
    constructor(name, diet){
        super(name, 'Vertebrate', diet)
    }

    eat() {
        console.log(`${this.getName()} of the Aves family eats ${this.getDiet()}`);
      }
    
    move() {
        console.log(`${this.getName()} of the Aves family flies at great speed`);
    }
}


class Reptile extends Animal{
    constructor(name, diet){
        super(name, 'Vertebrate', diet)
    }

    eat() {
        console.log(`${this.getName()} of the Reptile family swallows ${this.getDiet()}`);
      }
    
    move() {
        console.log(`${this.getName()} of the Reptile family crawls`);
    }
}

class Amphibian extends Animal{
    constructor(name, diet){
        super(name, 'Vertebrate', diet)
    }

    eat() {
        console.log(`${this.getName()} of the Amphibian family eats ${this.getDiet()}`);
      }
    
    move() {
        console.log(`${this.getName()} of the Amphibian family jumps`);
    }
}

class Fish extends Animal{
    constructor(name, diet){
        super(name, 'Vertebrate', diet)
    }

    eat() {
        console.log(`${this.getName()} is a fish and eats ${this.getDiet()}`);
      }
    
    move() {
        console.log(`${this.getName()} fish swims faster in water`);
    }
}

class Arthropod extends Animal{
    constructor(name, diet){
        super(name, 'Invertebrate', diet)
    }

    eat() {
        console.log(`${this.getName()} of the Arthropod family ${this.getDiet()} from flowers`);
      }
    
    move() {
        console.log(`${this.getName()} of the Arthropod family flies`);
    }
}

const mammal = new Mammals('Max', 'Omnivore')
mammal.eat()
mammal.move()

const bird = new Aves('Eagle', 'Rabbit')
bird.eat()
bird.move() 

const snake = new Reptile('Python', 'Eggs')
snake.eat()
snake.move() 

const frog = new Amphibian('Frogs', 'Insects')
frog.eat()
frog.move()

const fish = new Fish('Shark', 'seals')
fish.eat()
fish.move()

const butterfly = new Arthropod('Butterfly', 'Sweet Nectar')
butterfly.eat()
butterfly.move()
