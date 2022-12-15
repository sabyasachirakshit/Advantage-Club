let arr = [1, 2, 3];
let num = " ";
for (i in arr) {
  num += String(arr[i]);
}
let next_num = Number(num) + 1;
let new_arr = Array.from(String(next_num), Number);
console.log(new_arr);
