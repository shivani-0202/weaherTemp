let btn = document.querySelector('button')
let input = document.querySelector('input')
let rmv = document.querySelector('#remove')

if(localStorage.getItem('data')){
    input.value =localStorage.getItem('data')
}

btn.addEventListener('click', ()=>{

    // console.log("hello")
    let text = input.value

    localStorage.setItem('data', text)
})




rmv.addEventListener('click', ()=>{

if(localStorage.getItem('data')){
    localStorage.clear('data')
    input.value = ''
}

else
alert("there is nothing")


})