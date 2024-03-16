let btn=    document.querySelector('button')
     let inp=document.querySelector('input')
     let div=document.querySelector('div')


     btn.addEventListener('click',()=>{
      let city=inp.value
         //  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
         let key= '9f6290d6cda9a36a63755fadee71f83d'
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).
       then((data)=>{
        return data.json()

       }).then((res)=>{
        // console.log(res);
        add(res)

       })


     })
     function add(data){
      console.log(data,"data");
       let h1=   document.createElement('h1')
       let p=   document.createElement('p')
       let p1=   document.createElement('p')
       h1.innerText=data.name
       p.innerText=data.main.temp_max
       p1.innerText=data.main.temp_min

       div.append(h1,p, p1)


     }