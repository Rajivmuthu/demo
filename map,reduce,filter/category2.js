details=[{name:'Raju',age:21},{name:'rk',age:20},{name:'sk',age:21}]
obj={}

details.map((e)=>
    {
        if(!(e.age in obj))
        {
            obj[e.age]=[]
        }
    
            obj[e.age].push(e)
    })
    
console.log(obj)