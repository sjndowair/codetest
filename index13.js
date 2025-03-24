// const a = 10 >> 1;
// console.log(a);

// const b = 10 >> 2;
// console.log(b);

// const c = 10 >> 3;
// console.log(c);

const countOne = (num) => {
  return num.toString(2).split("1").length - 1;
};

console.log(countOne(10));

const a = 1111111;
console.log(a.toString(2).split("1"));

const b = 121212;
console.log(b.toString(2).split("1"));
