// recursion : when function call itself 
// if function called it self then there must be an end point

let counter=1;
function demo(number){
    if(counter>number){
        return;
    }
    console.log("Hello"+counter)
    counter++;
    demo(number);
}
demo(3);