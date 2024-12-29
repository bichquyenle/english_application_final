// const arr = [1,2,3,3,3,1,2,4,5,6,3,5,7];
// const arrLength = arr.length;
// let newArr = [];
// for (let i = 0; i < arrLength; i++) {
//     let isDuplicate = false; 
//     for (let j = 0; j < newArr.length; j++) {
//         if (arr[i] === newArr[j]) {
//             isDuplicate = true; 
//             break;
//         }
//     }
//     if (!isDuplicate) {
//         newArr.push(arr[i]); 
//     }
// }
// console.log(newArr);

// let filteredArr = arr.filter((num) => num = num !== num)
// console.log(arr);

const numbers = [1, 2, 2, 3, 4, 4];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4]
