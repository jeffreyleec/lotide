//const args = process.argv;
// args was input from terminal

let reverse = function(input) {
  let raw = "";
  for (let w = 2; w < input.length; w++) {
    if (input[w].length > 1) {
      let innie = "";
      for (let l = input[w].length - 1; l >= 0; l--) {
        innie += input[w][l];
      }
      raw += `${innie} \n `;
       
    } else {
      raw += `${input[w]} \n `;
    }
  }
  return raw;
};

//console.log(reverse(args));


module.exports = reverse;