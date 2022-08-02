const middle = function(arry) {
  let midNum = [];
  if (arry.length % 2 === 0) {
    let index = arry.length / 2 - 1;
    midNum.push(arry[index],arry[index] + 1);
    //midNum.push(arry[index]+1)

  } else {
    let index = (arry.length + 1) / 2 - 1;
    midNum.push(arry[index]);
  }

  return midNum;

};






module.exports = middle;
