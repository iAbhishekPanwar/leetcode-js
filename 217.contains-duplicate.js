var containsDuplicate = function (nums) {
  let hashMap = {}; // Initialize an empty object to store seen elements

  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]]) {
      // Check if the current element exists in hashMap
      return true; // If it does, return true (duplicate found)
    } else {
      hashMap[nums[i]] = 1; // Otherwise, mark it as seen by setting hashMap[element] = 1
    }
  }

  return false; // If no duplicates were found, return false
};

let result = containsDuplicate([1, 2, 3, 1]);
console.log(result); // Output: true
