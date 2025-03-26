//피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.
//예를들어
//F(2) = F(0) + F(1) = 0 + 1 = 1
//F(3) = F(1) + F(2) = 1 + 1 = 2
//F(4) = F(2) + F(3) = 1 + 2 = 3
//F(5) = F(3) + F(4) = 2 + 3 = 5
//와 같이 이어집니다.
//2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

function solution(progresses, speeds) {
  const stack = [];
  let count = 0;
  for (let i = 0; i < progresses; i++) {
    let complete = progresses[i] + speeds[i];
    if (complete.filter((item) => item >= 100)) {
      stack.push(complete.filter((item) => item).length);
    } else {
      complete += speends[i];
    }
  }
  return stack;
}

console.log(solution([93, 30, 55], [1, 30, 5]));

function solution2(a, b) {
  const arr = [];
  let count = 0;
  for (let i = 0; i < a; i++) {
    const complete = a[i] + b[i];
    while (complete < 100) {
      complete += b[i];
      count++;
    }
  }
  return arr;
}

console.log(solution2([93, 30, 55], [1, 30, 5]));

function solution3(a, b) {
  const arr = [];
  const stack = [];
  let count = 0;
  let index = 0;
  let num = 0;
  const complete = a[index] + b[index];
  while (complete < 100) {
    complete += b[index];
    count++;
    if (complete >= 100) {
      arr.push(count);
      count = 0;
    }
    index++;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[i] >= arr[j]) {
        num++;
        stack.push(num);
        num = 0;
      } else {
        stack.push(1);
        break;
      }
    }
  }
  return stack;
}

console.log(solution3([93, 30, 55], [1, 30, 5]));
