

// Cursos completos a traves de Ajax

/* const courses = document.querySelector("#courses")

const coursesComplet =  () => {

    fetch('../cursos.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            listaDeCursos(data)
        })

    const listaDeCursos = datos => {

        courses.innerHTML = ""

        for (let i of datos) {

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
    
}

window.addEventListener('load', coursesComplet) */

const func = () =>{
    fetch('../cursos.json')
        .then(res => res.json())
        .then(data => console.log(data) )
}
window.addEventListener('load', func);
