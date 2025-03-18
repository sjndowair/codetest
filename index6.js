//정수로 이루어진 배열 numbers가 있습니다. 배열 의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라고 합니다.
//정수 배열 numbers가 매개변수로 주어질 때, 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return 하도록 solution 함수를 완성해주세요. 단, 뒷 큰수가 존재하지 않는 원소는 -1을 담습니다.

function solution(numbers) {
  const result = Array(numbers.length).fill(-1);
  console.log(result);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
      result[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  console.log(stack);

  return result;
}

console.log(solution([2, 3, 3, 5]));

//1. numbers 배열의 길이와 같은 -1을 담은 배열을 생성한다.
//2. stack 배열을 생성한다.
//3. numbers 배열을 순회하며 stack 배열의 마지막 요소와 비교한다.
//4. 만약 stack 배열의 마지막 요소가 numbers 배열의 현재 요소보다 작다면, stack 배열의 마지막 요소를 제거하고, result 배열의 현재 요소를 numbers 배열의 현재 요소로 변경한다.
//5. stack 배열에 현재 요소를 추가한다.
//6. 만약 stack 배열이 비어있다면, result 배열의 현재 요소를 -1로 변경한다.
//7. result 배열을 반환한다.
