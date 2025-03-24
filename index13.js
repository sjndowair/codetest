const isNum = (num) => {
  return num.toString(2).split("1").length - 1;
};

const solution = (num) => {
  let nowNum = isNum(num);
  let nextNum = num + 1;
  while (true) {
    if (nowNum === isNum(nextNum)) {
      return nextNum;
    }
    nextNum++;
  }
};

console.log(solution(78));
console.log(solution(15));

const dd = [1, 2, 3, 4, 5];
console.log(dd.slice(0, 3));
console.log(dd);
