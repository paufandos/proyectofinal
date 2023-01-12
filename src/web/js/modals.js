let modals = [
    {
        id: "login",
        tamanyo: "c-modal--medium",
        code: `<div>
                    <div class="l-flex l-flex--align-items-center l-flex--justify-content-end g--margin-bottom-5">
                    <i class="c-icon c-icon--small c-icon--close-light fa-sharp fa-solid fa-xmark close"></i>
                    </div>
                </div>
                <div class="l-columns">
                    <form class="c-bubble">
                    <div class="c-title">Inicio de sesión</div>
                    <label class="c-label" for="usuario">Usuario</label>
                    <input id="usuario" class="c-input c-input--w-100" name="usuario" type="text"
                        placeholder="Escribe aquí tu nombre de usuario">

                    <label class="c-label" for="password">Contraseña</label>
                    <input id="password" class="c-input c-input--w-100" name="password" type="password"
                        placeholder="Escribe aquí tu contraseña">

                    <div class="g--text-align-center">
                        <button class="c-button g--margin-top-10" type="submit">Inicia sesión</button><br>
                        <button class="c-button c-button--principal-terciario g--margin-top-2">¿Has olvidado tu contraseña?</button>
                    </div>
                    </form>
                    <div class="g--text-align-center">
                    <div class="c-title c-title--alternativo">Bienvenido a</div>
                    <img src="./assets/img/EducaCafe-2-08.png" alt="educafe_logo" class="c-img">
                    <div>
                        <button class="c-button c-button--alternativo-terciario g--margin-bottom-2">¿No tienes cuenta?
                        Regístrate</button><br>
                        <button id="registro" class="c-button c-button--secuendario">Regístrarse</button>
                    </div>
                    </div>
                </div>`
    },
    {
        id: "pago",
        tamanyo: "c-modal--xsmall",
        code: ` <div class="c-bubble">
                    <div class="l-flex l-flex--align-items-center l-flex--justify-content-space-between g--margin-bottom-5">
                        <div class="c-title">Formulario de pago</div>
                        <i class="c-icon c-icon--close fa-sharp fa-solid fa-xmark close"></i>
                    </div>
                    <form>
                        <label class="c-label" for="usuario">Nombre de la Tarjeta</label>
                        <input id="nombreTarjeta" class="c-input c-input--w-100" name="nombreTarjeta" type="text" size="47"
                            placeholder="Tal y como aparece en la tarjeta">
                    
                        <label class="c-label" for="numeroTarjeta">Número de la Tarjeta</label>
                        <input id="numeroTarjeta" class="c-input c-input--w-100" name="numeroTarjeta" type="password" size="47"
                            placeholder="Números sin separaciones">
                    
                        <div class="l-flex l-flex--justify-content-space-between">
                            <div>
                                <label class="c-label display--block" for="fecha">Fecha de caducidad</label>
                                <input class="c-input display--inline-block" id="mesTarjeta" type="text" maxlength="2" size="4"
                                    name="mesTarjeta" placeholder="MM">
                                <input class="c-input display--inline-block" id="anyoTarjeta" type="text" maxlength="2" size="4"
                                    name="anyoTarjeta" placeholder="YY">
                            </div>
                            <div>
                                <label class="c-label" for="codigoSeguridad">Código</label>
                                <input class="c-input" id="codigoSeguridad" type="text" maxlength="3" size="6" name="codigoSeguridad"
                                    placeholder="3 dígitos">
                            </div>
                        </div>
                        <label class="c-label">Formas de pago válidas:</label>
                        <div class="c-icon--lighter">
                            <i class="fa-brands fa-cc-visa fa-3x"></i>
                            <i class="fa-brands fa-cc-mastercard fa-3x"></i>
                            <i class="fa-brands fa-cc-paypal fa-3x"></i>
                            <i class="fa-brands fa-cc-apple-pay fa-3x"></i>
                            <i class="fa-brands fa-cc-amazon-pay fa-3x"></i>
                        </div>
                        <div class="g--text-align-right g--margin-top-10">
                            <button class="c-button">Confirmar pago</button>
                        </div>
                    </form>
                </div>`
    },
    {
        id: "registro",
        tamanyo: "c-modal--xsmall",
        code: `<div class="c-bubble">
                    <div class="l-flex l-flex--align-items-center l-flex--justify-content-space-between g--margin-bottom-5">
                    <div class="c-title">Formulario de registro</div>
                    <i class="c-icon c-icon--close fa-sharp fa-solid fa-xmark close"></i>
                    </div>
                    <form>
                    <label class="c-label" for="nombre">Nombre</label>
                    <input id="nombreRegistro" class="c-input c-input--w-100" name="nombreRegistro" type="text"
                        placeholder="Escriba su nombre">
                
                    <label class="c-label" for="apellido1">Primer apellido</label>
                    <input id="apellido1Registro" class="c-input c-input--w-100" type="text" name="apellido1Registro"
                        placeholder="Escriba su primer apellido">
                
                    <label class="c-label" for="apellido2">Segundo apellido</label>
                    <input id="apellido2Registro" class="c-input c-input--w-100" name="apellido2Registro" type="text"
                        placeholder="Escriba su segundo apellido">
                
                    <label class="c-label" for="correoRegistro">Correo electrónico</label>
                    <input id="correoRegistro" class="c-input c-input--w-100" name="correoRegistro" type="text"
                        placeholder="Escriba su correo electrónico">
                
                    <label class="c-label" for="passwordRegistro">Contraseña</label>
                    <input id="passwordRegistro" class="c-input c-input--w-100" type="password" name="passwordRegistro"
                        placeholder="Escriba su contraseña">
                
                    <label class="c-label" for="confirmarPasswordRegistro">Confirmar contraseña</label>
                    <input id="confirmarPasswordRegistro" class="c-input c-input--w-100" type="password"
                        name="confirmarPasswordRegistro" placeholder="Confirme su contraseña">
                
                    <div class="g--text-align-right g--margin-top-10">
                        <button class="c-button">Confirmar registro</button>
                    </div>
                    </form>
                </div>`
    },
    {
        id: "carrito",
        tamanyo: "c-modal--large",
        code: `<div class="c-bubble">
                <div class="l-flex l-flex--align-items-center l-flex--justify-content-space-between g--margin-bottom-5">
                <div class="c-title">Carrito 247</div>
                <i class="c-icon c-icon--close fa-sharp fa-solid fa-xmark close"></i>
                </div>
                <div class="c-cart-row c-cart-row--bold">
                <div></div>
                <div>Nombre</div>
                <div>Descripción</div>
                <div>Precio</div>
                <div>Unidades</div>
                <div>Total</div>
                <div></div>
                </div>
                <div class="c-cart-row">
                <img src="./assets/img/fotosProductos/producto_2.jpg" class="c-cart-row__img">
                <div>Café cortado</div>
                <div>Lorem ipsum dolor sit amet, conse adipiscing.</div>
                <div>0.80 €</div>
                <div>1</div>
                <div>0.80 €</div>
                <div>
                    <button class="c-button">+</button>
                    <button class="c-button">-</button>
                    <button class="c-button c-button--terciario">Eliminar</button>
                </div>
                </div>
                <div class="c-cart-row">
                <img src="./assets/img/fotosProductos/producto_22.jpg" class="c-cart-row__img">
                <div>Bocadillo completo</div>
                <div>Lorem ipsum dolor sit amet, conse adipiscing.</div>
                <div>2.00 €</div>
                <div>1</div>
                <div>2.00 €</div>
                <div>
                    <button class="c-button">+</button>
                    <button class="c-button">-</button>
                    <button class="c-button c-button--terciario">Eliminar</button>
                </div>
                </div>
                <div class="c-cart-row">
                <img class="c-cart-row__img" src="./assets/img/bocadillos.jpg">
                <div>Caracolas</div>
                <div>Lorem ipsum dolor sit amet, conse adipiscing.</div>
                <div>0.50 €</div>
                <div>3</div>
                <div>1.50 €</div>
                <div>
                    <button class="c-button">+</button>
                    <button class="c-button">-</button>
                    <button class="c-button c-button--terciario">Eliminar</button>
                </div>
                </div>
            
                <div class="c-cart-row__footer l-flex l-flex--align-items-center l-flex--justify-content-space-between">
                <div class="c-title">Total: 4.30 €</div>
                <button id="pago" class="c-button">Confirmar carrito</button>
                </div>
            </div>`
    },
    {
        id: "historial",
        tamanyo: "c-modal--large",
        code: `<div class="c-bubble">
                <div class="l-flex l-flex--align-items-center l-flex--justify-content-space-between g--margin-bottom-5">
                    <div class="c-title">Listado carritos</div>
                    <i class="c-icon c-icon--close fa-sharp fa-solid fa-xmark close"></i>
                </div>
                <div class="c-cart-list l-flex l-flex--align-items-center">
                    <div class="c-cart-list__title-cart"><i id="aversiva" class="c-icon c-icon--small fa-solid fa-eye"></i>Carrito 247</div>
                        <div class="c-cart-list__item c-cart-list__item--right">Pendiente de pago</div>
                        <div class="c-cart-list__item"><button class="c-button">Pagar</button></div>
                        <div class="c-cart-list__item"><button class="c-button">Recuperar</button></div>
                        <div class="c-cart-list__item"><button class="c-button c-button--danger">Borrar</button></div>
                    </div>
                    <div class="c-cart-list l-flex l-flex--align-items-center">
                        <div class="c-cart-list__title-cart"><i class="c-icon c-icon--small fa-solid fa-eye"></i>Carrito 248</div>
                        <div class="c-cart-list__item c-cart-list__item--right">Pago realizado</div>
                        <div class="c-cart-list__item"><button class="c-button c-button--danger">Borrar</button></div>
                    </div>
                    <div class="c-cart-list l-flex l-flex--align-items-center">
                        <div class="c-cart-list__title-cart"><i class="c-icon c-icon--small fa-solid fa-eye"></i>Carrito 249</div>
                        <div class="c-cart-list__item c-cart-list__item--right">Pago realizado</div>
                        <div class="c-cart-list__item"><button class="c-button c-button--danger">Borrar</button></div>
                    </div>
                    <div class="c-cart-list l-flex l-flex--align-items-center">
                        <div class="c-cart-list__title-cart"><i class="c-icon c-icon--small fa-solid fa-eye"></i>Carrito 250</div>
                        <div class="c-cart-list__item c-cart-list__item--right">Pendiente de pago</div>
                        <div class="c-cart-list__item"><button class="c-button">Pagar</button></div>
                        <div class="c-cart-list__item"><button class="c-button">Recuperar</button></div>
                        <div class="c-cart-list__item"><button class="c-button c-button--danger">Borrar</button></div>
                    </div>
                </div>
            </div>`
    },
    {
        id: "detalleCarritoHistorial",
        tamanyo: "c-modal--large",
        code: `<div class="c-bubble">
                    <div class="l-flex l-flex--align-items-center l-flex--justify-content-space-between g--margin-bottom-5">
                        <div class="c-title">Carrito 247 detalle historial</div>
                        <i class="c-icon c-icon--close fa-sharp fa-solid fa-xmark close"></i>
                    </div>
                <div class="c-cart-row c-cart-row--bold">
                    <div></div>
                    <div>Nombre</div>
                    <div>Descripción</div>
                    <div>Precio</div>
                    <div>Unidades</div>
                    <div>Total</div>
                    <div></div>
                </div>
                <div class="c-cart-row">
                    <img src="./assets/img/fotosProductos/producto_2.jpg" class="c-cart-row__img">
                    <div>Café cortado</div>
                    <div>Lorem ipsum dolor sit amet, conse adipiscing.</div>
                    <div>0.80 €</div>
                    <div>1</div>
                    <div>0.80 €</div>
                    <div>
                    </div>
                </div>
                <div class="c-cart-row">
                    <img src="./assets/img/fotosProductos/producto_22.jpg" class="c-cart-row__img">
                    <div>Bocadillo completo</div>
                    <div>Lorem ipsum dolor sit amet, conse adipiscing.</div>
                    <div>2.00 €</div>
                    <div>1</div>
                    <div>2.00 €</div>
                    <div>
                        <button class="c-button">+</button>
                        <button class="c-button">-</button>
                        <button class="c-button c-button--terciario">Eliminar</button>
                    </div>
                </div>
                <div class="c-cart-row">
                    <img class="c-cart-row__img" src="./assets/img/bocadillos.jpg">
                    <div>Caracolas</div>
                    <div>Lorem ipsum dolor sit amet, conse adipiscing.</div>
                    <div>0.50 €</div>
                    <div>3</div>
                    <div>1.50 €</div>
                    <div>
                        <button class="c-button">+</button>
                        <button class="c-button">-</button>
                        <button class="c-button c-button--terciario">Eliminar</button>
                    </div>
                </div>
            
                <div class="c-cart-row__footer l-flex l-flex--align-items-center l-flex--justify-content-space-between">
                    <div class="c-title">Total: 4.30 €</div>
                    <button id="pago" class="c-button">Confirmar carrito</button>
                </div>
            </div>`
    }
]