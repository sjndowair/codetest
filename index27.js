//숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.
//예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.


function solution(t, p) {
    let count = 0;
    // 숫자가 작거나 같을경우의 갯수 카운트
    
    const arrLength = p.length
    // p의 자리수 구하기
    
    const comparisonTarget = t.split('').map((str) => Number(str))
    
    const totalNum = p.split('').map((str) => Number(str)).reduce((acc, dec) => {
        return acc + dec
    }, 0)
    //reduce 함수를 통한 p의 총합 값 구하기 
    
    for(let i = 0; i < t.length ; i++){
        let nowCounting = comparisonTarget.slice(0, arrLength).reduce((acc, dec) => {
            return acc + dec
        }, 0)
        
        if(totalNum >= nowCounting){
            count++
        }
        comparisonTarget.splice(0, 1)
        
    }
    //slice로 자른값을 totalNum과 비교 후 splice로 자르고 계속해서 arrLength의 값 만큼 잘라준다
    
    return count
}


// 2번째 풀이

function solution(t, p) {
    
    let count = 0;
    
    const isTArr = t.split('')
    const isPNumber = Number(p)
    
    const isPLength = p.length
    const isTLength = t.length
    
    const isMaximumLoof = isTLength - isPLength + 1
    
    for(let i = 0; i < isMaximumLoof; i++){
        const isComparisonTarget = isTArr.slice(0, isPLength).join('')
        
        if(isPNumber >= Number(isComparisonTarget)){
            count++
        }
        isTArr.splice(0, 1)
    }
    return count 
}