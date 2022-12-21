window.onload = () => {
    document.getElementById("login_icon").onclick = modalLogin;
    document.getElementById("cart_icon").onclick = modalCarrito;
    document.getElementById("cart-list_icon").onclick = modalHistorialCarrito;
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
                                        <i id="producto-${p.id}" class="c-icon fa-solid fa-circle-info"></i>
                                    </div>
                                    <div class="c-item__price">${p.precio.toFixed(2)} €</div>
                                    <div class="c-item__icon c-item__icon--right">
                                        <i  class="c-icon c-icon--alternativo fa-solid fa-cart-plus" ></i>
                                    </div>
                                </div>
                            </div>`;
    });

    let images = layout.getElementsByClassName("c-item__img");
    for (let img of images) {
        let rutaImg = "url('./assets/img/fotosProductos/" + img.id + ".jpg')";
        img.style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0),80%, rgb(227, 219, 206))," + rutaImg;
    }

    let infoIcon = layout.getElementsByClassName("fa-circle-info");
    for (let icon of infoIcon) {
        icon.addEventListener('click', modalDetalleProducto)
    }
}

function fadeAnimation(modalId) {
    let modal = document.getElementsByClassName(modalId);
    let close = modal[0].getElementsByClassName("close");
    close[0].onclick = function() {
            modal[0].classList.add('c-modal--close');
            modal[0].addEventListener('webkitAnimationEnd', function(){
                modal[0].classList.remove('c-modal--close');
                modal[0].close();
                modal[0].removeEventListener('webkitAnimationEnd',  arguments.callee, false);
            }, false);
        };
}

function modalLogin() {
    let dialog = document.getElementById("dialog");
    let modal = modals.find(m => m.id == "login");

    dialog.classList.add(modal.tamanyo);
    dialog.classList.add("loginModal");
    dialog.innerHTML = modal.code;

    fadeAnimation("loginModal");
    document.getElementById("registro").onclick = modalRegistro;
    dialog.showModal();
}


function modalRegistro() {
    let dialog = document.getElementById("dialog");
    dialog.close();
    let modal = modals.find(m => m.id == "registro");

    dialog.classList = "c-modal " + modal.tamanyo + " registroModal";
    dialog.innerHTML = modal.code;

    fadeAnimation("registroModal");
    dialog.showModal();
}

function modalCarrito() {
    let dialog = document.getElementById("dialog");
    dialog.close();
    let modal = modals.find(m => m.id == "carrito");

    dialog.classList = "c-modal " + modal.tamanyo + " carritoModal";
    dialog.innerHTML = modal.code;

    fadeAnimation("carritoModal");
    document.getElementById("pago").onclick = modalPago;
    dialog.showModal();
}

function modalPago() {
    let dialog = document.getElementById("dialog");
    dialog.close();
    let modal = modals.find(m => m.id == "pago");

    dialog.classList = "c-modal " + modal.tamanyo + " pagoModal";
    dialog.innerHTML = modal.code;

    fadeAnimation("pagoModal");
    dialog.showModal();
}

function modalHistorialCarrito() {
    let dialog = document.getElementById("dialog");
    dialog.close();
    let modal = modals.find(m => m.id == "historial");

    dialog.classList = "c-modal " + modal.tamanyo + " historialCarritoModal";
    dialog.innerHTML = modal.code;

    fadeAnimation("historialCarritoModal");
    let eyeIcon = document.getElementById("aversiva");
    eyeIcon.addEventListener('click', modalCarrito);
    dialog.showModal();
}

function modalDetalleProducto() {
    let dialog = document.getElementById("dialog");
    dialog.close();
    let modal = modals.find(m => m.id == "detalleProducto");

    dialog.classList = "c-modal " + modal.tamanyo + " detalleProductoModal";
    dialog.innerHTML = modal.code;

    fadeAnimation("detalleProductoModal");
    dialog.showModal();
}