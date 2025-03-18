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
