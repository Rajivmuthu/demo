//Write a function that takes an array of objects with a nameproperty and returns a new array of strings with the name of each object capitalized.
// Use the Mapobject to accomplish this.
function funame(arr1){
    return arr1.map(o=>o.name.toUpperCase());
}
let names=[{name:'rajiv'},
           {name:'vk'},
           {name:'nk'}];
let answers=funame(names)
console.log(answers)