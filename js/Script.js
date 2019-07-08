const odd = document.querySelectorAll('.odd')
const even = document.querySelectorAll('.even')

const foo = () => {
    for (let i = 0; i < odd.length; i++) {
        odd[i].style.left = '90%'
        odd[i].style.transition = '5s'
    }
    
    for (let j = 0; j < even.length; j++) {
        even[j].style.right = '90%'
        even[j].style.transition = '5s'
    }
}