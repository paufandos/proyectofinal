window.onload = () => {
<<<<<<< HEAD
    document.getElementById("login_icon").onclick = () => mostrarModal("dialogLogin");
    document.getElementById("cart_icon").onclick = () => mostrarModal("carrito");
    addRefreshEvents();
=======
    document.getElementById("login_icon").onclick = () => mostrarModal("login");
    document.getElementById("cart_icon").onclick = () => mostrarModal("carrito");
>>>>>>> joseluis_11
    pintarCategorias();
};

<<<<<<< HEAD
function addRefreshEvents() {
    let refreshElements = document.getElementsByClassName("refresh");
    for (let element of refreshElements) {
        element.addEventListener('click', () => {
            location.reload();
        })
    }
}

=======
>>>>>>> joseluis_11
function pintarCategorias() {
    let main = document.getElementById("main");
    main.innerHTML = `<div id="categorias" class="l-columns-3"></div>`;
    let layout = document.getElementById("categorias");
    datos.forEach(cat => {
        layout.innerHTML += `<div id="cat-${cat.nombre}" class="c-card">
<<<<<<< HEAD
                                <div class="c-card__nombre">${cat.nombre.toUpperCase()}</div>
                                <img src="./assets/img/${cat.nombre}.jpg" class="c-card__imagen" alt="${cat.nombre}" />
                            </div>`;
=======
                            <div class="c-card__nombre">${cat.nombre.toUpperCase()}</div>
                            <img src="./assets/img/${cat.nombre}.jpg" class="c-card__imagen" alt="${cat.nombre}" />
                        </div>`;
>>>>>>> joseluis_11
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
<<<<<<< HEAD
    main.classList = "c-main c-main--background-dark"
=======
>>>>>>> joseluis_11
    main.innerHTML = `<div id="products" class="c-products"></div>`;

    let layout = document.getElementById("products");
    let categoriaId = id.split("-", id.id);
    let categoryProducts = datos.filter(c => c.nombre == categoriaId[1]);

    categoryProducts[0].productos.forEach(p => {
        layout.innerHTML += `<div class="c-item">
                                <div class="c-item__title">${p.nombre.toUpperCase()}</div>
                                <div id="producto_${p.id}" class="c-item__img"></div>
                                <div class="c-item__footer l-flex l-flex--align-items-center">
                                    <div class="c-item__icon c-item__icon--left">
                                        <i class="c-icon fa-solid fa-circle-info"></i>
                                    </div>
                                    <div class="c-item__price">${p.precio.toFixed(2)} €</div>
                                    <div class="c-item__icon c-item__icon--right">
                                        <i class="c-icon c-icon--alternativo fa-solid fa-cart-plus"></i>
                                    </div>
                                </div>
                            </div>`;
    });

    let images = layout.getElementsByClassName("c-item__img");
<<<<<<< HEAD
    for (let img of images) {
        let rutaImg = "url('./assets/img/" + img.id + ".jpg')";
        img.style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0),80%, rgb(227, 219, 206))," + rutaImg;
=======
    for (let img of images){
        let rutaImg = "url('./assets/img/"+img.id+".jpg')";
        img.style.backgroundImage = "linear-gradient(to bottom, rgb(255, 255, 255), 75% , rgb(214, 201, 184))," + rutaImg;
>>>>>>> joseluis_11
    }
}