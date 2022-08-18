//Parte para los datos
var empresas=[
    {
        id:1,
        empresa1:'Larach',
        icon1:'<i class="fa-solid fa-screwdriver-wrench  empresas-icon"></i>',
        id:2,
        empresa2:'Ferromax',
        icon2:'<i class="fa-solid fa-paint-roller    empresas-icon"></i>',
        id:3,
        empresa3:'Alutech',
        icon3:'<i class="fa-solid fa-couch    empresas-icon"></i>',
        id:4,
        empresa4:'Decora',
        icon4:' <i class="fa-solid fa-helmet-safety   empresas-icon"></i>'
    },
]
var motoristasLibres=[
    {
        nombre1:'Motorista #1',
        nombre2:'Motoristas #2',
        img1:'./multimedia/user1.jpeg',
        img2:'./multimedia/user1.jpeg',
        info1:' #HAK1212/ 9898-1212',
        info2:' #QAE8237/ 9758-3251'
    }
]
var motoristasOcupado=[
    {
        
            nombre1:'Motorista #3',
            nombre2:'Motoristas #4',
            img1:'./multimedia/user1.jpeg',
            img2:'./multimedia/user1.jpeg',
            info1:' #HAK1212/ 9898-1212',
            info2:' #QAE8237/ 9758-3251'
        
    }
]

var pedidos=[
    {
        Object1:'Silla  El Sauce  9898-1212',
        Object2:'Lamina  El Sauce  9898-1212',
        Object3:'Herramientas  El Sauce  9898-1212',
        img1:'./multimedia/Silla.jpg',
        img2:'./multimedia/Lamina.jpg',
        img3:'./multimedia/Serrucho.jpg',
    }
]
var productos=[
    {
        id:1,
        empresa1:'LARACH',
        icon1:'<i class="fa-solid fa-screwdriver-wrench  empresas-icon"></i>',
        ubicacion1:'Ubicado en la Kennedy',
        id:2,
        empresa2:'FERROMAX',
        icon2:'<i class="fa-solid fa-paint-roller    empresas-icon"></i>',
        ubicacion2:'Ubicado en el Bvd. Morazán',
        id:3,
        empresa3:'ALUTECH',
        icon3:'<i class="fa-solid fa-couch    empresas-icon"></i>',
        ubicacion3:'Ubicado en el CityMall',
        id:4,
        empresa4:'DECORA',
        ubicacion4:'Ubicado en el anillo',
        icon4:' <i class="fa-solid fa-helmet-safety   empresas-icon"></i>'
    }
]



/*Funcion Switch que se encarga de cambiar al color del texto de
los botones aside y cambiar el contenido que se muestra en los
div con id container*/
function hacerClick(numero){
    switch (numero) {
    case 1:
        /**Parte de cambio de color con clicks */
        document.getElementById('btn1').classList.add('boton')
        document.getElementById('btn2').classList.remove('boton')
        document.getElementById('btn3').classList.remove('boton')
        document.getElementById('btn4').classList.remove('boton')
        /**Parte de cambio de info*/
        document.getElementById('content-0').innerHTML='<style> #content1{display: block;}</style>'
        document.getElementById('content-0').classList.remove('main')
        document.getElementById('content-1').innerHTML='<style> #content1{display: block;}</style>'
        document.getElementById('content-1').classList.add('main')
        document.getElementById('content-2').innerHTML='<style> #content2{display: none;}</style>'
        document.getElementById('content-2').classList.remove('main')
        document.getElementById('content-3').innerHTML='<style> #content3{display: none;}</style>'
        document.getElementById('content-3').classList.remove('main')
        document.getElementById('content-4').innerHTML='<style> #content3{display: none;}</style>'
        document.getElementById('content-4').classList.remove('main')
        generarEmpresas()
        break;
    case 2:
        /**Parte de cambio de color con clicks */
        document.getElementById('btn2').classList.add('boton')
        document.getElementById('btn1').classList.remove('boton')
        document.getElementById('btn3').classList.remove('boton')
        document.getElementById('btn4').classList.remove('boton')
        /**Parte de cambio de info*/
        document.getElementById('content-0').innerHTML='<style> #content1{display: block;}</style>'
        document.getElementById('content-0').classList.remove('main')
        document.getElementById('content-1').innerHTML='<style> #content1{display: block;}</style>'
        document.getElementById('content-1').classList.remove('main')
        document.getElementById('content-2').innerHTML='<style> #content2{display: none;}</style>'
        document.getElementById('content-2').classList.add('main')
        document.getElementById('content-3').innerHTML='<style> #content3{display: none;}</style>'
        document.getElementById('content-3').classList.remove('main')
        document.getElementById('content-4').innerHTML='<style> #content3{display: none;}</style>'
        document.getElementById('content-4').classList.remove('main')
        generarMotoritaslibres()
        generarMotoritasOcupado()

        break;  
    case 3:
        /**Parte de cambio de color con clicks */
        document.getElementById('btn3').classList.add('boton')
        document.getElementById('btn2').classList.remove('boton')
        document.getElementById('btn1').classList.remove('boton')
        document.getElementById('btn4').classList.remove('boton')
        /**Parte de cambio de info*/
        document.getElementById('content-0').innerHTML='<style> #content1{display: block;}</style>'
        document.getElementById('content-0').classList.remove('main')
        document.getElementById('content-1').innerHTML='<style> #content1{display: block;}</style>'
        document.getElementById('content-1').classList.remove('main')
        document.getElementById('content-2').innerHTML='<style> #content2{display: none;}</style>'
        document.getElementById('content-2').classList.remove('main')
        document.getElementById('content-3').innerHTML='<style> #content3{display: none;}</style>'
        document.getElementById('content-3').classList.add('main')
        document.getElementById('content-4').innerHTML='<style> #content3{display: none;}</style>'
        document.getElementById('content-4').classList.remove('main')
        generarOrdenes()
        break;
    case 4:
        /**Parte de cambio de color con clicks */
        document.getElementById('btn4').classList.add('boton')
        document.getElementById('btn2').classList.remove('boton')
        document.getElementById('btn3').classList.remove('boton')
        document.getElementById('btn1').classList.remove('boton')
        /**Parte de cambio de info*/
        document.getElementById('content-0').innerHTML='<style> #content1{display: block;}</style>'
        document.getElementById('content-0').classList.remove('main')
        document.getElementById('content-1').innerHTML='<style> #content1{display: block;}</style>'
        document.getElementById('content-1').classList.remove('main')
        document.getElementById('content-2').innerHTML='<style> #content2{display: none;}</style>'
        document.getElementById('content-2').classList.remove('main')
        document.getElementById('content-3').innerHTML='<style> #content3{display: none;}</style>'
        document.getElementById('content-3').classList.remove('main')
        document.getElementById('content-4').innerHTML='<style> #content3{display: none;}</style>'
        document.getElementById('content-4').classList.add('main')
        generarProductos()
        break;
    default:
        break;
    }
}
//Funciones que genrearn contenido dinamico

function generarEmpresas() {
    empresas.forEach(function (empresa) {
        document.getElementById('content-1').innerHTML+=
        `
        <h4>EMPRESAS:</h4>
                    <section class="empresas" id="empresa1"><p class="empresas-text">${empresa.empresa1} ${empresa.icon1}</p></section>
                    <section class="empresas" id="empresa1"><p class="empresas-text">${empresa.empresa2} ${empresa.icon2}</p></section>
                    <section class="empresas" id="empresa1"><p class="empresas-text">${empresa.empresa3} ${empresa.icon3}</p></section>
                    <section class="empresas" id="empresa1"><p class="empresas-text">${empresa.empresa4} ${empresa.icon4}</p></section>
        `   
        
    });   
    }

function generarMotoritaslibres() {
    motoristasLibres.forEach(function (libre) {
        document.getElementById('content-2').innerHTML+=
        `
        <section class="motorista" id="Sin-Carrera">
                        
                        <h4 id="Free-text">MOTORISTAS LIBRES</h4>
                        <div class="container-moto">
                            <section><img src="${libre.img1}" alt=""></section>
                            <section><p class="p-moto">${libre.nombre1} /${libre.info1}</p></section>
                            <section><button class="boton-asignar">Asignar</button></section>
                        </div>

                        <div class="container-moto">
                            <img src="${libre.img2}" alt="">
                            <p class="p-moto">${libre.nombre2} /${libre.info2}</p>
                            <button class="boton-asignar">Asignar</button>
                        </div>
                    </section>
        `   
        
    });   
}

function generarMotoritasOcupado() {
    motoristasOcupado.forEach(function (ocupado) {
        document.getElementById('content-2').innerHTML+=
        `
        <section class="motorista" id="Con-Carrera">
        <h4 id="Taken-text">MOTORISTAS EN CARRERA</h4>
        <div class="container-moto">
            <section><img src="${ocupado.img1}" alt=""></section>
            <section><p class="p-moto">${ocupado.nombre1} /${ocupado.info1}</p></section>
            <section><button class="boton-abrobar">Aprobar</button></section>
        </div>

        <div class="container-moto">
            <img src="${ocupado.img2}" alt="">
            <p class="p-moto">${ocupado.nombre2} /${ocupado.info2}</p>
            <button class="boton-abrobar">Aprobar</button>
        </div>                       
    </section>
        `   
        
    });   
}

function generarOrdenes() {
    pedidos.forEach(function (pedido) {
        document.getElementById('content-3').innerHTML+=
        `
        <h4>PEDIDOS LISTOS PARA ENTREGA</h4>
        <div class="pedido">
            <section id="img-pedido"><img src="${pedido.img1}" alt=""></section>
            <section id="info-pedido">${pedido.Object1}</section>
            <section class="boton-pedido"><button>Asignar</button></section>
        </div>
        <div class="pedido">
            <section id="img-pedido"><img src="${pedido.img2}" alt=""></section>
            <section id="info-pedido">${pedido.Object2}</section>
            <section class="boton-pedido"><button>Asignar</button></section>
        </div>
        <div class="pedido">
            <section id="img-pedido"><img src="${pedido.img3}" alt=""></section>
            <section id="info-pedido">${pedido.Object3}</section>
            <section class="boton-pedido"><button>Asignar</button></section>
        </div>
        `   
        
    }); 
}

function generarProductos() {
    productos.forEach(function (product) {
        document.getElementById('content-4').innerHTML+=
        `
        <h4>SUCURSALES</h4>
        <div class="container-productos">   
            <section><h3>${product.empresa1}</h3></section>
            <section>${product.icon1}</section>
            <section><h5>${product.ubicacion1}</h5></section>
        </div>
        <div class="container-productos">   
            <section><h3>${product.empresa2}</h3></section>
            <section>${product.icon2}</section>
            <section><h5>${product.ubicacion2}</h5></section>
        </div>
        <div class="container-productos">   
            <section><h3>${product.empresa3}</h3></section>
            <section>${product.icon3}</section>
            <section><h5>${product.ubicacion3}</h5></section>
        </div>
        <div class="container-productos">   
            <section><h3>${product.empresa4}</h3></section>
            <section>${product.icon4}</section>
            <section><h5>${product.ubicacion4}</h5></section>
        </div>
        `   
        
    }); 
}