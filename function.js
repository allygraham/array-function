// Function takes an array and integer then returns a multidimensional array
exports.arraySplit = function(input, divider) {
  var output = [];
  var size = Math.ceil(input.length/divider);
  while (input.length) {
    output.push(input.splice(0, size));
  }
  return output;
};
