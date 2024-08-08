const arr = [1, 2, -1, [6, 7, [3, 4, [-4, 5]]], 8, [9, 0, -2]];

const flattenArray = (arr) => {
    let temp = [];
    for (let item of arr){
        if (Array.isArray(item)){
            temp = temp.concat(flattenArray(item));
        }
        else temp.push(item);
    }
    return temp;
}

console.log(flattenArray(arr));
