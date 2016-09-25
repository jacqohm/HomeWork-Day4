// HomeWork Day 4 --
// Long Questions
//
// Long1

var words = ["hello", "what", "is", "up", "dude"]
lengths(words)

function lengths(arrOfStrings) {
//you need a loop to iterate the array
//using the loop find the length of each word
//console log? An array of lengths
//create temp array

var wordsArr = [];

for (var i = 0; i < arrOfStrings.length; i++) {
  console.log(arrOfStrings[1].length );

  wordsArr.push( arrOfStrings[1].length );

}
//console.log(wordsArr);
//shouldn't return "console.log"
// questions specify for "return"
return wordsArr;
}

console.log(lengths(words));


// Long 2

function transmogrifier(num1,num2,num3){
  var result = Math.pow((num1 * num2), num3);
 console.log(result);
}

transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);


// Long 3















//Short questions
//Short 3

function isCharacterAVowel(str) {
  //returns true if it is a vowel and false, otherwise.
var isVowel = false;

//check if it is a vowel??
//create vowels array to loop through to test!
var vowels = [ 'a', 'e', 'i', 'o', 'u'];
for( var i = 0; i < vowels.length; i++) {
  console.log( vowels[i] );

  if( vowels[i] === str ) {
    isVowel = true;
  } else {
    isVowel = false;
  }
}

return isVowel;
}

isCharacterAVowel('s');



var words = ["hello", "what", "is", "up", "dude", "heyoooow"];

lengths(words);

function lengths(wordsStr) {
// 0. create temp var to hold the array of lengths
var wordsArr = [];


// 1. iterate the array given into the function
for(var i = 0; i < wordsStr.length; i++) {
  // 2. within the loop, find the lengths of each one

  // 3. return an array of lengths
  wordsArr.push( wordsStr[i].length );
}

return wordsArr;
}

// console.log( lengths(words) );


// write a function isCharacterAVowel
// takes in a string of length = 1

function isCharacterAVowel(str) {
// returns true if it is a vowel
// returns false if it is otherwise


console.log( typeof str );

return /^[aeiou]$/i.test(str);


//   var found = str.match(re);

//   if( found ) {
//     isVowel = true;
//   } else {
//     isVowel = false;
//   }

// return isVowel;

// console.log();











// create an array of vowels
//   var vowels = [ 'a', 'e', 'i', 'o', 'u' ];

//   // loop through the array
//   for(var i = 0; i < vowels.length; i++) {
//     console.log( "vowels is: " + vowels[i] );
//     console.log( "given str is: " + str );

//     // compare vowels[i] === given string
//     if( vowels[i] === str ) {
//       isVowel = true;
//     }
//   }


// return isVowel;
}

console.log( isCharacterAVowel( 32 ) );
