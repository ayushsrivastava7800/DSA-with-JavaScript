// checkng some zero - problrm 1
// [-5,-4,-3,-2,-1,0,1,2,3,4,5] -> input

function CheckingSomeZero(array){
 for(let number of array){
    for(let j=1; j<array.length; j++){
        if(number+array[j] === 0){
            return[number,array[j]];
        }
    }
 }
}
const result = CheckingSomeZero([-5,-4,-3,-2,-1,0,1,2,3,4]);
console.log(result);

// o(n^2) quadatic time complextity