//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const colors = ["black", "brown", "red", "orange","yellow", "green", "blue", "violet", "grey","white"]

const decodedValue = (x) => {
   let arr = x.slice(0,2)
   let result = arr.map((i) => colors.indexOf(i)).join('') ; 
   return parseInt(result,10)
  };

  module.exports = decodedValue