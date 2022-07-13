import './style.css'
import axios from 'axios';
import {IResproducto, Producto} from './interfaces/iproductos' ;
const httpsAxios = axios.create({
  baseURL: 'http://localhost:2400/v2/sextob/api/'
})

const app = document.querySelector<HTMLDivElement>('#app')!

const ticket=document.createElement('label');
ticket.textContent='ID'
const input = document.createElement('input');
input.id='id';
ticket.htmlFor = 'id';
//appendChild permite insertar texto plano
app.appendChild(ticket);
app.appendChild(input);
//el += es para evitar que se reinicien las ids de las etiquetas
app.innerHTML += `<label for='nombre'>Nombre</label><input id='nombre'/>
<label for='estado'>Estado</label><input id='estado'/>
<label for='precio'>Precio</label><input id='precio'/>
<label for='costo'>Costo</label><input id='costo'/>
<label for='stock'>Stock</label><input id='stock'/>
<label for='minimo'>Mínimo</label><input id='minimo'/>

<button id="nuevo">Nuevo</button>
<button id="grabar">Grabar</button>
<button id="consultar">Consultar</button>

<div id='cuerpo'/>
`;

const id= document.querySelector<HTMLInputElement>('#id')!;//seguro que existe usa !
const nombre= document.querySelector<HTMLInputElement>('#nombre')!;
const precio= document.querySelector<HTMLInputElement>('#precio')!;
const costo= document.querySelector<HTMLInputElement>('#costo')!;
const stock= document.querySelector<HTMLInputElement>('#stock')!;
const minimo= document.querySelector<HTMLInputElement>('#minimo')!;
const estado= document.querySelector<HTMLInputElement>('#estado')!;

const nuevo= document.querySelector<HTMLInputElement>('#nuevo')!;
const grabar= document.querySelector<HTMLInputElement>('#grabar')!;
const consultar= document.querySelector<HTMLInputElement>('#consultar')!;
const cuerpo= document.querySelector<HTMLDivElement>('#cuerpo')!;

//agregando funcionalidades usando addEventListener

nuevo.addEventListener('click',()=>{
  id.value="";
  nombre.value="";
  precio.value="";
  costo.value="";
  stock.value="";
  minimo.value="";
  estado.value="";

})

consultar.addEventListener('click',async ()=>{
 const resProodcutos:IResproducto=  await (await httpsAxios.get<IResproducto>('productos/hola')).data;
 console.log(resProodcutos);
 const {productos} =resProodcutos
 const tabla= document.createElement('table');
 tabla.id="tabla";
 tabla.border="1px solid";
 for (const producto of productos) {
  const row = tabla.insertRow();
  const cell = row.insertCell();
  cell.innerHTML=`<button class="boton" value="${producto._id}">${producto.nombre}</button>`;
  const cell2 = row.insertCell();
  cell2.innerHTML=`${producto.precio}`;
  const cell3 = row.insertCell();
  cell3.innerHTML=`${producto.costo}`;
  const cell4 = row.insertCell();
  cell4.innerHTML=`${producto.stock}`;
  const cell5 = row.insertCell();
  cell5.innerHTML=`${producto.minimo}`;
  const cell6 = row.insertCell();
  cell6.innerHTML=`${producto.estado}`;
 }
 cuerpo.innerHTML="";
 cuerpo.appendChild(tabla);
 document.querySelectorAll('.boton').forEach((elemento:Element)=>{
  elemento.addEventListener('click', async ()=>{
    const {data} =  await httpsAxios.get<Producto>(`productos/${(elemento as HTMLButtonElement).value}`);
    console.log(data);
    nombre.value = data.nombre;
    precio.value =  data.precio.toString();
    costo.value = data.costo.toString();
    minimo.value = data.minimo.toString();
    stock.value = data.stock.toString();
    estado.value = data.estado!.toString();
    id.value = data._id!;
    //httpsAxios.get(`productos/62ba6c56f371a5cffcfc5ddb`)
    });
})
});

const asignarValores = () => {
  const data:Producto = {
    nombre : nombre.value,
    precio : Number(precio.value),
    costo :  Number(costo.value),
    stock :  Number(stock.value),
    minimo :  Number(minimo.value),
  }
  return data;
}

grabar.addEventListener('click', async ()=>{
  //el punto data lo que duelve es un json por esa razon agregamos ".data en el Axios, para tener el retorno del json."
  const data = asignarValores(); //}
  if(id.value.trim().length > 0) {
    const resproducto:Producto = await (await httpsAxios.put(`productos/${id.value}`, data)).data;
    //parametro opcion que muestra un mensaje temporal
    console.log(`El producto ${resproducto.nombre} fue modifidicado con exito.`);
    return;
  }
  
  try {
    const resproducto:Producto = await (await httpsAxios.post<Producto>(`productos`, data)).data;
    console.log(`El producto ${resproducto.nombre} fue insertado con exito.`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(`Error en axios...`);
    }
    console.log(`Error: ${error}`);
  }
});