const isArr = (arr) => {
  const map = new Map();
  arr.forEach((e) => {
    map.set(e, (map.get(e) || 0) + 1);
  });
  return map;
};

const solution = (k, arr) => {
  const sizeCount = isArr(arr);
  const countNum = Array.from(sizeCount.values()).sort((a, b) => b - a);
  let count = 0;
  let sum = 0;

  for (let i = 0; i < countNum.length; i++) {
    if (sum < k) {
      sum += countNum[i];
      count++;
    } else {
      break;
    }
  }
  return count;
};

console.log(solution(20, [1, 3, 2, 5, 4, 5, 2, 3]));

// const arrayToMapByValue = (arr) => {
//   const map = new Map();
//   arr.forEach((value) => {
//     map.set(value, (map.get(value) || 0) + 1);
//   });
//   return map;
// };

// function solution(k, tangerine) {
//   const sizeCount = arrayToMapByValue(tangerine);
//   const countArr = Array.from(sizeCount.values()).sort((a, b) => b - a);
//   let count = 0;
//   let sum = 0;

//   for (let i = 0; i < countArr.length; i++) {
//     sum += countArr[i];
//     count++;
//     if (sum >= k) {
//       return count;
//     }
//   }
// }
