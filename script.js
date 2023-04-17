const draggables = document.querySelectorAll(".draggable")
const program = document.querySelectorAll(".program")

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        console.log('drag start')
    })
})