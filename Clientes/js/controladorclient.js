//Parte para los datos
/*
var inventarios=[
{
    id:1,
    nombre:'Silla',
    imagen: './multimedia/Silla.jpg',
    precio: 500
},
{
    id:2,
    nombre:'Lamina',
    imagen: './multimedia/Lamina.jpg',
    precio: 150

},
{
    id:3,
    nombre:'Serrucho',
    imagen: './multimedia/Serrucho.jpg',
    precio: 200
}

]
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
        precio:100,
        cantitad:6,
        total:100*6,
        portada: './multimedia/Serrucho.jpg'

    },
    

]
*/
let user
let inventario

const cargarUser = async () => {
	const respuesta = await fetch("http://localhost:5500/usuarios", {
		method: "get",
        dataType:"json",
	});
	user = await respuesta.json();
	console.log("Usuarios", user);
};

const cargarInventario = async () => {
	const respuesta = await fetch("http://localhost:5500/inventario", {
		method: "get",
        dataType:"json",
	});
	inventario = (await respuesta.json()).result;
	console.log("inventario", inventario);
};



const OPCION_PEDIDOS = 1;
const OPCION_HOME = 2;
const OPCION_USERS = 3;


//Switch para cambiar la informacion de los DIVs de contenido
const seleccionarOpcion = (opcion) => {
    switch (opcion) {
        case OPCION_PEDIDOS:
            document.getElementById('content-0').innerHTML='<style> #content1{display: block;}</style>'
            document.getElementById('content-0').classList.remove('main')
            document.getElementById('content-1').innerHTML='<style> #content1{display: block;}</style>'
            document.getElementById('content-1').classList.add('main')
            document.getElementById('content-2').innerHTML='<style> #content2{display: none;}</style>'
            document.getElementById('content-2').classList.remove('main')
            document.getElementById('content-3').innerHTML='<style> #content3{display: none;}</style>'
            document.getElementById('content-3').classList.remove('main')
            generaP()
        break;
        case OPCION_HOME:
            document.getElementById('content-0').innerHTML='<style> #content1{display: block;}</style>'
            document.getElementById('content-0').classList.remove('main')
            document.getElementById('content-1').innerHTML='<style> #content1{display: none;}</style>'
            document.getElementById('content-1').classList.remove('main')
            document.getElementById('content-2').innerHTML='<style> #content2{display: block;}</style>'
            document.getElementById('content-2').classList.add('main')
            document.getElementById('content-3').innerHTML='<style> #content3{display: none;}</style>'
            document.getElementById('content-3').classList.remove('main')
            generaI()
        break;
        case OPCION_USERS:
            document.getElementById('content-0').innerHTML='<style> #content1{display: block;}</style>'
            document.getElementById('content-0').classList.remove('main')
            document.getElementById('content-1').innerHTML='<style> #content1{display: none;}</style>'
            document.getElementById('content-1').classList.remove('main')
            document.getElementById('content-2').innerHTML='<style> #content2{display: none;}</style>'
            document.getElementById('content-2').classList.remove('main')
            document.getElementById('content-3').innerHTML='<style> #content3{display: block;}</style>'
            document.getElementById('content-3').classList.add('main')
            generaU()
        break
        default:
        break;
    }
    
}
//funciones que generan la informacion con los jsons
/*
function generarUser() {
    User.forEach(function (u) {
        document.getElementById("content-3").innerHTML +=         
        `<div class="contentUser">         
        <section class="imagenPerfil">         
        <button class="profilepic"><img id="imagenDePerfil" src="${u.foto}" alt=""></button>         
        </section>         
        <section class="infoPerfil">             
        <h4 id="nombreUser">${u.Nombre}</h4>             
        <p id="ubicacionUser"> Dirección: ${u.direccion} y Telefono: ${u.Number}</p>         
        </section>          
        </div>         
        <hr id="linea">`
        
    });   
}
function generarInventario() {
    inventario.forEach(function (i) {
		document.getElementById("content-2").innerHTML +=`<div class="card">
        <section class="seccion1">
        <form action="./clientepago.html"><button class="botonimg"><img src="${i.imagen}" alt=""></button></form>
            <p class="precios">Lps.${i.precio}.00</p>
        </section>
        <section class="seccion2">
            <h4 id="NombreArticulo">${i.nombre}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, repudiandae?
            </p>
        </section> 
        </div>`  
    });  
}
function generarPedidos() {
    inventario.forEach( function (p) {
		document.getElementById("content-1").innerHTML +=
        ` <div class="contentPedidos">
        <section class="imagenDeProducto">
        <button class="producto"><img id="imagenProducto" src="${p[i].imagen}" alt=""></button>
        </section>
        <section class="infoPedido">
            <h4 id="numero">Pedido#${p[i].id} </h4>
            <h3 id="Pedido">${p[i].nombre}</h3>
            <h3 id="total">Total a pagar: ${p[i].precio}</h3>
            <h2 id="LugarEntrega">Cantidad: ${p[i].cantitad} </h2>
        </section> 
    </div>`;
	});   
}

*/


function generaU() {
    {()=>{
        $.ajax({
            url:'http://localhost:5500/usuarios',
            method:"GET",
            dataType:"JSON",
            success:(res)=>{
                console.log(res);
                for (let i = 0; i < res.length; i++) {
                    $('#content-3').append
                    ( `<div class="contentUser">         
                        <section class="imagenPerfil">         
                        <button class="profilepic"><img id="imagenDePerfil" src="${res.foto}" alt=""></button>         
                        </section>         
                        <section class="infoPerfil">             
                        <h4 id="nombreUser">${res.Nombre}</h4>             
                        <p id="ubicacionUser"> Dirección: ${res.direccion} y Telefono: ${res.Number}</p>         
                        </section>          
                        </div>         
                        <hr id="linea">`)
                    
                }
                
            },error:()=>{
                console.error(error);
            }
        });
    }};
}

function generaP() {
    {()=>{
        $.ajax({
            url:'http://localhost:5500/inventario',
            method:"GET",
            dataType:"JSON",
            success:(res1)=>{
                console.log(res1);
                for (let i = 0; i < res1.length; i++) {
                    $('#content-1').append
                    ( ` <div class="contentPedidos">
                    <section class="imagenDeProducto">
                    <button class="producto"><img id="imagenProducto" src="${res1.imagen}" alt=""></button>
                    </section>
                    <section class="infoPedido">
                        <h4 id="numero">Pedido#${res1.id} </h4>
                        <h3 id="Pedido">${res1.nombre}</h3>
                        <h3 id="total">Total a pagar: ${res1.precio}</h3>
                        <h2 id="LugarEntrega">Cantidad: ${res1.cantitad} </h2>
                    </section> 
                </div>`)
                    
                }
                
            },error:()=>{
                console.error(error);
            }
        });
    }};
}

function generaI() {
    {()=>{
        $.ajax({
            url:'http://localhost:5500/inventario',
            method:"GET",
            dataType:"JSON",
            success:(res2)=>{
                console.log(res2);
                for (let i = 0; i < res2.length; i++) {
                    $('#content-2').append
                    ( `<div class="card">
        <section class="seccion1">
        <form action="./clientepago.html"><button class="botonimg"><img src="${res2.imagen}" alt=""></button></form>
            <p class="precios">Lps.${res2.precio}.00</p>
        </section>
        <section class="seccion2">
            <h4 id="NombreArticulo">${res2.nombre}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, repudiandae?
            </p>
        </section> 
        </div>`)
                    
                }
                
            },error:()=>{
                console.error(error);
            }
        });
    }};
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

