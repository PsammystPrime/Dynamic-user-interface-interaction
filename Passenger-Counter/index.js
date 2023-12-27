const num = document.querySelector('.num');
const add = document.querySelector('[data-add]');
const clear = document.querySelector('[data-clear]');

let count = 0 

 add.addEventListener('click', ()=>{
    num.textContent = ''
    count= count + 1
    num.textContent = count

 })
 clear.addEventListener('click', ()=>{
    count= 0
    num.textContent = count
 })