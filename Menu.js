// Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
// Use at least one array.
// Use at least two classes.
// Your menu should have the options to create, view, and delete elements.



/* EXAMPLE OF AN OOP WITH AN ARRAY
*/

// class Movie {
//     constructor (title, director) {
//         this.title = title;
//         this.director = director;
//     } 
//     describe () {
//         return `The movie ${this.title} was directed by ${this.director}.`
//     }
// }

// class List {
//   constructor () {
//     this.movies= [];
//   } 
//   addMovie (movie) {
//       this.movies.push(movie);
//   }
//   displayMovies() {
//       let movieInfo = "";
//       for(let i = 0; i < this.movies.length; i++) {
//         movieInfo += `
//         The ${this.movies[i].title} was directed by ${this.movies[i].director}`
//       }
//       return movieInfo;
//   }
// }

// let movie1 = new Movie ("Jurassic Park", "Steven Spielberg");
// let movie2 = new Movie ("How the Grinch stole Christmas", "Ron Howard");
// console.log(movie1.describe());
// console.log(movie2.describe());
// let list = new List;
// list.addMovie(movie1);
// list.addMovie(movie2);
// console.log(list.displayMovies());
// console.log(`-----------Finished------------`)

class sandwiches {
    constructor (sandwichName) {
        this.sandwichName = sandwichName
    }
    deals() {
        console.log(`They got sandwich deals, buy a ${this.sandwichName} get the other one half off. `)
    }
}



class Orderup {
    constructor() {
        this.sandwichOrder = []
    } 
    addSandwich(nameOfSandwich) {  // nameOfSandwich - is a parameter where I will push the instances 1, 2, and/ or 3
        this.sandwichOrder.push(nameOfSandwich)
        
    }
    removeSpecificSandwich(sandwichIndex) {
        if(sandwichIndex >= 0 && sandwichIndex < this.sandwichOrder.length) {
                return this.sandwichOrder.splice(sandwichIndex, 1);
        } else {
            console.log("Invalid sandwich index.");
            return null;
        }
    }
    myOrder() { //here i want this method to return my array "sandwichOrder" to return as a string.
        let listedOrder = this.sandwichOrder.map(sandwich => sandwich.sandwichName).join(", ");
        return `I will placing an order for ${listedOrder}.`
    }
}



let sandwich1 = new sandwiches ("Steak and Cheese")
let sandwich2 = new sandwiches ("Nashville Hot Chicken Sandwich")
let sandwich3 = new sandwiches ("Smash Bacon Burger")
let newOrder = new Orderup();
newOrder.addSandwich(sandwich1);
newOrder.addSandwich(sandwich2);
newOrder.addSandwich(sandwich3);
sandwich2.deals()
console.log(newOrder);
console.log(newOrder.myOrder())
newOrder.removeSpecificSandwich(0);
console.log(newOrder.myOrder())


