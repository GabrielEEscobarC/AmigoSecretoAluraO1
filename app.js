// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Modificado Gabriel Escobar 17 mar 2025 15:50.
// Se hace un diagrama de flujo manual y se revisan
// Variables globales a usar y 
// Listas a usar.


let amigos = [];
let i = 0;

function  agregarAmigo() 
{
//PTE revision de funcionalidad para limpiar los datos de entrada.
//nombre = inputAmigo.value; 
// const nombreAmigo = inputAmigo.ariaValueMax.trim();

//Ingreso del dato desde la Caja de Entrada en la web o Html.
const inputAmigo = document.getElementById('amigo'); 
nombre = inputAmigo.value;

//Validar duplicado de nombres.
if(amigos.includes(nombre)){

    alert(`El nombre de: ${nombre} , ya esta en la lista. ingrese otro por favor`);
    return;
}

amigos[i] = inputAmigo.value; // document.getElementById('amigo').textContent;
 
//Pto de control de funcionalidad.
// alert(`Ingrsaste el amigo:  ${amigos[i]}` );

//Validar que se ingresa un nombre o dato en la caja de entrada o indicar sorteo listo.
 if ( amigos[i] === '')
    {
         // AsigneTextoElemento('h2',`Ingrese un nombre por favor`); 
        alert(`Ingrese un nombre por favor` );
        return;    
    }
    else
    {        
        Act_list()  
        // Revisar con push PTE.
        // amigos.push = inputAmigo.value; // document.getElementById('amigo').textContent;

        AsigneTextoElemento('h2',` ${(i>0) ? `Hay ${i+1} amigos: Puede sortear o ingresar otro amigo` : 'Ingrese otro amigo'}`); 
        i++
        // habilitar el boton sorteo cuando i>1
        if (i>1)
            {
                document.getElementById(`sortear`).disabled=false;
            }
        CleanBox();
        return;
    }

}


//Función del sorteo, se escoge aleatorio un indice para la lista amigos y ese es el Amigo Secreto a adivinar.
function  sortearAmigo() 
{
    //Validamos que la lista tenga datos (amigos disponibles) para el proceso
    if (amigos.length===0)
        {
        alert('No se han ingresado nombres de amigos. Favor revisar o contactar con Adm');
        return;
        }
    
        //Sacamos el número aleatorio
    let s = 0;
    s= GiveSecretNumber(amigos.length);

const   Secreto =  amigos[s];

// Mostrar el resultado del sorteo de Amigo Secreto.  
const resultado = document.getElementById("resultado"); 
resultado.innerHTML= `Su Amigo Secreto es:  ${Secreto}`; // document.getElementById('amigo').textContent;



// Ahora vamos a construir la fase de adivinar el Amigo Secreto...
/*
const inputAmigo = document.getElementById('amigo'); 
nombre = inputAmigo.value; // document.getElementById('amigo').textContent;

if (amigos[s] == nombre) 
    {
        AsigneTextoElemento('h2',`Descubrió el Amigo Secreto. Muy bien!`);
        AsigneTextoElemento('p',`El Amigo fue: ${nombre}  `);
       // "resultado" 
        return;
    }
    else
    {

/*        for (b=0;b<=amigos.length;b++)
            { 
                if ( amigos[b] === nombre)
                    {
                    AsigneTextoElemento('h2',`El nombre SI esta en la lista del Amigo Secreto. Pero has otro intento`); 
                    return;       
                    
                    }


                    else
                    {
                        AsigneTextoElemento('h2',` ${(b==amigos.length) ? 'El nombre no esta en la lista de amigos intente con uno de la lista' : 'Ingrese otro nombre o pruebe de nuevo para saber el Amigo Secreto'}`); 
                        
                        return;
                    }
            } 
   }*/

}





function Act_list()
{
//Limpiemos la lista que se tenga en el Html (Pte hacerlo con Clearbox)
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML="";

//Pasamos la lista de js a html para mostrarla
for(let j=0;j<amigos.length;j++)
    {
        const li = document.createElement("li");
        li.textContent = amigos[j];
        listaAmigos.appendChild(li);
    }
}



//FUNCIONES AUXILIARES:

function AsigneTextoElemento(element,text) 
{
    let elementHTML = document.querySelector(element); //funcionará con ¨ "o " con 'vez' : 'veces' con 
        elementHTML.innerHTML = text; //'Juego del número secreto';
        return;
}


//FUNTION funcion para el numero aleatorio
function GiveSecretNumber(Maxintent) 
{
    NumSecret = parseInt(Math.floor(Math.random()*Maxintent));
        return NumSecret;  
  }


 // FUNTION limpiar la caja de inputs id  en el html
  function CleanBox() 
  {
     document.querySelector('#amigo').value = '';
  }

