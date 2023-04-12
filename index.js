const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const space = " ";
function splitString(book, separator) {
  // New variable is assigned an array of words from a single book
  const splitBookString = book.split(separator);

  return splitBookString;
}

function capitalizeFirstLetter(str, space) {
  const capitalizedFirstWord = str.map(
    (el) => el.charAt(0).toUpperCase() + el.slice(1)
  );
  // console.log(capitalizedFirstWord);
  const complete = capitalizedFirstWord.join(space);
  return complete;
}

function titleCased() {
  const arraysOfTitles = tutorials.map((tutorial) => splitString(tutorial));
  const arrayOfWords = tutorials.map((arrOfTitles) =>
    splitString(arrOfTitles, space)
  );
  // console.log(arrayOfWords);
  const completeCapitalization = arrayOfWords.map((arrOfWords) =>
    capitalizeFirstLetter(arrOfWords, space)
  );
  // console.log(completeCapitalization);
  return completeCapitalization;
}

// const finish = capitalizeFirstLetter(book1, space);
// console.log(finish);
