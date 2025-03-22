//JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
//문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

const solution = (str) => {
  const arr = str.toLowerCase().split(" ");
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      result.push("");
    } else {
      result.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
  }
  return result.join(" ");
};
