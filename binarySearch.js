// divide and conquerer technique
//find the inex of given no in a sorted array 7
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] 


function searchalgo(array,number){
    let min =0;
    let max=array.length-1;
    while(min<=max){
        let midindex=Math.floor((min+max)/2);
        if (array[midindex] < number){
            min =midindex+1;
        }else if (array[midindex]>number){
            max=midindex-1;
        }else{
            return midindex;
        }
    }
    return -1;
}
const result = searchalgo([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],7);
console.log(result);