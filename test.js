let obj = {
    a: 'test1',
    b: 'test2',
    c: {
        d: 'test3',
        e: 'test4',
        f: {
            g: 'test5',
            h: {
                i: 'test6',
                j: {
                    k: 'test7'
                }
            }
        }
    }
}

// {
//     a: 'test1',
//     b: 'test2',
//     c.d: 'test3',
//     c.e: 'test4',
//     c.f.g: 'test5',
//     c.f.h: 'test6'
// }

const flattenObj = (obj) => {

    let ansObj = new Object();

    for (let key in obj)
    {   
        if (typeof (obj[key]) === 'object')
        {
            const currKey = key;
            let flattenedObj = flattenObj(obj[key]);
            const keys = Object.keys(flattenedObj);

            for (let idx=0; idx<keys.length; idx++)
            {
                const newKey = currKey + "." + keys[idx];
                ansObj[newKey] = flattenedObj[keys[idx]];
            }
        }
        else ansObj[key] = obj[key];
    } 
    return ansObj;
}

let ansObj = flattenObj(obj);
console.log(ansObj);



// "Input : 
// ['c', 'a' , 'e', 'f', 'b', ' ', ' ', ' ']

// Output:
// ['c', 'a' , 'a', 'e', 'f', ' b', 'b', 'b']

// Whenever you encounter 'a' insert one more 'a',
// Whenever you encounter 'b' insert two more 'b'

// Length of array remains constant all the time. You can move around elements in the array. Empty spaces will be always at end of array and will be replaced by newly inserted elements

// let input = ['c', 'a' , 'e', 'f', 'b', ' ', ' ', ' ']

// const solve = (input) => {
//     let result = new Array();
//     for (let j=0; j<input.length; j++)
//     {
//         let currChar = input[j];
//         if (currChar === ' ')
//         {
//             break;
//         }
//         if (currChar === 'a')
//         {
//             result.push(currChar);
//             result.push(currChar);
//         }
//         else if (currChar === 'b')
//         {
//             result.push(currChar);
//             result.push(currChar);
//             result.push(currChar);
//         }
//         else result.push(currChar);
//     }
//     return result;
// }

// let ansArr = solve(input);
// console.log(ansArr);


// ['c', 'a' , 'a', 'e', 'b', 'f', ' ', ' ']

// lastIdx = 5;
// arr[lastIdx + 1] = 'e';
