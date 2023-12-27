const buttons = document.querySelectorAll('button')
const carousel = document.querySelector('.carousel')

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const offset = button.dataset.type === 'next' ? 1 : -1
        const slides = button.closest('[data-carousel]').querySelector('[data-slides]')
         const active =slides.querySelector('[data-active]')
         let newIndex =  [...slides.children].indexOf(active) + offset

         slides.children[newIndex].dataset.active = true
         delete active.dataset.active
        console.log('hey')
    });
} 
)
