//Parte para los datos
var usuarios=[
    {
        Nombre:'Daniel',
        foto:'./multimedia/user1.jpeg',
        direccion:'Residencial las uvas',
        Number:'9595-8985'
    },
    {
        Nombre:'TristeBoy',
        foto:'./multimedia/user2.jpeg',
        direccion:'Primera Entrada Kennedy',
        Number:'8859-1203'
    },
    {
        Nombre:'MorteritoMan',
        foto:'./multimedia/user3.jpeg',
        direccion:'Valle de Angeles',
        Number:'9541-1526'
    }
]
var ordenen=[
    {
        ord:'Orden 1',
        v: 'ver'
    },
    {
        ord:'Orden 2',
        v: 'ver'
    },
    {
        ord:'Orden 3',
        v: 'ver'
    }]
    var pedidos=[
        {
            id:1,
            pedido:'Silla',
            precio:250,
            cantitad:5,
            total:250*5,
            portada: './multimedia/Silla.jpg'
    
        },
        {
            id:2,
            pedido:'Lamina',
            precio:50,
            cantitad:7,
            total:50*7,
            portada: './multimedia/Lamina.jpg'
        },
        {
            id:3,
            pedido:'Serrucho',
            precio:100,}
        
    ]
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
        id:1,
        pedido:'Silla',
        precio:250,
        cantitad:5,
        total:250*5,
        portada: './multimedia/Silla.jpg'

    },
    {
        id:2,
        pedido:'Lamina',
        precio:50,
        cantitad:7,
        total:50*7,
        portada: './multimedia/Lamina.jpg'
    },
    {
        id:3,
        pedido:'Serrucho',
        precio:100,}
    
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
const OPCION_PEDIDOS = 1;
const OPCION_HOME = 2;
const OPCION_USERS = 3;
const avanzar = 4;
const OP = 5;
const OPCION = 6;

{()=>{
    $.ajax({
        url:'../routers/usuarios-router.js',
        method:"GET",
        dataType:"json",
        success:()=>{
            console.log(res);
            for (let i = 0; i < res.length; i++) {
                $('#usuarioActual').append(`<option values=" ${res[i]._id} "> ${res[i].nombreUsuario} </option`)                
            }
            $('#usuarioActual').val(null);
        },error:()=>{
            console.error(error);
        }   
    });
}};

const seleccionarOpcion = (opcion) => {
    switch (opcion) {
        case OPCION_PEDIDOS:
            document.getElementById('content-0').innerHTML='<style> #content0{display: none;}</style>'
            document.getElementById('content-0').classList.remove('main')
            document.getElementById('content-1').innerHTML='<style> #content1{display: block;}</style>'
            document.getElementById('content-1').classList.add('main')
            document.getElementById('content-2').innerHTML='<style> #content2{display: none;}</style>'
            document.getElementById('content-2').classList.remove('main')
            document.getElementById('content-3').innerHTML='<style> #content3{display: none;}</style>'
            document.getElementById('content-3').classList.remove('main')
            generarPedidos()
            
        break;
        case OPCION_HOME:
            document.getElementById('content-0').innerHTML='<style> #content0{display: block;}</style>'
            document.getElementById('content-0').classList.remove('main')
            document.getElementById('content-1').innerHTML='<style> #content1{display: none;}</style>'
            document.getElementById('content-1').classList.remove('main')
            document.getElementById('content-2').innerHTML='<style> #content2{display: block;}</style>'
            document.getElementById('content-2').classList.add('main')
            document.getElementById('content-3').innerHTML='<style> #content3{display: none;}</style>'
            document.getElementById('content-3').classList.remove('main')
            generarPedidos2() 
        break;
        case OPCION_USERS:
            document.getElementById('content-0').innerHTML='<style> #content-0{display: none;}</style>'
            document.getElementById('content-0').classList.remove('main')
            document.getElementById('content-1').innerHTML='<style> #content1{display: none;}</style>'
            document.getElementById('content-1').classList.remove('main')
            document.getElementById('content-2').innerHTML='<style> #content2{display: none;}</style>'
            document.getElementById('content-2').classList.remove('main')
            document.getElementById('content-3').innerHTML='<style> #content3{display: block;}</style>'
            document.getElementById('content-3').classList.add('main')
            generarPerfil()
        break;
        case avanzar:
            /**Parte de cambio de color con clicks */
            document.getElementById('content-0').innerHTML='<style> #content4{display: block;}</style>'
            document.getElementById('content-0').classList.remove('main')
            document.getElementById('content-4').innerHTML='<style> #content4{display: block;}</style>'
            document.getElementById('content-4').classList.add('main')
            document.getElementById('content-5').innerHTML='<style> #content5{display: none;}</style>'
            document.getElementById('content-5').classList.remove('main')
            document.getElementById('content-6').innerHTML='<style> #content6{display: none;}</style>'
            document.getElementById('content-6').classList.remove('main')
            generarOrden()
        break;
    case OP:
            /**Parte de cambio de color con clicks */
            document.getElementById('content-0').innerHTML='<style> #content4{display: block;}</style>'
            document.getElementById('content-0').classList.remove('main')
            document.getElementById('content-1').innerHTML='<style> #content1{display: none;}</style>'
            document.getElementById('content-1').classList.remove('main')
            document.getElementById('content-2').innerHTML='<style> #content2{display: none;}</style>'
            document.getElementById('content-2').classList.remove('main')
            document.getElementById('content-3').innerHTML='<style> #content3{display: none;}</style>'
            document.getElementById('content-3').innerHTML='<style> #content3{display: none;}</style>'
            document.getElementById('content-3').classList.remove('main')
            document.getElementById('content-4').innerHTML='<style> #content4{display: none;}</style>'
            document.getElementById('content-4').classList.remove('main')
            document.getElementById('content-5').innerHTML='<style> #content5{display: block;}</style>'
            document.getElementById('content-5').classList.add('main')
            document.getElementById('content-6').innerHTML='<style> #content6{display: none;}</style>'
            document.getElementById('content-6').classList.remove('main')
            generarOrden2()

        break;  
    case OPCION:
            /**Parte de cambio de color con clicks */
            document.getElementById('content-0').innerHTML='<style> #content4{display: block;}</style>'
            document.getElementById('content-0').classList.remove('main')
            document.getElementById('content-4').innerHTML='<style> #content4{display: none;}</style>'
            document.getElementById('content-4').classList.remove('main')
            document.getElementById('content-5').innerHTML='<style> #content5{display: none;}</style>'
            document.getElementById('content-5').classList.remove('main')
            document.getElementById('content-6').innerHTML='<style> #content6{display: block;}</style>'
            document.getElementById('content-6').classList.add('main')
            
            generarOrden3()
        break;
        default:
            break;
    }
    
}
/*Funcion Switch que se encarga de cambiar al color del texto de
los botones aside y cambiar el contenido que se muestra en los
div con id container*/

function regresar(){
    `<href="./motorista.html">`
}
    //funciones que generan la informacion con los jsons
    function generarArticulos() {
        inventarios.forEach(function (list) {
            document.getElementById('content-2').innerHTML+=
            `<h4>Ordenes disponibles</h4>
            <div class="card">
            <section class="seccion1">
            <form action="./clientepago.html"><button class="botonimg"><img src="${list.imagen}" alt=""></button></form>
                <p class="precios">Lps.${list.precio}.00</p>
            </section>
            <section class="seccion2">
                <h4 id="NombreArticulo">${list.nombre}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, repudiandae?
                </p>
            </section> 
            </div>
            `   
            
        });   
        }
    
    function generarPerfil() {
            usuarios.forEach(function (user) {
                document.getElementById('content-3').innerHTML+=
                `
                <div class="contentUser">
                <section class="imagenPerfil">
                <button class="profilepic"><img id="imagenDePerfil" src="${user.foto}" alt=""></button>
                </section>
                <section class="infoPerfil">
                    <h4 id="nombreUser">${user.Nombre}</h4>
                    <p id="ubicacionUser"> Dirección: ${user.direccion} y Telefono: ${user.Number}</p>
                </section> 
                </div>
                <hr id="linea">
                `   
                
            });   
        }

    function generarOrden() {
            ordenen.forEach(function (user) {
                document.getElementById('content-4').innerHTML+=
                `
                   
                    <form action="./resumen.html"><section class="empresas" id="empresa1"><p class="empresas-text">${user.ord} </p><button class="boton-asignar">Ver</button>
                    </section>
                
                `   
                
            });   
        }
        function generarOrden2() {
            ordenen.forEach(function (user) {
                document.getElementById('content-5').innerHTML+=
                `
                   
                    <form action="./resumen.html"><section class="empresas" id="empresa1"><p class="empresas-text">${user.ord} </p><button class="boton-asignar">Ver</button>
                    </section>
                
                `   
                
            });   
        }
        function generarOrden3() {
            ordenen.forEach(function (user) {
                document.getElementById('content-6').innerHTML+=
                `
                   
                    <form action="./resumen.html"><section class="empresas" id="empresa1"><p class="empresas-text">${user.ord} </p><button class="boton-asignar">Ver</button>
                    </section>
                
                `   
                
            });   
        }
        function generarPedidos() {
            pedidos.forEach(function (pedido) {
                document.getElementById('content-1').innerHTML+=
                `
                <div class="contentPedidos">
                        <section class="imagenDeProducto">
                        <button class="producto"><img id="imagenProducto" src="${pedido.portada}" alt=""></button>
                        </section>
                        <section class="infoPedido">
                            <h4 id="numero">Pedido#${pedido.id} </h4>
                            <h3 id="Pedido">${pedido.pedido}</h3>
                            <h3 id="total">Total a pagar: ${pedido.total}</h3>
                            <h2 id="LugarEntrega">Cantidad: ${pedido.cantitad} </h2>
                        </section> 
                    </div>
                `   
                
            });   
            }
            function generarPedidos2() {
                pedidos.forEach(function (pedido) {
                    document.getElementById('content-2').innerHTML+=
                    `
                    <div class="contentPedidos">
                            <section class="imagenDeProducto">
                            <button class="producto"><img id="imagenProducto" src="${pedido.portada}" alt=""></button>
                            </section>
                            <section class="infoPedido">
                                <h4 id="numero">Pedido#${pedido.id} </h4>
                                <h3 id="Pedido">${pedido.pedido}</h3>
                                <h3 id="total">Total a pagar: ${pedido.total}</h3>
                                <h2 id="LugarEntrega">Cantidad: ${pedido.cantitad} </h2>
                            </section> 
                        </div>
                    `   
                    
                });   
                }
    
    //Funciones para el codigo de clientes pedido
    //funcion del input number
    jQuery('<div class="quantity-nav"><div><button class="botonInput  quantity-button quantity-up">+</button></div><div><button class=" botonInput  quantity-button quantity-down">-</button></div></div>').insertAfter('.quantity input');
        jQuery('.quantity').each(function() {
          var Indicador = jQuery(this),
            input = Indicador.find('input[type="number"]'),
            btnUp = Indicador.find('.quantity-up'),
            btnDown = Indicador.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');
    
          btnUp.click(function() {
            var ValorViejo = parseFloat(input.val());
            if (ValorViejo >= max) {
              var ValorNuevo = ValorViejo;
            } else {
              var ValorNuevo = ValorViejo + 1;
            }
            Indicador.find("input").val(ValorNuevo);
            Indicador.find("input").trigger("change");
          });
    
          btnDown.click(function() {
            var ValorViejo = parseFloat(input.val());
            if (ValorViejo <= min) {
              var ValorNuevo = ValorViejo;
            } else {
              var ValorNuevo = ValorViejo - 1;
            }
            Indicador.find("input").val(ValorNuevo);
            Indicador.find("input").trigger("change");
          });
    
        });

        