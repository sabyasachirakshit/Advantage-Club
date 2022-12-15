let arr1 = [1, 2, 3, 4, 5, 4, 6, 5, 9, 8];
let arr2 = [6, 7, 8, 9, 0, 1, 2, 3];
let arr3 = arr1.concat(arr2);
let unique = arr3.filter((index, value, self) => self.indexOf(index) === value);
console.log(unique);
