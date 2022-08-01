const args = process.argv;

let pigLatin = function(input) {
  let raw = "";
  for (let w = 2; w < input.length; w++) {
    let temp = "";
    for (let l = 1; l < input[w].length; l++) {
      temp += input[w][l];
    }
    temp = temp + input[w][0] + "ay";
    raw += `${temp} `;
  }
  return raw;
};

console.log(pigLatin(args));