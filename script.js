const buttons = document.querySelectorAll(".ripple")

buttons.forEach( button => {
    button.addEventListener('click', function(e){

        const x = e.clientX
        const y = e.clientY
        // console.log(e)
        const btnTop = e.target.offsetTop
        const btnLeft = e.target.offsetLeft

        const xInside = x-btnLeft
        const yInside = y-btnTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setInterval(()=>circle.remove(), 500)

    })
})