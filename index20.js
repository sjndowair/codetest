// const solution = (n) => {
//   let count = 0;
//   const answer = new Array(n).fill(0);
//   const arr = [];
//   for (let i = 0; i < answer.length; i++) {
//     if (answer[i] === answer[0]) {
//       count++;
//       arr.push(...answer.slice(i + 1));
//     } else {
//       answer = arr.push(answer.slice(arr.length * 2));
//       if (arr.length === answer.length && arr.length > answer.length) {
//         break;
//       }
//     }
//   }
//   let last = answer.length - arr.length;
//   console.log(answer, arr, last, count);
//   return (count += last);
// };

// console.log(solution(2));

// function solution2(n) {
//   let count = 0;
//   while (n > 0) {
//     if (n % 2 === 1) {
//       count++;
//       n--;
//     } else {
//       n /= 2;
//     }
//   }
//   return count;
// }

// console.log(solution2(4)); // 2

const a = [1, 3, 2, 5, 4, 5, 2, 3];
console.log(a.filter((item, index) => a.indexOf(item) === index));
