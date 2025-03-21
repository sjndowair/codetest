const regex = /^[a-zA-Z]+$/;

function solution(str) {
  const arr = [...str];
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (regex.test(arr[i])) {
      stack.push(arr[i]);
    } else {
      stack.push(Number(arr[i]));
    }
  }
  return arr;
}
// console.log(solution("asdasd222"));

const th = "asd";
const asd = "123";
console.log(isNaN(asd));
// console.log(isNaN(th));
const th2 = Number(th);
// console.log(isNaN(th2));
