# Four principles of OOP: 

Abstraction, Polymorphism, Encapsulation, and Inheritance.


### Abstraction 
Created a base class called Animal that includes properties common to all animals, such as name, type (vertebrate or invertebrate), and diet.
Define abstract methods in the Animal class for actions that all animals can perform, 
such as eat() and move(). These methods will not have implementations in the base class, but they will force subclasses to provide their own implementations.

### Encapsulation:

Make the properties and methods of the Animal class private using # prefixes. This will prevent them from being accessed directly from outside the class, promoting data protection and encapsulation.
Create public getter and setter methods to allow controlled access to private properties.

### Inheritance:

Created subclasses of Animal for each specific animal type, such as Mammal, Bird, Reptile, Amphibian, Fish, and Arthropod.
These subclasses will inherit the properties and methods of the Animal class, but they can also override them to provide specific implementations for their own animal types. 

### Polymorphism:

The use of abstract methods and method overriding in subclasses enables polymorphism. This means that you can call the same method (e.g., eat()) on different animal objects, and it will behave differently depending on the specific animal type.

### classes

The code has a total of 7 classes in two separate files, 1 Class which is the base/main class in the file Animal.js and 6 classes that inherited all its properties and method from the base Class 

here is the class name 

1. Animal (base class)
2. Mammals
3. Aves
4. Reptile
5. Amphibian
6. Fish
7. Arthropod

