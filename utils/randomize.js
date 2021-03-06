const finalArray = require('../sampleData');

function randomize(arr, numItems){
  var newArr = [];
  var indexes = [];
  for (var i = 0; i < numItems; i++){
    if (i === 12) {
      newArr.push({
        title: 'Free Space!',
        description: '"Be right with you!" says some employee'
      });
    }
    else {
      var rand = Math.floor(Math.random()*arr.length);

      var check = indexes.find(function(item) {
        return item === rand;
      });

      if (check){
        i--;
      }
      else{
        newArr.push(arr[rand]);
        indexes.push(rand);
      }
    }
  }
  return newArr;
}

module.exports = randomize;
