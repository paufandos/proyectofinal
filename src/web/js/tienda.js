window.onload = () => {
    document.getElementById("login_icon").onclick = () => mostrarModal("login");
    document.getElementById("cart_icon").onclick = () => mostrarModal("carrito");
    fadeAnimation();
    addRefreshEvents();
    pintarCategorias();
};

function addRefreshEvents() {
    let refreshElements = document.getElementsByClassName("refresh");
    for (let element of refreshElements) {
        element.addEventListener('click', () => {
            location.reload();
        })
    }
}

function pintarCategorias() {
    let main = document.getElementById("main");
    main.innerHTML = `<div id="categorias" class="l-columns-3"></div>`;
    let layout = document.getElementById("categorias");
    datos.forEach(cat => {
        layout.innerHTML += `<div id="cat-${cat.nombre}" class="c-card">
                                <div class="c-card__nombre">${cat.nombre.toUpperCase()}</div>
                                <img src="./assets/img/${cat.nombre}.jpg" class="c-card__imagen" alt="${cat.nombre}" />
                            </div>`;
    });

    let cartas = layout.getElementsByClassName("c-card");
    Array.from(cartas).forEach(c => {
        c.onclick = () => pintarArticulos(c.id);
    });
}

function mostrarModal(modal) {
    document.getElementById(modal).showModal();
}

function pintarArticulos(id) {
    let main = document.getElementById("main");
    main.classList = "c-main c-main--background-dark"
    main.innerHTML = `<div id="products" class="c-products"></div>`;

    let layout = document.getElementById("products");
    let categoriaId = id.split("-", id.id);
    let categoryProducts = datos.filter(c => c.nombre == categoriaId[1]);

    categoryProducts[0].productos.forEach(p => {
        layout.innerHTML += `<div class="c-item">
                                <div class="c-item__title l-flex l-flex--align-items-center l-flex--justify-content-center">${p.nombre.toUpperCase()}</div>
                                <div id="producto_${p.id}" class="c-item__img"></div>
                                <div class="c-item__footer l-flex l-flex--align-items-center">
                                    <div class="c-item__icon c-item__icon--left">
                                        <i class="c-icon fa-solid fa-circle-info" onclick="window.detalleproducto.showModal()"></i>
                                    </div>
                                    <div class="c-item__price">${p.precio.toFixed(2)} €</div>
                                    <div class="c-item__icon c-item__icon--right">
                                        <i class="c-icon c-icon--alternativo fa-solid fa-cart-plus" ></i>
                                    </div>
                                </div>
                            </div>`;
    });

    let images = layout.getElementsByClassName("c-item__img");
    for (let img of images) {
        let rutaImg = "url('./assets/img/fotosProductos/" + img.id + ".jpg')";
        img.style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0),80%, rgb(227, 219, 206))," + rutaImg;
    }
}

function fadeAnimation() {
    let closeDialogs = document.getElementsByClassName('close');
    for (const x of closeDialogs) {
        x.onclick = function() {
            let dialogo = x.parentNode.parentNode.parentNode;
            dialogo.classList.add('c-modal--close');
            dialogo.addEventListener('webkitAnimationEnd', function(){
                dialogo.classList.remove('c-modal--close');
                dialogo.close();
                dialogo.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
            }, false);
        };
    }
}