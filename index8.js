function solution(k, num, links) {
  // 트리 구조를 객체로 변환
  // num: 각 노드의 비용값 배열
  // links: 각 노드의 왼쪽, 오른쪽 자식 노드 정보 배열
  const tree = links.reduce((tree, v, i) => {
    tree[i] = {
      cost: num[i], // 현재 노드의 비용
      l: v[0], // 왼쪽 자식 노드 번호
      r: v[1], // 오른쪽 자식 노드 번호
    };
    return tree;
  }, {});

  // 루트 노드를 찾는 로직
  // n개의 노드가 있을 때, 모든 노드 번호의 합에서 자식 노드들의 번호를 빼서 루트 노드를 찾음
  const n = num.length;
  const root = links.reduce((root, v) => {
    const [a, b] = v;
    if (a > 0) root -= a;
    if (b > 0) root -= b;
    return root;
  }, (n * (n - 1)) / 2);

  // 주어진 limit 값으로 그룹을 나눌 수 있는지 확인하는 함수
  const go = (limit) => {
    // 스택을 이용한 DFS 구현
    const callStack = [root];
    // 각 노드별 결과값을 저장할 객체
    const returnValues = {
      "-1": {
        cost: 0, // 그룹의 총 비용
        cnt: 0, // 나눈 그룹의 수
      },
    };
    // 스택의 마지막 요소를 쉽게 접근하기 위한 헬퍼 함수
    callStack.back = function () {
      return this[this.length - 1];
    };

    while (callStack.length) {
      const now = callStack.back();
      const { cost, l, r } = tree[now];
      const lRes = returnValues[l]; // 왼쪽 자식의 결과
      const rRes = returnValues[r]; // 오른쪽 자식의 결과

      // 왼쪽 자식이 아직 처리되지 않았다면 스택에 추가
      if (!lRes) {
        callStack.push(l);
        continue;
      }
      // 오른쪽 자식이 아직 처리되지 않았다면 스택에 추가
      if (!rRes) {
        callStack.push(r);
        continue;
      }
      callStack.pop();

      // 현재 노드의 결과 초기화
      returnValues[now] = {
        cost,
        cnt: returnValues[l].cnt + returnValues[r].cnt,
      };
      const ret = returnValues[now];

      // 주어진 노드들의 비용 합이 limit을 넘지 않는지 확인하는 함수
      const underLimit = (...nodes) => {
        const sum = nodes.reduce((sum, v) => (sum += v.cost), 0);
        return sum <= limit;
      };

      // 그룹 나누기 로직
      if (underLimit(ret, lRes, rRes)) {
        // 현재 노드와 양쪽 자식을 모두 하나의 그룹으로 묶을 수 있는 경우
        ret.cost += lRes.cost + rRes.cost;
      } else if (underLimit(ret, lRes) || underLimit(ret, rRes)) {
        // 현재 노드와 자식 노드 중 하나만 그룹으로 묶을 수 있는 경우
        ret.cost += Math.min(lRes.cost, rRes.cost);
        ret.cnt += 1;
      } else {
        // 각각 따로 그룹을 만들어야 하는 경우
        ret.cnt += 2;
      }
    }
    return returnValues[root];
  };

  // 이진 탐색으로 최적의 답을 찾는 함수
  const getAnswer = () => {
    let l = Math.max(...num); // 최소 가능한 limit 값
    let r = 11111 * n; // 최대 가능한 limit 값
    let ans = r;

    while (l <= r) {
      const m = Math.floor((l + r) / 2); // 중간값

      // 현재 limit으로 k-1개 이하의 그룹으로 나눌 수 있는지 확인
      if (go(m).cnt <= k - 1) {
        r = m - 1;
        ans = Math.min(ans, m);
      } else {
        l = m + 1;
      }
    }
    return ans;
  };

  return getAnswer();
}
