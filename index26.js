function solution(n, m, section) {
    let count = 0;
    for(const sec of section){
      console.log(sec) 
    }
    
}

solution(8, 4, [2, 3, 6]);

function solution(n, m, section) {
    let done = 0;
        let count = 0;
        for (const num of section) {
            if (num > done) {
                done = num + m - 1;
                count++;
            }
            if (done > n)
                break;
        }
        return count;
}

//2 일떄 3
//3일떄 