let n = 5;
let arr = "0";
function Fibonaci(number){
    if (n===0 || n===1){
        console.log("Please enter a number greater than 1!")
    }
    else{
        for (let i = 0; i<number; i++){
            if(n=2){
                n = n-1
                arr +=n;
                console.log(arr);
            }
            else{
                n -=1
                arr +=n;
                console.log(arr);
            }
        }
    }
}
Fibonaci(n);