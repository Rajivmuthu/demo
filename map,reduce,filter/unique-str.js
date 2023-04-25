strings=['rk','raju','rk','vk']
str=[]
strings.map((e)=>
    {
    if(!str.includes(e))
            return str.push(e)
    });
            console.log(str)