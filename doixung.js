const arr = 123212;

function checkIsPalindrome(arr){
    if(typeof(arr)!=Number && arr<0){
        console.log("Please enter a positive number!")
    }
    else{
        let newArr = "";
        const arrLength = arr.toString().length;
    for (let i = arrLength-1; i>=0; i--){
        newArr += arr.toString()[i];
    }
    
    if(arr == newArr){
        console.log("This is a palindrome");
    }
    else{
        console.log("This is not a palindrome");
    }
    }
}
checkIsPalindrome(arr);