strings=['rajiv','raju','aji']
// obj={}
// strings.map((e)=>
// {
// splits=e.split('')
// sorts=splits.sort()
// anagram=sorts.join('')
// obj[anagram]=e
// })
// console.log(obj);
// strings=['roshin','selva']

obj={}

strings.map((e)=>{

stringAsChar=e.split('')

 charAsSort=stringAsChar.sort()

 alphabaticString= charAsSort.join('')

 obj[alphabaticString]=e

})

console.log(obj);