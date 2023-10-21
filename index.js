function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++){
      if (array[i]+array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here

  The time complexity of this algorithm is O(n^2) 
  because there are nested loops that iterate through the array. 
  The outer loop runs n times, and for each iteration of the outer loop, 
  the inner loop runs n-1 times. Therefore, 
  the total number of iterations is n * (n-1), which simplifies to O(n^2).

  The space complexity of this algorithm is O(1) 
  because it only uses a constant amount of additional space 
  to store the loop variables and the target sum. 
  The space used does not depend on the size of the input array.
*/

/* 
  Add your pseudocode here

  take in array and number input
      iterate through the array twice (nested arrays)
        if sum of items is equal to sum of number input return true
          otherwise return false
*/

/*
  Add written explanation of your solution here

  hasTargetSum([3, 8, 12, 4, 11, 7], 10);
  returns true, since 3 and 7 add up to 10

  hasTargetSum([22, 19, 4, 6, 30], 25);
  returns true, since 19 and 6 add up to 25

  hasTargetSum([1, 2, 5], 4);
  returns false, since no pair of numbers adds up to 4
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
