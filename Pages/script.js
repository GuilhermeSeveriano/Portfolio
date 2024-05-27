


const myObserver = new IntersectionObserver((ative)=>{
    ative.forEach((ativ) =>{
        if(ativ.isIntersecting){
            ativ.target.classList.add('show')
        }else{
            ativ.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach( (el)=> myObserver.observe(el))