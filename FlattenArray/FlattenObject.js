const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: 4
        }
    },
    g: 5
};
const obj2 = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
                g: 4,
                h: {
                    i: 5,
                    j: {
                        k: 6,
                        l: {
                            m: 7,
                            n: {
                                o: 8,
                                p: 9
                            }
                        }
                    }
                }
            }
        }
    },
    q: {
        r: 10,
        s: {
            t: 11,
            u: {
                v: 12,
                w: {
                    x: 13,
                    y: 14,
                    z: {
                        aa: 15,
                        bb: {
                            cc: 16,
                            dd: {
                                ff: 17,
                                gg: {
                                    hh: 18
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    ee: 18
};


const flattenObject = (obj) => {
    let result = {};
    for (let key in  obj){
        if(obj.hasOwnProperty(key)){
            if(typeof(obj[key]) === 'object'){
                result = Object.assign({}, result, flattenObject(obj[key]));
            }
            else result[key] = obj[key];
        }
    }
    return result;
}
// console.log(flattenObject(obj));
console.log(flattenObject(obj2));