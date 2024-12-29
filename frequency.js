//cách 1
const nhat = [1, 1, 2, 1, 2, 2, 3, 2, 2, 4]; 
let arrLength = nhat.length;
let key = null;
let value = null;

for (let i = 0; i<arrLength; i++){
    let count = 0;
    for (let j = 0; j<arrLength; j++){
        if(nhat[i]==nhat[j]){
            count += 1;
        }
    }
    if (count > key){
        key = count;
        value = nhat[i];
    }
}

console.log(`Số được lặp lại nhiều nhất là số: ${value}, lặp lại ${key} lần`)

//cách 2
const nhat1 = [1, 1, 2, 1, 2, 2, 3, 2, 2, 4]; 
let a = new Map();
let maxCount = 0;
let finalValue = 0;

for(let num of nhat1){
    a.set(num, (a.get(num) || 0) + 1);
    console.log(a)
    if(a.get(num)>maxCount){
        maxCount = a.get(num);
        finalValue = num;
    }
}
console.log(`Số lặp lại nhiều nhất là: ${finalValue}, lặp lại ${maxCount} lần`)

