names=[{name:'Rajiv',dob:'12/02/2001'},
        {name:'aji',dob:'02/07/2000'}]
obj={}
names.map((e)=>
    {
 let current=new Date (e.dob).getFullYear()

    if(!(current in obj)){
        obj[current]=[]
    }
        obj[current].push(e)
    })

console.log(obj);
