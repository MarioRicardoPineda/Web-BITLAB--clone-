

let intros = [
    {
        title: "Introducción a la programación",
        teacher: "Roxana Gonzáles",
        description: "Con este curso lograrás comprender los conceptos básicos de programación. Podrás descubrir si la programación es el área en la cual deseas aprender y desarrollarte. Aprenderás a usar las herramientas en internet para mejorar y potenciar su conocimiento aprendido en clase.",
        image: require("../assets/img/intro-progra.jpg"),
        time: "10 Horas"
    },
    {
        title: "Introducción a la estrategia digital",
        teacher: "Fabiola León",
        description: "Conoce lo básico del mundo de la estrategia digital: medios digitales de tendencia, lo más esencial de un plan de pauta, prácticas, hacks y herramientas. Todo lo que necesitas para iniciar y optimizar tu estrategia digital.",
        image: require("../assets/img/intro-strategy.jpg"),
        time: "4 Horas"
    },
    {
        title: "Introducción al emprendimiento",
        teacher: "Carlos Moreno",
        description: "En este curso sabrás los pasos necesarios para la ejecución de tu proyecto emprendedor y conocerás las organizaciones del ecosistema a los cuales puedes recurrir. Aprenderás de manera práctica a validar tus ideas y sobre casos de Emprendimientos exitosos en Latinoamérica.",
        image: require("../assets/img/intro-emprende.jpg"),
        time: "4 Horas"
    },
    {
        title: "Introducción al diseño UX/UI",
        teacher: "Luis Pinto",
        description: "En este curso sabrás la diferencia entre el diseño UX / UI y conocerás los principios básicos para aplicar procesos que ayuden generar prototipos de productos.",
        image: require("../assets/img/intro-emprende.jpg"),
        time: "4 Horas"
    }
]

const cursos = document.querySelector("#cursos")

const listCursos = () => {

    cursos.innerHTML = ""

    for (let i of intros) {

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



// Cursos completos a traves de Ajax

const courses = document.querySelector("#courses")
let listaCursosCompleta = [
    {
        title: "Frontend Developer",
        teacher: "Roxana González",
        description: "Con este curso podrás desarrollar sitios web del mundo real usando las últimas tecnologías implementadas en la industria. Además aprenderás a desarrollar plataformas web con las mejores prácticas en responsive design. También tendrás los conceptos básicos para desarrollar aplicativos usando React.js",
        image: require("../assets/img/intro-progra.jpg"),
        time: "108 Horas"
    },
    {
        title: "backend Developer",
        teacher: "Roxana González",
        description: "Con este curso podrás desarrollar backends del mundo real usando las últimas tecnologías usadas en la industria. Lograrás realizar backends comprendiendo el MVC, además, tendrás los conceptos básicos para desarrollar aplicativos usando PHP con Laravel y Ruby On Rails.",
        image: require("../assets/img/backend.jpg"),
        time: "108 Horas"
    },
    {
        title: "Emprendimiento",
        teacher: "Carlos Moreno",
        description: "Aprenderás los conceptos básicos del emprendimiento, herramientas de validación, las diferentes etapas y lográs tener las bases para la organización y gestión de tu equipo de trabajo. Además conocerás los primeros pasos para dar a conocer tu emprendimiento y sabrás estructurar un Pitch.",
        image: require("../assets/img/emprendimiento.jpg"),
        time: "48 Horas"
    },
    {
        title: "Estrategía Digital Elevado",
        teacher: "Fabiola León",
        description: "Con este curso comprenderás los beneficios de la metodología inbound marketing y sabrás cómo aplicarla. Entenderás el entorno digital y las posibilidades de las marcas con el uso de la tecnología. Además lograrás planificar y ejecutar una estrategia de contenido de forma exitosa. Conocerás cómo funciona la pauta de medios digitales y cómo crear y ejecutar un plan de pauta efectivo.",
        image: require("../assets/img/estrategia-digital-elevada.jpg"),
        time: "48 Horas"
    },
    {
        title: "Introducción a la programación",
        teacher: "Roxana Gonzáles",
        description: "Con este curso lograrás comprender los conceptos básicos de programación. Podrás descubrir si la programación es el área en la cual deseas aprender y desarrollarte. Aprenderás a usar las herramientas en internet para mejorar y potenciar su conocimiento aprendido en clase.",
        image: require("../assets/img/intro-progra.jpg"),
        time: "10 Horas"
    },
    {
        title: "Introducción a la estrategia digital",
        teacher: "Fabiola León",
        description: "Conoce lo básico del mundo de la estrategia digital: medios digitales de tendencia, lo más esencial de un plan de pauta, prácticas, hacks y herramientas. Todo lo que necesitas para iniciar y optimizar tu estrategia digital.",
        image: require("../assets/img/intro-strategy.jpg"),
        time: "4 Horas"
    },
    {
        title: "Introducción al emprendimiento",
        teacher: "Carlos Moreno",
        description: "En este curso sabrás los pasos necesarios para la ejecución de tu proyecto emprendedor y conocerás las organizaciones del ecosistema a los cuales puedes recurrir. Aprenderás de manera práctica a validar tus ideas y sobre casos de Emprendimientos exitosos en Latinoamérica.",
        image: require("../assets/img/intro-emprende.jpg"),
        time: "4 Horas"
    },
    {
        title: "Introducción al diseño UX/UI",
        teacher: "Luis Pinto",
        description: "En este curso sabrás la diferencia entre el diseño UX / UI y conocerás los principios básicos para aplicar procesos que ayuden generar prototipos de productos.",
        image: require("../assets/img/intro-emprende.jpg"),
        time: "4 Horas"
    }
]

const coursesComplet = () => {

    courses.innerHTML = ""

    for (let i of listaCursosCompleta) {

        courses.innerHTML +=
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

window.addEventListener('load', coursesComplet)