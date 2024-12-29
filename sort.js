const arr = [2,4,5,2,4,1,3,,5,7];
let newArr = arr.sort((a,b) => a-b);
console.log("Mảng sắp xếp theo thứ tự giảm dần là: ",newArr);
let newArr1 = arr.sort((a,b) => b-a);
console.log("Mảng sắp xếp theo thứ tự tăng dần là: ",newArr1);
