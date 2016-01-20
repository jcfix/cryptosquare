var simplifyText = function(phrase) {
  var lower = phrase.toLowerCase();
  return lower;

};

var stripSpaces = function (lower){
  var noSpaces = lower.replace(/[^a-zA-Z0-9]/g, '');
  return noSpaces;
};

var calcLength = function (noSpaces){
  var calculateLength = noSpaces.length;
  return calculateLength;
};



// var lowercasephrase = function(phrase) {
//   lowerphrase = phrase.replace(/[^a-zA-Z0-9]/g, '');
// };


//remove all spaces//
//result: string with no spaces//
//remove all punctuation//
//result: string with no punctuation//
//change string to all lowercase//
//result: string with no uppercase letters//
//find the length of the string//
//result: a numerical value//
  //if length has a whole number as square root, create that number of columns//
  //else, if length does not have a whole number as the square root, use the remainder to......???//
