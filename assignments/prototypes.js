/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  

  function GameObject(attr){
    this.createdAt = new Date;
    this.dimensions = attr.dimensions;
    this.dimensions.length = attr.dimensions.length;
    this.dimensions.width = attr.dimensions.width;
    this.dimensions.height = attr.dimensions.height;
    // (These represent the character's size in the video game)
    
  
  }

    GameObject.prototype.destroy = function(attr){// prototype method -> returns the string: 'Object was removed from the game.'
      return `${this.name} was removed from the game.`;
    }

  function CharacterStats(childattr){ 
    this.healthPoints = (`${childattr.healthPoints} HP(more than what Todd Howard has after Fallout 76 o.O)`);
    this.name = childattr.name;
    GameObject.call(this, childattr);
      this.isCharacterStats = childattr.isCharacterStats;
  }
 
  CharacterStats.prototype = Object.create(GameObject.prototype)
  CharacterStats.prototype.takeDamage = function (childattr){
    return `${this.name} took damage.`;
  }

   // prototype method -> returns the string '<object name> took damage.'
  //should inherit destroy() from GameObject's prototype

 


  function Humanoid(grandchildattr){ /*(Having an appearance or character resembling that of a human.) ===*/
    this.team = grandchildattr.team;
    this.weapons = grandchildattr.weapons;
    this.language = grandchildattr.language
    CharacterStats.call(this, grandchildattr); 
    this.isHumanoid = grandchildattr.isHumanoid; 
  }
  Humanoid.prototype = Object.create(CharacterStats.prototype)
  Humanoid.prototype.greet = function(grandchildattr){
    return `${this.name} offers a greeting in ${this.language}.`
  } 
  // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    // should inherit destroy() from GameObject through CharacterStats
    // should inherit takeDamage() from CharacterStats





  // function Humanoid(grandchildattr) {
  //   CharacterStats.call(this, grandchildattr); 
  //   this.isHumanoid = grandchildattr.isHumanoid; 
  // }?????wWHY DOES THIS NEED TO BE NESTED IN THE FIRST HUMNAOID FUNCTION???



  
  







  /*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!