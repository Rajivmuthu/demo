strings=['rk','raju','rk','vk']
obj={}

strings.map((e)=>
{
if(e in obj)
return obj[e]+=1
else
return obj[e]=1
});
console.log(obj)
