var countdown=document.querySelector('h1')
let num=10
setTimeout(()=>{
    countdown.innerText=num
    setTimeout(()=>{
        countdown.innerText=--num
      setTimeout(()=>{
        countdown.innerText=--num
        setTimeout(()=>{
            countdown.innerText=--num
            setTimeout(()=>{
                countdown.innerText=--num
                setTimeout(()=>{
                    countdown.innerText=--num
                    setTimeout(()=>{
                        countdown.innerText=--num
                        setTimeout(()=>{
                            countdown.innerText=--num
                            setTimeout(()=>{
                                countdown.innerText=--num
                                setTimeout(()=>{
                                    countdown.innerText=--num
                                    setTimeout(()=>{
                                        countdown.innerText="Happy Independence Day"
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
},1000)