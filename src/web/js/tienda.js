window.onload = () => {
    document.getElementById("login_icon").onclick = modalLogin;
    document.getElementById("cart_icon").onclick = modalCarrito;
    document.getElementById("cart-list_icon").onclick = modalHistorialCarrito;
    addRefreshEvents();
    mostrarCategorias();
};

function addRefreshEvents() {
    let refreshElements = document.getElementsByClassName("refresh");
    for (let element of refreshElements) {
        element.addEventListener('click', () => {
            location.reload();
        })
    }
}

function mostrarCategorias() {
    //declaracion de parametros que pasaremos al request
    const parametro = "categorias";
    const method = "get";

    //promesa para pintar las categorias
    request(method, parametro, null)
    //resolve de la promesa
    .then(listadoCategorias=>{let main = document.getElementById("main");
    main.innerHTML = `<div id="categorias" class="l-columns-3"></div>`;
    let layout = document.getElementById("categorias");
    
    JSON.parse(listadoCategorias).forEach(cat => {
        layout.innerHTML += `<div id="${cat.id}" class="c-card">
                                <div class="c-card__nombre">${cat.nombre.toUpperCase()}</div>
                                <img src="./assets/img/${cat.nombre}.jpg" class="c-card__imagen" alt="${cat.nombre}" />
                            </div>`;
    });
    //
    let cartas = layout.getElementsByClassName("c-card");
    Array.from(cartas).forEach(c => {
        c.onclick = () => mostrarProductos(c.id);
    });
    })
    //catch de la promesa
    .catch(error=>{
        console.log("Error");
    });
    
}

function mostrarProductos(id) {
    //declaracion de parametros que pasaremos al request
    const parametro = "productos";
    const method = "get";

    request(method, parametro, null)
    //resolve de la promesa
    .then(listadoProductos=>{
        let main = document.getElementById("main");
        main.classList = "c-main c-main--background-dark"
        main.innerHTML = `<div id="products" class="c-products"></div>`;

        let layout = document.getElementById("products");
        let productosCategoriaSeleccionada = JSON.parse(listadoProductos).filter(p => p.id_categoria == id);

        productosCategoriaSeleccionada.forEach(p => {
            layout.innerHTML += `<div class="c-item">
                                    <div class="c-item__title l-flex l-flex--align-items-center l-flex--justify-content-center">${p.nombre.toUpperCase()}</div>
                                    <div id="${p.id}" class="c-item__img"></div>
                                    <div class="c-item__footer l-flex l-flex--align-items-center">
                                        <div class="c-item__icon c-item__icon--left">
                                            <i id="${p.id}" class="c-icon fa-solid fa-circle-info"></i>
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
            let rutaImg = "url('./assets/img/fotosProductos/producto_" + img.id + ".jpg')";
            img.style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0),80%, rgb(227, 219, 206))," + rutaImg;
        }
    
        let infoIcon = layout.getElementsByClassName("fa-circle-info");
        for (let icon of infoIcon) {
            icon.onclick = () => mostrarDetalleProducto(icon.id)
        }
    })
    
    
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

function mostrarDetalleProducto(idProducto) {
    let dialog = document.getElementById("dialog");
    dialog.close();

    //declaracion de parametros que pasaremos al request
    const parametro = "productos";
    const method = "get";
    console.log(idProducto)

    //promesa para pintar las categorias
    request(method, parametro, null)
    //resolve de la promesa
    .then(listadoProductos=>{
        let articulo = JSON.parse(listadoProductos).find(p=> p.id == idProducto);

        dialog.classList = "c-modal c-modal--small detalleProductoModal";
        dialog.innerHTML = `<div class="c-bubble">
            <div class="l-flex l-flex--align-items-center l-flex--justify-content-space-between g--margin-bottom-5">
            <div class="c-title">${articulo.nombre}</div>
            <i class="c-icon c-icon--close fa-sharp fa-solid fa-xmark close"></i>
            </div>
            <div class="l-flex l-flex--justify-content-center">
            <img src="assets/img/fotosProductos/producto_${articulo.id}.jpg" class="c-img c-img--small">
            <div
                class="c-bubble c-bubble--dark g--margin-horizontal-5 l-flex l-flex--direction-column l-flex--justify-content-space-between">
                <div class="c-text">${articulo.descripcion}</div>
                <div class="l-flex l-flex--justify-content-space-between">
                <div class="c-title c-title--alternativo-secundario c-title--medium">${articulo.precio} €</div>
                <button class="c-button"><i class="fa-solid fa-cart-plus g--margin-right-4"></i>Añadir</button>
                </div>
            </div>
            </div>
        </div>`;
        fadeAnimation("detalleProductoModal");
        dialog.showModal();
    })
    .catch(error=>{
        console.log("Error")});
}

function request(method, parametro, body=null) {

    return new Promise((resolve,reject) => {

        let xhr = new XMLHttpRequest();

            xhr.open(method, `http://localhost:3000/${parametro}`);

            xhr.setRequestHeader("Content-type", "application/Json;charset=utf-8");

            xhr.response = "JSON";
   
            xhr.send();
    
            xhr.onload =  () => {
                
                if (xhr.status == 200) {
                    resolve(xhr.response);                    
                } else {
                    reject(console.log("ERROR " + xhr.status + " " + xhr.statusText));
                }   
            }
        }      

    )
        
};