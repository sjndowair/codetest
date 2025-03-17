const solution = (a, b) => {
  const isSort = a.sort((a, b) => a - b);
  const isSort2 = b.sort((a, b) => b-a);
  // console.log(isSort, isSort2)
    let num = 0;

  for(let i = 0; i < isSort.length; i++){
        num += isSort[i] * isSort2[i]
    }
return num
};



console.log(solution([2,5,7],[2,5,7]))
