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