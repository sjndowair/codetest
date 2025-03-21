function solution(str) {
  const numMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let result = "";
  let temp = "";

  const isArr = [...str];
  for (let i = 0; i < str.length; i++) {
    if (isNaN(isArr)) {
      temp += isArr[i];
    } else {
      result += isArr[i];
    }
    return result;
  }
  return result;
}

const a = "a1234567890";
console.log(solution(a));

const b = "";
const c = [1, 2, 3].toLocaleString();
const d = b + c[0];
console.log(d, typeof d);
console.log(c);

const arr = [];
console.log(arr.pop());
