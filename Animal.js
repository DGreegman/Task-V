class Animal {
    // private properties that can be accessed within the class
    #name
    #type
    #diet

    constructor(name, type, diet){
        this.#diet = diet
        this.#name = name 
        this.#type = type 
    }

    // methods that can be implemented directly 
    getName (){
        return this.#name
    }

    getType(){
        return this.#type
    }

    getDiet(){
        return this.#diet
    }

    // Abstract Methods that can't be implemented directly 

    eat() {
        throw new Error('This method must be implemented in a subclass');
      }
    
      move() {
        throw new Error('This method must be implemented in a subclass');
      }
}

module.exports = { Animal }