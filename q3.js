let array = ["1", "1", "2", "3", "3", "1"];
let unique = array.filter((item, i, self) => self.indexOf(item) === i);
console.log(unique);
