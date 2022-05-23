const colors = ['red', 'blue', 'green', 'orange', 'purple', 'pink'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}