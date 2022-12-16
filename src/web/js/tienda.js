window.onload = ()=>{
    //document.getElementById("login_icon").onclick= () => mostrarModal("dialogLogin");
    document.getElementById("cart_icon").onclick= () => mostrarModal("carrito");
    pintarCategorias();

};

function pintarCategorias(){
    //let main = document.getElementById("main");
    //main.innerHTML = `<div class="l-columns-3"></div>`;
    let layout = document.getElementById("l-columns-3");
    datos.forEach(cat => {
    layout.innerHTML += `<div id="cat-${cat.nombre}" class="c-card">
                            <div class="c-card__nombre">${cat.nombre}</div>
                            <img src="./assets/img/${cat.nombre}.jpg" class="c-card__imagen" onclick="mostrarListado()" alt="${cat.nombre}" />
                        </div>`;
    });
}

/*
function mostrarModal(modal) {
    document.getElementById(modal).showModal();
}*/
/*


    let cartas = layout.getElementsByClassName("c-card");
    cartas.forEach( c => {
        c.onclick = pintarArticulos(c.id);
    });
}


function pintarArticulos(){

}
*/
