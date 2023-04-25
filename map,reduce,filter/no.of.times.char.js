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