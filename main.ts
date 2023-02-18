//Qno 1
//const message:string = "Hello Eric, would you like to learn some Python today?”;
//console.log(message);

//______________________________________

//Qno 2
//let name: string = "Ahmad Ali";

//console.log("Lowercase: " + name.toLowerCase());
//console.log("Uppercase: " + name.toUpperCase());
//console.log("Titlecase: " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());

//______________________________________

//Qno 3
//let quote: string = 'I have not failed. I\'ve just found 10,000 ways that won\'t work.';
//let author: string = 'Thomas Edison';

//console.log(author + ' once said, "' + quote + '"');
//______________________________________

//
//Qno 4
//var famousPerson = 'Ahmad Ali';
//var message = '"struggle is the meaning of life"';
//console.log(famousPerson + " once said, " + message);
//______________________________________

//
//Q5 
//var famousPerson = 'Ahmad Ali';
//var message = '"struggle is the meaning of life"';
//console.log(famousPerson + " once said, " + message);


//Q6
//const nameWithWhiteSpace = "\t\n   John Doe   \t\n"; // Store name with white spaces

//console.log(`Name with white spaces: "${nameWithWhiteSpace}"`); // Print name with white spaces

//const strippedName = nameWithWhiteSpace.trim(); // Strip the white spaces

//console.log(`Stripped name: "${strippedName}"`); // Print the stripped name

//______________________________________


//Q7

//console.log(2 * 4);
//console.log(16 / 2);
//console.log(4 + 4);
//console.log(10 - 2);

//______________________________________


//Q9
//var myfavNum = 9;
//console.log("my favorite number is ".concat(myfavNum));
//______________________________________

//Qno10
//





//Q11
//var friends = ['saleem','alam','azfer','aslam']
//console.log(friends[0])
//console.log(friends[1])
//console.log(friends[2])
//console.log(friends[3])
//______________________________________

//Q12
//console.log(friends[0]+' how are you?')
//console.log(friends[1]+' how are you?')
//console.log(friends[2]+' how are you?')
//console.log(friends[3]+' how are you?')
//______________________________________


//Q13

//var myArray = ['yamahaR3','honda Civic','bullet Train']
//console.log( `once I ride ${myArray[2]} in china, i loved it`)
//console.log(`i would love to own ${myArray[0]}`)
//console.log(`${myArray[1]} is most comfortable car available in pakistan`)
//______________________________________

//Q14
//var listDinner =['aslam','alam','akmal']
   //console.log(`Dear ${listDinner[0]} would u like to have dinner with me `)
  // console.log(`Dear ${listDinner[1]} would u like to have dinner with me `)
   //console.log(`Dear ${listDinner[2]} would u like to have dinner with me `)
//______________________________________

//Qn15
//let guestList = ['Alice', 'Bob', 'Charlie', 'Dave'];
//const cancelledGuest = guestList[2];

//console.log(`Unfortunately, ${cancelledGuest} cannot make it to dinner.`);

//guestList[2] = 'Eve';

//guestList.forEach((guest) => {
  //console.log(`Dear ${guest}, please come to dinner this evening.`);
//});
//______________________________________


//Qno16
//let guestList = ['Alice', 'Bob', 'Charlie', 'Dave'];
//const cancelledGuest = guestList[2];

//console.log(`Unfortunately, ${cancelledGuest} cannot make it to dinner.`);

//guestList[2] = 'Eve';

//console.log('Good news! We found a bigger dinner table.');

//guestList.unshift('Frank');
//guestList.splice(3, 0, 'Gina');
//guestList.push('Helen');

//guestList.forEach((guest) => {
  //console.log(`Dear ${guest}, please come to dinner this evening.`);
//});
//______________________________________

//Qno17
//let guestList = ['Alice', 'Bob', 'Charlie', 'Dave'];
//const cancelledGuest = guestList[2];

//console.log(`Unfortunately, ${cancelledGuest} cannot make it to dinner.`);

//guestList[2] = 'Eve';

//console.log('Good news! We found a bigger dinner table.');

//guestList.unshift('Frank');
//guestList.splice(3, 0, 'Gina');
//guestList.push('Helen');

//console.log('Oops, it turns out that the new dinner table won\'t arrive in time.');

//console.log('Sorry, we can only invite two people to dinner.');

//while (guestList.length > 2) {
  //const removedGuest = guestList.pop();
 // console.log(`Sorry, ${removedGuest}, we won't be able to invite you to dinner.`);
//}

//guestList.forEach((guest) => {
  //console.log(`Dear ${guest}, please come to dinner this evening.`);
//});

//guestList = [];

//console.log(`After removing all the guests, the guest list is now ${guestList}.`);
//______________________________________

//Qno17
let places: string[] = ["Japan", "New Zealand", "Peru", "Egypt", "Iceland"];

console.log("Original order: ", places);

console.log("Alphabetical order: ", places.slice().sort());

console.log("Original order: ", places);

console.log("Reverse alphabetical order: ", places.slice().sort().reverse());

console.log("Original order: ", places);

places.reverse();
console.log("Reversed order: ", places);

places.reverse();
console.log("Original order: ", places);

console.log("Alphabetical order: ", places.slice().sort());

console.log("Reverse alphabetical order: ", places.slice().sort().reverse());

//______________________________________

//Qno18
let guests: string[] = ["Alice", "Bob", "Charlie", "David"];

console.log(`You are inviting ${guests.length} guests to dinner.`);
//______________________________________


//Qno19
let countries: string[] = ["United States", "Japan", "France", "Brazil", "India"];
//______________________________________

//Qno20
let person: {name: string, age: number, occupation: string} = {
  name: "John",
  age: 30,
  occupation: "Software Developer"
};

let car: {make: string, model: string, year: number} = {
  make: "Honda",
  model: "Accord",
  year: 2022
};

//______________________________________


//Qno21
let numbers: number[] = [1, 2, 3, 4, 5];

// Produce an index error by accessing an index that does not exist
console.log(numbers[10]);

// The error produced will be "undefined" since the element does not exist
// We will correct the error by accessing a valid index
console.log(numbers[2]);
//______________________________________


//Qno22
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda');

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');

console.log("Is car.toLowerCase() == 'honda'? I predict False.");
console.log(car.toLowerCase() == 'honda');

console.log("Is 5 > 2? I predict True.");
console.log(5 > 2);

console.log("Is 3 < 1? I predict False.");
console.log(3 < 1);

console.log("Is 7 >= 5? I predict True.");
console.log(7 >= 5);

console.log("Is 2 <= 1? I predict False.");
console.log(2 <= 1);

console.log("Is 1 < 2 && 2 < 3? I predict True.");
console.log(1 < 2 && 2 < 3);

console.log("Is 1 < 2 || 2 > 3? I predict True.");
console.log(1 < 2 || 2 > 3);

let fruits: string[] = ["apple", "banana", "orange"];

console.log("Is 'apple' in the array? I predict True.");
console.log("apple" in fruits);

console.log("Is 'grape' in the array? I predict False.");
console.log("grape" in

//______________________________________























