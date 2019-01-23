/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global: At this level this refers to the window itself meaning the entirety of js. The value of this will be the window itself.
* 2. Implicit: Here this is tied to the object that when declared is left of the period(. ex. Objective.this) this is bound to Objective in this case.
* 3. New: Here this refers to the object created when a constructor function is executed and an object is returned.
* 4. EXplicit: Here this is tied the focus of call or apply methods and connects to the entity being overridden.
*
* write out a code example of each explanation above
*/

// Principle 1 ----- Window Binding Example---

function Greet(greetings){
    console.log(`${this} World!`)
    return greetings
}
Greet("Good Evening")

// Principle 2-------Implicit Binding Example---

const fighter = {
    name: "Rocky",
    victory: function (){
        console.log(`${this.name} wins by KO!!!`)
    }
}
fighter.victory()


// Principle 3------New Binding Example---

function MakeChampion(contestant){ //Object Constructor function
    this.weightclass = "heavyweight";
    this.contestant = contestant;
    this.fight = function (){
        console.log(`${this.contestant} is the new ${this.weightclass} champion of the world!`)
    }

}
const tyson = new MakeChampion('Mike Tyson')
const balboa = new MakeChampion('Rocky Balboa')

console.log(tyson.fight())
console.log(balboa.fight())


// Principle 4
console.log(balboa.fight.call(tyson))
// code example for Explicit Binding