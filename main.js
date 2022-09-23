// let subject = document.createAttribute('div')
let title = document.createElement('p');
// subject.appendChild(title);
title.innerText = "vibe with ann";
title.classList.add('style')
document.body.appendChild(title);

let par = document.querySelector('p');
par.addEventListener("click", randum);

function randum() {
    let rand = [];
    for (let i = 0; i < 5; i++){
        rand.push(Math.floor(Math.random(i)*10))
    }
    par.textContent =`${rand}`
    }