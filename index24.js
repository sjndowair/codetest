
const arr = [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]
const arr2 = [["a", "b"], ["c", "d"]]

const name2 = ['a', 'b', 'c', 'd', 'e'];

const yearning = [1, 2, 3, 4, 5];

const aaaa ="i want to dring water"
// console.log(aaaa.charCodeAt(2))

    let score = {
        a: 1
    }

    // console.log(name2.join(''))

function solution(cards1, cards2, goal) {
    const arr = []
    const firstString = [...cards1]
    const secondString = [...cards2]
    
    for(let i = 0; i < goal.length; i++ ){
        if(goal[i] === firstString[i]) {
            arr.push(firstString[i])
        }else if(goal[i] === secondString[i]){
            arr.push(secondString[i])
        }else{
            return "No"
        }
     
    }
    const a = arr.join('')
    const b = goal.join('')
    
    
   if(a == b){
       return "Yes"
   }
    
}