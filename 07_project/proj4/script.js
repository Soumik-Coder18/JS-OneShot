const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}

document.querySelector('#start').addEventListener('click',function(){
    const bgChange = setInterval(changeBg,1000)
    function changeBg() {
        document.body.style.backgroundColor= randomColor();
    }
    document.querySelector('#stop').addEventListener('click',function(){
        clearInterval(bgChange)
        document.body.style.backgroundColor='#212121'
    })
})
