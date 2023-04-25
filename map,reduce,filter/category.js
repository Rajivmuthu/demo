students=[{name:'kishore',age:22,gender:'Male'},
          {name:'ragul',age:23,gender:'Male'},
          {name:'priya',age:21,gender:'Female'},
          {name:'haritha',age:23,gender:'Female'},
          {name:'kishore',age:22,gender:'Male'}]

obj={};
students.map((e)=>{

if(!(e.gender in obj)){

 obj[e.gender]=[]

}

obj[e.gender].push(e)

})

console.log(obj);
