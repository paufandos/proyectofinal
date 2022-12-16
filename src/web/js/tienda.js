window.onload = ()=>{
    document.getElementById("login_icon").onclick= () => mostrarModal("login");
    document.getElementById("cart_icon").onclick= () => mostrarModal("carrito");
    pintarCategorias();

};

function mostrarModal(modal) {
    document.getElementById(modal).showModal();
}

function pintarCategorias(){
    let main = document.getElementById("main");
    main.innerHTML = `<div class="l-columns-3"></div>`;

    let layout = main.getElementById("l-columns-3");
    datos.forEach(cat => {
       layout.innerHTML += `<div id="cat-${nombre}" class="c-card">
                            <div class="c-card__nombre">${cat.nombre}</div>
                            <img src="./assets/img/cafe.jpg" class="c-card__imagen" onclick="mostrarListado()" alt="Cafés" />
                        </div>`; 
    });

    let cartas = layout.getElementsByClassName("c-card");
    cartas.forEach( c => {
        c.onclick = pintarArticulos(c.id);
    });
}