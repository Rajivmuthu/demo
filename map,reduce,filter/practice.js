//Write a function that takes an array of numbers and returns a new array with each number squared. 
//Use the Mapobject to accomplish this.
a=[1,2,3,4,5]
console.log(a.map(e=>e*e))


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


//Write a function that takes an array of words and returns an object where the keys are the words and the values are the number of times each word appears in the array.
// Use the Mapobject to accomplish this.
list=['rk','rajiv','vk','rajiv']
obj={}
list.map((e)=>
{
if(e in obj)
return obj[e]+=1
else
return obj[e]=1
});


//Write a function that takes a string and returns an object where the keys are the characters in the string and the values are the number of times each character appears in the string. 
//Use the Mapobject to accomplish this.
strings='welcome home'
splits=strings.split('')

obj={}
splits.map((e)=>
{
if(e in obj)
return obj[e]+=1
else
return obj[e]=1
});
console.log(obj)


