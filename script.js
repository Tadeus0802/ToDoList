
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const list = document.getElementById("list");
var aux = "";
var aux2 = '';
const parrafo = document.querySelector("p");
let getlocal = localStorage.getItem("todo")

btn.addEventListener("click",(e)=>{
  aux = input.value;
  if(aux!=""){
    if(getlocal==null){
      arr = [];
    }
    else{
      arr = JSON.parse(getlocal);
    }
    input.value='';
    arr.push(aux);
    localStorage.setItem("todo",JSON.stringify(arr));
    parrafo.innerHTML=`You have ${JSON.parse(getlocal).length} ToDo's`;
  }
  else if(aux==""){
    e.preventDefault();
    Swal.fire({
      title: "You haven't enter a word",
    })
  }  
});

Mostrar();

function Mostrar(){
  if(getlocal==null){
    arr = [];
  }
  else{
    arr = JSON.parse(getlocal);
  }
  arr.forEach((array, index) => {
    let li = document.createElement('li');
    li.innerHTML +=`${array}
    <button class="btn" onclick="Delete(${index})">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
      </svg>
    </button>`;
    list.appendChild(li);
  });
};

document.getElementById("Delete").addEventListener("click",function(e){
  e.preventDefault()
  Swal.fire({
    title: 'You want to delete all tasks?',
    showCancelButton: true,
    confirmButtonText: `Eliminar`,
    denyButtonText: `Canelar`,
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.clear();
      Swal.fire('Deleted!')
      setTimeout(Espera, 500)
    } 
  })
})

document.addEventListener("DOMContentLoaded", function(){
  parrafo.innerHTML=`You have ${JSON.parse(getlocal).length} ToDo's`;
})

function Delete(index) {
  Swal.fire({
    title: 'You want to delete this task?',
    showCancelButton: true,
    confirmButtonText: `Delete`,
    denyButtonText: `Cancel`,
  }).then((result) => {
    if (result.isConfirmed) {
      let getlocal = localStorage.getItem("todo");
      arr = JSON.parse(getlocal);
      arr.splice(index,1)
      localStorage.setItem("todo",JSON.stringify(arr));
      Swal.fire('Deleted!')
      setTimeout(Espera, 500)
    } 
  })
}

function Espera(){
  location.reload();
}
