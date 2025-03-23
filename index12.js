//Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

//1 + 2 + 3 + 4 + 5 = 15
//4 + 5 + 6 = 15
//7 + 8 = 15
//15 = 15
//자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

//제한사항
//n은 10,000 이하의 자연수 입니다.
const solution = (num) => {
  let count = 0;
  for (let i = 1; i <= parseInt(num / 2); i++) {
    let sum = 0;
    for (let j = i; i < num; j++) {
      sum += j;
      if (sum === num) {
        count++;
        break;
      } else if (sum > num) {
        break;
      }
    }
  }
  return count + 1;
};

console.log(solution(3123120));

//참고용 소스 코드 속도가 앞도적으로 빠름
function expressions(num) {
  var answer = 0;
  var k = 0;

  while ((k * (k - 1)) / 2 <= num) {
    if (Number.isInteger(num / k - (k - 1) / 2) && num / k - (k - 1) / 2 != 0) {
      answer++;
    }
    k++;
  }

  return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(expressions(11231231231231231231231235));
