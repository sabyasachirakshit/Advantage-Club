let arr = [0, 1, 5, 1, 4, 4, 2, 8, 9];
function lucky_seven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] + arr[i] + arr[i + 1] === 7) {
      return true;
    }
  }
  return false;
}
console.log(lucky_seven(arr));
