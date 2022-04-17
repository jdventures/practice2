
const submit = document.querySelector('.submit');
const container = document.querySelector('.container');
const thankYou = document.querySelector('.thank-you');
const btn = document.querySelectorAll('#btn');

console.log(btn[0]);
btn.forEach((bn) => {
    bn.addEventListener('click', () => {
        removeActiveClasses();
        bn.classList.add('btn');
    })
})
function removeActiveClasses() {
    btn.forEach(bn => {
        bn.classList.remove('btn');
    })
}


submit.addEventListener('click', () => {
    container.style.display = 'none';
    thankYou.style.display = 'block';
    console.log('dave i love you');

})

