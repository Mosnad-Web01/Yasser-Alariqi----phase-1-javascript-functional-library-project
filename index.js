function myEach(collection, callback) {
    if (!Array.isArray(collection)) {
        for (let key in collection) {
            callback(collection[key])
        }
    }
    else {
        collection.map((item) => {
            callback(item)
        })

    }
    return collection
}

function alertNumbers(value) {
    alert(value)
}

// console.log(myEach([1, 2, 3, 4], alertNumbers));
// console.log(myEach({one: 1, two: 2, three: 3, four: 4}, alertNumbers));



function myMap(collection, callback) {
    let myNewArray = []
    if (!Array.isArray(collection)) {
        for (let key in collection) {
            myNewArray.push(callback(collection[key]))
        }
    }
    else {
        collection.map((item) => {
            myNewArray.push(callback(item))
        })
    }
    return myNewArray
}

let doubled = (number) => {
    return number * 2
}

// console.log(myMap([1, 2, 3, 4], doubled));

let myReduce = (collection, callback, acc) => {
    let hasInitialValue = acc !== undefined;

    if (!Array.isArray(collection)) {
        for (let key in collection) {
            if (!hasInitialValue) {
                acc = collection[key];
                hasInitialValue = true;
            } else {
                acc = callback(acc, collection[key]);
            }
        }
    } else {
        for (let item of collection) {
            if (!hasInitialValue) {
                acc = item;
                hasInitialValue = true;
            } else {
                acc = callback(acc, item);
            }
        }
    }

    return acc;
}

let add = (x, y) => {
    return x + y;
}


// console.log(myReduce([1, 2, 3, 4], add, 0))

let myFind = (collection, predicate) => {
    if (!Array.isArray(collection)) {
        for (let key in collection) {
            if (predicate(collection[key])) {
                return collection[key];
            }
        }
    } else {
        for (let item of collection) {
            if (predicate(item)) {
                return item;
            }
        }
    }
}

let isEven = (num) => {
    return num % 2 === 0;
}


let myFilter = (collection, predicate) => {
    let predicateArray = [];
    if (!Array.isArray(collection)) {
        for (let key in collection) {
            if (predicate(collection[key])) {
                predicateArray.push(collection[key])
            }
        }
    } else {
        for (let item of collection) {
            if (predicate(item)) {
                predicateArray.push(item)
            }
        }

    }
    return predicateArray
}

let Odd = (num) => {
    return num % 2 !== 0;
}



let mySize = (collection) => {
    if (!Array.isArray(collection)) {
        return Object.keys(collection).length
    } else {
        return collection.length
    }
}


let myFirst = (array, n) => {
    if (!n) {
        return array[0]
    } else {
        return array.slice(0, n)
    }
}


let myLast = (array, n) => {
    if (!n) {
        return array[array.length - 1]
    } else {
        return array.slice(array.length - n)
    }
}

let myKeys = (obj) => {
    let newArray = []
    for (let key in obj) {
        newArray.push(key)
    }
    return newArray
}


let myValues = (obj) => {
    let newArray = [];
    for (let key in obj) {
        newArray.push(obj[key]);
    }
    return newArray;
}
