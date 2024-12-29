arr = [1,3,4,5,2,4,2,1,35,7];
let max = 0;
for (let i of arr){
    if (i > max){
        max = i;
    }
}
console.log("số lớn nhất mảng là: ", max);