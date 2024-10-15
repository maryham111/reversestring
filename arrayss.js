function filterArray(arr, condition) {
    return arr.filter(condition);
}
const filtered = filterArray(numbers, num => num > 3);
console.log(filtered); 
