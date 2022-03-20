const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const form = document.querySelector(".contact-form");

form.addEventListener("submit", handlesubmit)

async function handlesubmit(evento) {
    evento.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            "Accept": 'application/json'
        }
    })
    if (response.ok) {
        this.reset //Limpiamos el formulario de contenido
        alert('Gracias por contactame, te escribiré pronto :) ')
    }

}

function PageTransitions() {
    //Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sctions Active 
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            //resmove selected from the other btns
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })


}

PageTransitions();