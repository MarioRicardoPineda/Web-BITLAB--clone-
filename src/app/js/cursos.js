


let intros = [
    {
        "title": "Introducción a la programación",
        "teacher": "Roxana Gonzáles",
        "description": "Con este curso lograrás comprender los conceptos básicos de programación. Podrás descubrir si la programación es el área en la cual deseas aprender y desarrollarte. Aprenderás a usar las herramientas en internet para mejorar y potenciar su conocimiento aprendido en clase.",
        "image": "./assets/img/intro-progra.jpg",
        "time": "10 Horas"
    },
    {
        "title": "Introducción a la estrategia digital",
        "teacher": "Fabiola León",
        "description": "Conoce lo básico del mundo de la estrategia digital: medios digitales de tendencia, lo más esencial de un plan de pauta, prácticas, hacks y herramientas. Todo lo que necesitas para iniciar y optimizar tu estrategia digital.",
        "image": "./assets/img/intro-strategy.jpg",
        "time": "4 Horas"
    },
    {
        "title": "Introducción al emprendimiento",
        "teacher": "Carlos Moreno",
        "description": "En este curso sabrás los pasos necesarios para la ejecución de tu proyecto emprendedor y conocerás las organizaciones del ecosistema a los cuales puedes recurrir. Aprenderás de manera práctica a validar tus ideas y sobre casos de Emprendimientos exitosos en Latinoamérica.",
        "image": "./assets/img/intro-emprende.jpg",
        "time": "4 Horas"
    },
    {
        "title": "Introducción al diseño UX/UI",
        "teacher": "Luis Pinto",
        "description": "En este curso sabrás la diferencia entre el diseño UX / UI y conocerás los principios básicos para aplicar procesos que ayuden generar prototipos de productos.",
        "image": "./assets/img/intro-emprende.jpg",
        "time": "4 Horas"
    }
]

const cursos = document.querySelector("#cursos")

const listCursos = () =>{

    cursos.innerHTML = ""

    for(let i of intros){

        cursos.innerHTML += 
        `
        <div class="card-curso">
            <div class="img">
                <img src="${i.image}" alt="">
            </div>

            <article class="txt-curso">
                <h3 class="title-curso">${i.title}</h3>
                <strong>${i.teacher}</strong>
                <p>${i.description}</p>
                <hr>
                <div class="time">
                    <b>${i.time}</b>
                    <a href="#s" class="btn">ver más</a>
                </div>
            </article>

        </div>
        
        `
    }
}

window.addEventListener('load', listCursos)