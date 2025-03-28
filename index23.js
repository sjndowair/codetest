//철수는 롤케이크를 두 조각으로 잘라서 동생과 한 조각씩 나눠 먹으려고 합니다. 이 롤케이크에는 여러가지 토핑들이 일렬로 올려져 있습니다. 철수와 동생은 롤케이크를 공평하게 나눠먹으려 하는데, 그들은 롤케이크의 크기보다 롤케이크 위에 올려진 토핑들의 종류에 더 관심이 많습니다. 그래서 잘린 조각들의 크기와 올려진 토핑의 개수에 상관없이 각 조각에 동일한 가짓수의 토핑이 올라가면 공평하게 롤케이크가 나누어진 것으로 생각합니다.
//예를 들어, 롤케이크에 4가지 종류의 토핑이 올려져 있다고 합시다. 토핑들을 1, 2, 3, 4와 같이 번호로 표시했을 때, 케이크 위에 토핑들이 [1, 2, 1, 3, 1, 4, 1, 2] 순서로 올려져 있습니다. 만약 세 번째 토핑(1)과 네 번째 토핑(3) 사이를 자르면 롤케이크의 토핑은 [1, 2, 1], [3, 1, 4, 1, 2]로 나뉘게 됩니다. 철수가 [1, 2, 1]이 놓인 조각을, 동생이 [3, 1, 4, 1, 2]가 놓인 조각을 먹게 되면 철수는 두 가지 토핑(1, 2)을 맛볼 수 있지만, 동생은 네 가지 토핑(1, 2, 3, 4)을 맛볼 수 있으므로, 이는 공평하게 나누어진 것이 아닙니다. 만약 롤케이크의 네 번째 토핑(3)과 다섯 번째 토핑(1) 사이를 자르면 [1, 2, 1, 3], [1, 4, 1, 2]로 나뉘게 됩니다. 이 경우 철수는 세 가지 토핑(1, 2, 3)을, 동생도 세 가지 토핑(1, 2, 4)을 맛볼 수 있으므로, 이는 공평하게 나누어진 것입니다. 공평하게 롤케이크를 자르는 방법은 여러가지 일 수 있습니다. 위의 롤케이크를 [1, 2, 1, 3, 1], [4, 1, 2]으로 잘라도 공평하게 나뉩니다. 어떤 경우에는 롤케이크를 공평하게 나누지 못할 수도 있습니다.
//롤케이크에 올려진 토핑들의 번호를 저장한 정수 배열 topping이 매개변수로 주어질 때, 롤케이크를 공평하게 자르는 방법의 수를 return 하도록 solution 함수를 완성해주세요.

// const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// const map2 = new Map();

// // 배열을 순회하면서 Map에 데이터 추가
// arr.forEach((element) => {
//   map2.set(element, (map2.get(element) || 0) + 1);
// });

// console.log("생성된 Map:", map2);

// // Map 순회하기
// map2.forEach((value, key) => {
//   console.log(`숫자 ${key}는 ${value}번 등장`);
// });

// // 다른 방법들:
// console.log("\n다른 순회 방법들:");
// // 1. entries() 사용
// for (let [key, value] of map2.entries()) {
//   console.log(`${key}: ${value}`);
// }

// // 2. keys() 사용
// console.log("\nkeys 순회:");
// for (let key of map2.keys()) {
//   console.log(`key: ${key}, value: ${map2.get(key)}`);
// }

// // 3. values() 사용
// console.log("\nvalues 순회:");
// for (let value of map2.values()) {
//   console.log(`value: ${value}`);
// }

function solution(topping) {
  const a = new Set();
  const b = {};

  let answer = 0;
  let check = 0;

  for (let i = 0; i < topping.length; i++) {
    if (b[topping[i]]) {
      b[topping[i]]++;
    } else {
      b[topping[i]] = 1;
      check++;
    }
  }

  for (let i = 0; i < topping.length; i++) {
    a.add(topping[i]);
    b[topping[i]]--;

    if (!b[topping[i]]) check--;
    if (a.size === check) answer++;
  }

  return answer;
}

const isSet = new Set();

isSet.add(1);
isSet.add(1);

console.log(isSet);

//문제 풀이 두번째 케이스 추가

function solution(topings) {
  let count = 0;
  const leftMap = new Map();
  const rightMap = new Map();
  for (let i = 0; i < topings.length; i++) {
    rightMap.set(
      topings[i],
      rightMap.get(topings[i]) ? rightMap.get(topings[i]) + 1 : 1
    );
  }
  for (let i = 0; i < topings.length; i++) {
    leftMap.set(
      topings[i],
      leftMap.get(topings[i]) ? leftMap.get(topings[i]) + 1 : 1
    );
    if (rightMap.get(topings[i]) > 1)
      rightMap.set(topings[i], rightMap.get(topings[i]) - 1);
    else if (rightMap.get(topings[i]) === 1) rightMap.delete(topings[i]);
    if (leftMap.size === rightMap.size) {
      count++;
    }
  }
  return count;
}
