//[1,2,3,4,3,5,4,6,7,8] => total elemens = 10
// count largest sum of consecutive digitds

function FindLargest(array,num){
    if(num>array){
        throw new error("num is not greater than array");
    }else{
            let max = 0;
            for(let i=0;i<array.length - num +1;i++){
                let temp=0;
                for(let j=0;j<num;j++){
                    console.log("i"+i+"j",j)
                    temp+=array[i+j];
                }
                if(temp>max){
                    max=temp;
                }
            }
            return max;
        }
    }
    const result=FindLargest([1,2,3,4,3,5,4,6,7,8],4);
    console.log(result);
