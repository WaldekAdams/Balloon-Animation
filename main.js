document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.bg-anim');

    document.addEventListener('mousemove', function (e) {
        const {
            clientX,
            clientY
        } = e;
        console.log(clientX, clientY)
    })
})