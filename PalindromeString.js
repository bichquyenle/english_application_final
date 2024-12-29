const arr = "abcba";
function checkIsPalindrome(arr){
    let newArr = "";
    const arrLength = arr.toString().length;
    if(arrLength<0 || arrLength<=1){
        console.log("Please enter a string more than one character!")
    }
    
    else{   
        for (let i = arrLength-1; i>=0; i--){
            newArr += arr.toString()[i];
        }
        
        if(arr == newArr){
            console.log("This is a palindrome, "+ "odd string:"+arr + " new string:"+newArr);
        }
        else{
            console.log("This is not a palindrome, "+"odd string:"+arr + " new string:"+newArr);
        }
    }
}
checkIsPalindrome(arr);