const people = [
    { id: "1", name: "Leigh", age: 35 },
    { id: "2", name: "Jenny", age: 30 },
    { id: "3", name: "Heatear", age: 17 },
];

//count people
function count(arr) {
    let peopleCount = arr.reduce((acum, item) => {
        return ++acum;
    }, 0);

    return peopleCount;
}

console.log(count(people));

//sum ages
function sumOfAges(arr) {
    let sum = arr.reduce((acum, item) => {
        return acum += item.age;
    }, 0);
    return sum;
}

console.log(sumOfAges(people));

//array of names 
function arrayOfNames(arr) {
    let names = arr.reduce((acum, item) => {
        acum.push(item.name);
        return acum;
    }, []);
    return names;
}
console.log(arrayOfNames(people));

//max ages
function maxEges(arr) {
    let max = arr.reduce((max, item) => {
        return item.age > max ? item.age : max;
    }, 0);
    return max;
}
console.log(maxEges(people));


//find by name
function findByName(arr, name) {
    return arr.some(item => {
        return item.name === name ? true : false;
    });
}
console.log(findByName(people, "Heatear"));
console.log(findByName(people, "Pepe"));

//all over 18
function findAllOver18(arr){
    let allOver = arr.filter(item =>{
        return item.age > 18 ? true:false;
    });
    return allOver;
}
console.log(findAllOver18(people));

