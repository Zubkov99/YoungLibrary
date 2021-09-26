window.addEventListener('DOMContentLoaded', () => {

const spanItems = document.querySelectorAll('.main__conteiners-item--text span');
const conteiner = document.querySelectorAll('.main__conteiners-item');

spanItems.forEach(item => {
    item.addEventListener('click', (event) => {
        
        const target = event.target;
        const previousText = target.previousSibling.previousSibling;
        previousText.classList.toggle('hide');
        item.innerHTML = 'Свернуть ↑'

        if(!previousText.classList.contains('hide')) {
            item.innerHTML = 'Свернуть ↑'
        } else {
        item.innerHTML = 'Развернуть ↓'
        }
    })
});

if(window.innerWidth > 2500) {
console.log('Ничего у тебя огромный экран');
}


const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
let titleElement = document.querySelector('#title1');
let titleMeasurements = titleElement.getBoundingClientRect();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

const numberOfParticles = 550;

let title = {
    x: titleMeasurements.left,
    y: titleMeasurements.top,
    width: titleMeasurements.width,
    height: 10,
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.weight = Math.random() * 2 + 1;
        this.size = Math.random() * 13 + 2;
        this.directionX = -2;
    }
    update() {

        if(this.y > canvas.height) {
            this.y = 0 - this.size;
            this.weight = Math.random() * 1 + 1;
            this.x = Math.random() * canvas.width * 1.3;
        }

        this.weight += 0.02;
        this.y += this.weight;
        this.x += this.directionX;

    }

    draw() {
        // ctx.fillStyle = '#007AFF';
        // ctx.fillStyle = '#0007B7';
        ctx.fillStyle = '#0718DE';


        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill()
    }
}

function init() {
    particlesArray = [];
    for(let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random()  * canvas.height;
        particlesArray.push(new Particle(x, y)); 
    }
 
}

init();

function animate() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.01)';
    ctx.fillRect(0,0, canvas.width, canvas.height);

    for(let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    
    requestAnimationFrame(animate)
}
animate();

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    titleMeasurements = titleElement.getBoundingClientRect()

    title = {
        x: titleMeasurements.left,
        y: titleMeasurements.top,
        width: titleMeasurements.width,
        height: 10,
    }

    init();
})
})