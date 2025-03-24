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
