function cargarModuloNosotros(){
    let contenedorPrincipal = document.getElementById("panelPrincipal");

    //peticion FETCH
    fetch("../html/nosotros.html").then(
        function(data){
            return data.text();
        }
    ).then(
        function(html){
            console.log(html);
            contenedorPrincipal.innerHTML = html;
        }
    )
    //contenedorPrincipal.innerHTML = 

}


function cargarModuloContacto(){
    let contenedorPrincipal = document.getElementById("panelPrincipal");

    //peticion FETCH
    fetch("../html/contacto.html").then(
        function(data){
            return data.text();
        }
    ).then(
        function(html){
            console.log(html);
            contenedorPrincipal.innerHTML = html;
        }
    )
    //contenedorPrincipal.innerHTML = 

}

function cargarModuloServicios(){
    let contenedorPrincipal = document.getElementById("panelPrincipal");

    //peticion FETCH
    fetch("../html/servicios.html").then(
        function(data){
            return data.text();
        }
    ).then(
        function(html){
            console.log(html);
            contenedorPrincipal.innerHTML = html;
        }
    )
    //contenedorPrincipal.innerHTML = 

}

function cargarModuloPreguntasFrecuentes(){
    let contenedorPrincipal = document.getElementById("panelPrincipal");

    //peticion FETCH
    fetch("../html/preguntasFrecuentes.html").then(
        function(data){
            return data.text();
        }
    ).then(
        function(html){
            console.log(html);
            contenedorPrincipal.innerHTML = html;
        }
    )
    //contenedorPrincipal.innerHTML = 

}

function cargarModuloAgendarCita(){
    let contenedorPrincipal = document.getElementById("panelPrincipal");

    //peticion FETCH
    fetch("../html/agendarCita.html").then(
        function(data){
            return data.text();
        }
    ).then(
        function(html){
            console.log(html);
            contenedorPrincipal.innerHTML = html;
        }
    )
    //contenedorPrincipal.innerHTML = 

}

function cargarModuloBlog(){
    let contenedorPrincipal = document.getElementById("panelPrincipal");

    //peticion FETCH
    fetch("../html/blog.html").then(
        function(data){
            return data.text();
        }
    ).then(
        function(html){
            console.log(html);
            contenedorPrincipal.innerHTML = html;
        }
    )
    //contenedorPrincipal.innerHTML = 

}
