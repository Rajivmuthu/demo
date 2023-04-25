names=[{name:'Rajiv',dob:new Date('12/01/2001')},
        {name:'aji',dob:new Date('02/07/2000')}]
obj={}
names.map((e)=>
    {
 let current=e.dob.getFullYear()

    if(!(current in obj)){
        obj[current]=[]
    }
        obj[current].push(e)
    })

console.log(obj);
